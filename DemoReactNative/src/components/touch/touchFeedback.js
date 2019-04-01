import React, { Component } from 'react';
import {
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableHighlight,
} from 'react-native';

class TouchFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { children, style, onPress } = this.props;
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={onPress}
        >
          <View style={style}>
            {children}
          </View>
        </TouchableNativeFeedback>
      );
    } else {
      return (
        <TouchableHighlight
          onPress={onPress}
          style={style}
        >
          {children}
        </TouchableHighlight>
      );
    }
  }
}

export default TouchFeedback;
