/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import Sty from './src/asstes/styles';
import Common from './src/asstes/js/index';
import Store from './src/store/store';
import Routers from './src/routers/index';
import Stack from './src/routers/stack';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={Store}>
        <View style={css.flex}>
          <Routers/>
          {/* <Stack/> */}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
