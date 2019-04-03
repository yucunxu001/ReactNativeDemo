
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
  StatusBar,
  ImageBackground,
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
        <StatusBar
          hidden={false}//状态栏是否隐藏
          animated={true}//指定状态栏的变化是否应以动画形式呈现
          barStyle={'dark-content'}//状态栏文字样式 default：黑色文字（默认） light-content：白色文字 dark-content: 暗色文字
          //仅支持iOS 
          networkActivityIndicatorVisible={true}//设定网络活动指示器(就是那个正在加载中图标)是否显示在状态栏
          showHideTransition={'fade'}//通过hidden属性来显示或隐藏状态栏时所使用的动画效果。默认值为'fade'
          //仅支持Android
          backgroundColor={'red'}//背景颜色
          translucent={true}//设置状态栏是否为透明
        />
        <Text style={styles.title}>修改状态栏</Text>
        <Text>
          StatusBar.currentHeight常量React Native 在 Android 平台为 StatusBar 组件提供了一个静态常量 currentHeight，我们可以通过读取这个常量来得到 Android 手机状态栏的高度
        </Text>
        <ImageBackground
          style={styles.bgImg}
          source={require('../../images/home/home_bg.png')}
        >
          <Text>这是ImageBackground</Text>

        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  con: {
    backgroundColor:'#f0f0f0',
  },
  title: {
    color:'#000',
    fontSize: px(40),
    textAlign:'center',
    backgroundColor:'green',
    paddingTop: px(50),
  },
  bgImg: {
    marginLeft: px(75),
    width:px(600),
    height:px(600),
    borderWidth: px(2),
  },
  slider: {
    height:px(60),
    backgroundColor:'#ddd',
  }

  
});

const mapStateToProps = function (store) {
  return {
    common: store.common
  };
};

export default connect(mapStateToProps)(Index);
