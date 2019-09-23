import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import ReadMore from 'react-native-read-more';

const styles = StyleSheet.create({
  readMoreWrapper: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },

  descriptionText: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#000000',
  },

  buttonWrapper: {
    marginTop: 10,
    width: 100,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#248CE2',
  },
});

const TEXT = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;

const App = () => {
  const renderViewLess = (onPress: () => void): JSX.Element => {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonText}>View less</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderViewMore = (onPress: () => void): JSX.Element => {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonText}>Read more</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onChangeTextVisibility = () => {
    console.log('onChangeTextVisibility fire!');
  };

  return (
    <SafeAreaView>
      <View style={styles.readMoreWrapper}>
        <ReadMore
          textStyle={styles.descriptionText}
          numberOfLines={3}
          text={TEXT}
          renderViewLess={renderViewLess}
          renderViewMore={renderViewMore}
          onChangeTextVisibility={onChangeTextVisibility}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
