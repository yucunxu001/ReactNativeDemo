import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
} from 'react-native';

class TouchHighlight extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { children, style, onPress } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        // underlayColor="rgba(0,0,0,0.4)"
        // activeOpacity={0.8}
        style={style}
      >
        {children}
      </TouchableWithoutFeedback>
    );
  }
}

export default TouchHighlight;
