import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import BaseFooter from '../components/footer/baseFooter'; // 底部 bar
import Home from '../views/home/index';//首页
import Mind from '../views/mind/index';//中心
import Find from '../views/find/index';//发现
import My from '../views/my/index';//我的

const TabNavigator = createBottomTabNavigator(
  {
    Home,
    Mind,
    Find,
    My,
  },
  {
    initialRouteName: 'Home',
    backBehavior: 'none', // 控制 "返回" 按钮是否会导致 Tab 页切换到初始 Tab 页? 如果是, 设置为 initialRoute, 否则 none。 默认为 initialRoute的行为。
    tabBarComponent: ({ navigation }) => { // 自定义底部组件
      const component = <BaseFooter navigation={navigation} />;
      return component;
    },
    defaultNavigationOptions: ({ navigation }) => {  // 底部tab只显示在1级页面 注释：router结构调整了 底部tab分离出来 这个估计用不到 先留着
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }
      return {
        tabBarVisible,
      };
    },
  },
);

export default TabNavigator;
