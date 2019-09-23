import React, { useState, useEffect, ReactNode } from 'react';
import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  LayoutChangeEvent,
} from 'react-native';

interface IProps {
  text: string;
  numberOfLines: number;
  textVisibility?: boolean;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  renderViewMore: (onPress: () => void) => ReactNode;
  renderViewLess: (onPress: () => void) => ReactNode;
  onChangeTextVisibility?: (v: boolean) => void;
}

const DEFAULT_FONT_SIZE = 14;
const DEFAULT_LINE_HEIGHT = 18;

const ReadMore: React.FC<IProps> = ({
  text,
  numberOfLines,
  renderViewMore,
  renderViewLess,
  textVisibility = false,
  containerStyle = {},
  textStyle = {},
  onChangeTextVisibility = () => {},
}: IProps) => {
  const [textVisibilityState, setTextVisibility] = useState(false);
  const [footerVisibilityState, setFooterVisibility] = useState(false);

  useEffect(() => {
    if (textVisibility !== textVisibilityState) {
      setTextVisibility(textVisibility);
    }
  }, [textVisibility]);

  const textStyles = [
    {
      fontSize: DEFAULT_FONT_SIZE,
      lineHeight: DEFAULT_LINE_HEIGHT,
    },
    textStyle,
  ];

  const fontSize = textStyle.fontSize || DEFAULT_FONT_SIZE;

  const handleMorePress = (): void => {
    setTextVisibility(true);
    onChangeTextVisibility(true);
  };

  const handleLessPress = (): void => {
    setTextVisibility(false);
    onChangeTextVisibility(false);
  };

  const onLayout = (event: LayoutChangeEvent): void => {
    if (event.nativeEvent.layout.height > fontSize * numberOfLines) {
      setFooterVisibility(true);
    } else {
      setFooterVisibility(false);
    }
  };

  const renderFooter = (): ReactNode => {
    if (textVisibilityState) {
      return renderViewLess(handleLessPress);
    }
    return renderViewMore(handleMorePress);
  };

  const lines = textVisibilityState ? undefined : numberOfLines;

  return (
    <View style={containerStyle}>
      <Text style={textStyles} numberOfLines={lines} onLayout={onLayout}>
        {text}
      </Text>
      {footerVisibilityState ? renderFooter() : null}
    </View>
  );
};

export default ReadMore;
