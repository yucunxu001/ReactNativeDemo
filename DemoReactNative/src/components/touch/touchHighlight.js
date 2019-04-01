import React, { Component } from 'react';
import {
  TouchableHighlight,
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
      <TouchableHighlight
        onPress={onPress}
        underlayColor="rgba(100,100,100,0.1)"
        activeOpacity={0.9}
        style={style}
      >
        {children}
      </TouchableHighlight>
    );
  }
}

export default TouchHighlight;
