import React from "react";
import { View, Text ,Button,Icon,Image,TouchableOpacity} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../views/home/index';
import FindScreen from '../views/find/index';
import MindScreen from '../views/mind/index';
import MyScreen from '../views/my/index';

//自定义导航条
const StackOptions = ({navigation}) => {
  console.log(navigation);
  let {state,goBack} = navigation;
  
  // 用来判断是否隐藏或显示header
  const visible= state.params.isVisible;
  let header;
  if (visible === true){
      header = null;
  }
  const headerStyle = {backgroundColor:'#4ECBFC'};
  const headerTitle = state.params.title;
  const headerTitleStyle = {fontSize:20,color:'white',fontWeight:'500'}
  const headerBackTitle = false;
  const headerLeft = (
      <TouchableOpacity style={{marginLeft:px(10),backgroundColor:'red',width:px(80),height:px(70),justifyContent:'center',alignItems: 'center',}} onPress={()=>{goBack()}}>
        <Image
          style={{width:px(16),height:px(28)}}
          source={require('../images/btn-back.png')}
        />
      </TouchableOpacity>
  );
  return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header}
};

const AppNavigator = createStackNavigator({
  //首页
  Home: {screen:HomeScreen},
  // HomeOne: {
  //   screen:HomeOne,
  //   navigationOptions: ({navigation}) => StackOptions({navigation})
  // },
  //发现
  Find: {screen:FindScreen},
  //中心
  Mind: {screen:MindScreen},
  //我的
  My: {screen:MyScreen},
  
},{
  initialRouteName:'Home',//指定初始路由
  headerMode:'float',//页面跳转时，头部的动画模式,1. none隐藏头部导航条，2 float渐变，类似iOS的原生效果,3 screen 标题与屏幕一起淡入淡出
  mode:'card',//设置跳转方式，跳转方式有card 与modal 这2种，modal：只针对iOS平台，模态跳转
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: 'yellow',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});
export default createAppContainer(AppNavigator);