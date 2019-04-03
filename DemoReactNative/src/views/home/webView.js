
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  WebView,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import BaseHeader from '../../components/header/baseHeader';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  componentDidMount() {
    console.log('11111111111');
  }

  render() {
    return (
      <View style={[css.flex,css.bc]}>
        <WebView 
          source={{uri:'https://www.baidu.com/'}} 
          style={styles.web}
          onLoad={() => {
            console.log('加载完成');
          }}
          onLoadStart={(e) => {
            console.log(e.url);
          }}
        ></WebView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  con: {
    backgroundColor:'#f0f0f0',
  },
  web: {
    flex:1,
  },

  
});

const mapStateToProps = function (store) {
  return {
    common: store.common
  };
};

export default connect(mapStateToProps)(Index);
