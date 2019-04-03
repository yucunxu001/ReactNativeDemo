
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Switch,
} from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import BaseHeader from '../../components/header/baseHeader';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwd:'',
      open:false,
    };
  }
  // 修改导航条样式
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  componentDidMount() {

  }

  render() {
    return (
      <View style={[css.flex,css.bc]}>
        <ScrollView
          showsVerticalScrollIndicator={false} // 隐藏竖直滚动条
          bounces={false}
          style={[css.flex,styles.con]}
          keyboardShouldPersistTaps="handled"
        >
          {/* <Text onPress={() => this.props.navigation.navigate('HomeOne',{'visible':true,title:'One'})} >HomeOne</Text> */}
          <BaseHeader back={false} />
          <Text style={styles.title}>基础组件</Text>
          <View style={styles.view}></View>
          <Text
            style={styles.text}
            selectable={true}//长按复制
          >
            这是一个text
          </Text>
          <Button title='百度' color='red' onPress={() => {this.props.navigation.navigate('WebView');}} />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({passwd:text})}
            value={this.state.text}
            clearButtonMode='while-editing'
            placeholder='请输入密码'
            placeholderTextColor='red'
            keyboardType='default'
            returnKeyType='done'
            // onKeyPress={(e) => {alert(e.value)}}
            // autoFocus={true}
            secureTextEntry={true}
            // onFocus={() => {alert('获得焦点');}}
            // onBlur={() => {alert('失去焦点');}}
            onSubmitEditing={() => {alert('点击ruturn')}}

          />
          <Button title='提交' color='red' onPress={() => {alert(this.state.passwd);}} />
          <TouchableHighlight 
            style={styles.th} 
            onPress={() => {console.log('TouchableHighlight')}}
            underlayColor="rgba(100,100,100,0.1)"
            activeOpacity={0.9}
          >
            <Text style={styles.thText}>TouchableHighlight</Text>
          </TouchableHighlight>

          <TouchableOpacity 
            style={styles.th} 
            onPress={() => {console.log('TouchableOpacity')}}
            activeOpacity={0.3}
          >
            <Text style={styles.thText}>TouchableHighlight</Text>
          </TouchableOpacity>

          {/* <TouchableNativeFeedback 
            style={styles.th} 
            onPress={() => {console.log('TouchableNativeFeedback')}}
            background={TouchableNativeFeedback.SelectableBackground()}>
          >
            <Text style={styles.thText}>TouchableNativeFeedback</Text>
          </TouchableNativeFeedback> */}

          {/* <TouchableWithoutFeedback 
            style={styles.th} 
            onPress={() => {console.log('TouchableWithoutFeedback')}}
          >
            <Text style={styles.thText}>TouchableWithoutFeedback</Text>
          </TouchableWithoutFeedback> */}

          <Switch 
            style={styles.switch}
            onValueChange={(value) => {this.setState({open:value});} }
            value={this.state.open}
            trackColor={{false:'gray',true:'yellow'}}
            thumbColor={'green'}
          />
          <Button title='状态栏' color='red' onPress={() => {this.props.navigation.navigate('Status');}} />

        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  con: {
    backgroundColor:'#f0f0f0',
  },
  title: {
    fontSize:px(40),
    textAlign:'center',
    color:'red',
    marginTop: px(20),
  },
  view: {
    marginLeft: px(100),
    width:px(100),
    height:px(100),
    borderBottomWidth: px(1),
    borderBottomColor: 'red',
    borderTopWidth: px(2),
    borderTopColor: 'green',
    borderLeftWidth: px(3),
    borderLeftColor: 'yellow',
    borderRightWidth: px(4),
    borderRightColor: 'blue',
  },
  text: {
    fontSize:px(30),
    borderWidth: px(2),
    paddingHorizontal: px(20),
    paddingVertical: px(20),
  },
  textInput: {
    borderWidth:px(2),
    borderColor:'red',
    height:px(80),
    marginHorizontal: px(40),
    marginTop:px(30),
    backgroundColor:'#ddd',
    color:'#333',
    fontSize:px(30),
    borderRadius: px(10),
  },
  th: {
    backgroundColor:'red',
    marginTop:px(20),
  },
  thText: {
    height:px(50),
  },
  switch: {
    marginLeft:px(100),
    marginTop:px(30),
    // width:px(200),
    // backgroundColor:'red',
  }
  
});

const mapStateToProps = function (store) {
  return {
    common: store.common
  };
};

export default connect(mapStateToProps)(Index);
