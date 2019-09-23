# rn-read-more

## Show Case
<img src="https://raw.githubusercontent.com/barrsan/rn-read-more/master/showcase.gif" alt="showcase" width="40%">

## Getting Started

### Installation

```bash
npm i rn-read-more --save
```

or

```bash
yarn add rn-read-more
```

### Usage


#### Props

- **text**(string)(*required): Text.

- **numberOfLines**(number)(*required): Number of lines to be displayed.

- **renderViewMore**((onPress: () => void) => ReactNode): Render view-more component.

- **renderViewLess**((onPress: () => void) => ReactNode): Render view-less component.

- **onChangeTextVisibility**((v: boolean) => void): Callback after change text visibility.

- **containerStyle**(ViewStyle): Container style with text

- **textStyle**(TextStyle): Text style.

- **textVisibility**(boolean): Controls text visibility.

#### Example

```javascript
import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import ReadMore from 'rn-read-more';

const Example = () => {
  const renderViewLess = onPress => {
    return (
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text>View less</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderViewMore = onPress => {
    return (
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text>Read more</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onChangeTextVisibility = () => {
    console.log('onChangeTextVisibility fire!');
  };

  return (
    <ReadMore
      textStyle={{
        fontSize: 16,
      }}
      numberOfLines={3}
      text={TEXT}
      renderViewLess={renderViewLess}
      renderViewMore={renderViewMore}
      onChangeTextVisibility={onChangeTextVisibility}
    />
  );
```

## License

MIT
