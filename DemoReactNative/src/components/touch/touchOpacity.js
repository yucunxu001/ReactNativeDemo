import React, { Component } from 'react';
import {
  TouchableOpacity
} from 'react-native';

class TouchOpacity extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { children, style, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={style}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

export default TouchOpacity;
