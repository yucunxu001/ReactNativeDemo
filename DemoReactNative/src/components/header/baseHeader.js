import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Tw from './touchWithoutFeedback';

class Index extends Component {
  static defaultProps = {  // 默认值
    title:'',
    back:true,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const {
      navigation,
      title,
      back,
      children,
    } = this.props;
    return (
      <View style={[styles.box,css.row]}>
        {/* 左侧返回按钮 */}
        {
          back ? (
            <Tw onPress={() => { navigation.goBack(); }}>
              <View style={[styles.boxLeft,css.center]}>
                <Image style={styles.boxLeftBtn} source={require('../../images/btn-back.png')} />
              </View>
            </Tw>
          ) : null
        }
        {/* 标题 */}
        <View style={[styles.titleBox,css.center]}>
          <Text style={styles.title} numberOfLines={1}>{ title }</Text>
        </View>
        {
          React.Children.map(children, (child) => {
            let dom = '';
            switch (child.props.name) {
              case 'lText': // 左侧文字按钮
                dom = (
                  <View style={[styles.left]}>
                    <Text style={[styles.leftText]}>
                      {child}
                    </Text>
                  </View>
                );
                break;
              case 'rText': // 右侧文字按钮
                dom = (
                  <View style={[styles.right]}>
                    <Text style={[styles.rightText]}>
                      {child}
                    </Text>
                  </View>
                );
                break;
              case 'center': // 中间内容
                dom = (
                  <View>
                    {child}
                  </View>
                );
                break;
              case 'rBtn': // 右侧自定义按钮
                dom = (
                  <View style={[styles.rightBtn]}>
                    {child}
                  </View>
                );
                break;
              // no default:
            }
            return dom;
          })
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box:{
    width:px(750),
    height:px(90) + statusBarHeight,
    paddingTop:statusBarHeight,
    backgroundColor:'#fff',
    borderBottomWidth: px(1),
    borderStyle:'solid',
    borderColor:'#ccc',
  },
  boxLeft:{
    width:px(90),
    height:px(90),
  },
  boxLeftBtn:{
    width:px(16),
    height:px(28),
  },
  titleBox:{
    position:'absolute',
    top:statusBarHeight,
    bottom:0,
    left:px(90),
    right:px(90),
  },
  title:{
    fontSize:px(36),
    color:'#333'
  },
  left: {
    height: px(90),
    position: 'absolute',
    paddingRight: px(30),
    paddingLeft: px(30),
    bottom: 0,
    left: 0,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftText: {
    color: '#fff',
    fontSize: px(30)
  },
  right: {
    height: px(90),
    position: 'absolute',
    paddingRight: px(30),
    paddingLeft: px(30),
    bottom: 0,
    right: 0,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightText: {
    color: '#fff',
    fontSize: px(30)
  },
  rightBtn: {
    height: px(90),
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withNavigation(Index);
