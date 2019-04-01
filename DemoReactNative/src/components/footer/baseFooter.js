import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:true,  // 区分是否显示 比如键盘弹出时候需要隐藏
    };
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow() {
    this.setState({
      show:false
    });
  }

  _keyboardDidHide() {
    this.setState({
      show:true
    });
  }

  _go(name) {
    // alert(name);
    const { navigation } = this.props;
    navigation.navigate(name);
  }

  render() {
    const { navigation: { state: { index } } } = this.props;
    const { show } = this.state;
    if (show) {
      return (
        <View style={[styles.container]}>
          {/* 首页 */}
          <TouchableWithoutFeedback style={styles.flex} onPress={() => this._go('Home')}>
            <View style={[styles.flex,styles.box]}>
              <Image style={styles.icon} source={index === 0 ? require('../../images/tab/footer-icon1-2.png') : require('../../images/tab/footer-icon1-1.png')} />
              <Text style={[styles.text,index === 0 ? styles.textFocus : '']}>首页</Text>
            </View>
          </TouchableWithoutFeedback>
          {/* 中心 */}
          <TouchableWithoutFeedback style={styles.flex} onPress={() => this._go('Mind')}>
            <View style={[styles.flex,styles.box]}>
              <Image style={styles.icon} source={index === 1 ? require('../../images/tab/footer-icon2-2.png') : require('../../images/tab/footer-icon2-1.png')} />
              <Text style={[styles.text,index === 1 ? styles.textFocus : '']}>中心</Text>
            </View>
          </TouchableWithoutFeedback>
          {/* 发现 */}
          <TouchableWithoutFeedback style={styles.flex} onPress={() => this._go('Find')}>
            <View style={[styles.flex,styles.box]}>
              <Image style={styles.icon} source={index === 2 ? require('../../images/tab/footer-icon4-2.png') : require('../../images/tab/footer-icon4-1.png')} />
              <Text style={[styles.text,index === 2 ? styles.textFocus : '']}>发现</Text>
            </View>
          </TouchableWithoutFeedback>
          {/* 我的 */}
          <TouchableWithoutFeedback style={styles.flex} onPress={() => this._go('My')}>
            <View style={[styles.flex,styles.box]}>
              <Image style={styles.icon} source={index === 3 ? require('../../images/tab/footer-icon5-2.png') : require('../../images/tab/footer-icon5-1.png')} />
              <Text style={[styles.text,index === 3 ? styles.textFocus : '']}>我的</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      );
    } else {
      return null;
    }
  }
}
const styles = StyleSheet.create({
  flex:{
    flex:1,
  },
  container:{
    height:px(98),
    flexDirection:'row',
    borderTopWidth: px(1),
    borderStyle:'solid',
    borderColor:'#ccc',
  },
  box:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  icon:{
    width:px(48),
    height:px(48),
  },
  text:{
    fontSize:px(20),
    color:'#999'
  },
  textFocus:{
    color: css.color
  },
  textVipFocus:{
    color:'#333'
  }
});

export default Index;
