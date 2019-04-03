import {
  Easing,
  Animated,
} from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import TabNavigator from './tabNavigator';  // 几个tab切换卡上的主页面

import WebView from '../views/home/webView';
import Status from '../views/home/Status';//状态栏

const Routers = createStackNavigator(
  {
    TabNavigator,//Tab
    WebView,
    Status,
    
  },
  {
    initialRouteName: 'TabNavigator',
    headerMode: 'none', // 隐藏自带的头部标题
    transitionConfig: () => ({ // 把从底部淡出效果改成从右到左
      transitionSpec: {
        duration: 400,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, -(width / 4)],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX }] };
      },
    }),
  }
);

const root = createSwitchNavigator({
  // Login,
  // BindInviteCode,
  // BindInviteMobile,
  Routers,
},{
  initialRouteName:'Routers',
});

const AppContainer = createAppContainer(root);
export default AppContainer;
