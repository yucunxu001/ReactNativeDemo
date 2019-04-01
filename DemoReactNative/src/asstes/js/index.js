// 公用的方法
import {
  Platform,
  DeviceInfo,
  Dimensions,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import Toast from 'react-native-root-toast';
import { post } from '../../fetch/index';

const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 750;
const countDpRatio = deviceWidthDp / uiWidthPx;
const isIphoneX = (DeviceInfo.isIPhoneX_deprecated && Platform.OS === 'ios') || false;  // true 为苹果X

const getBarHeight = () => { // 计算状态栏高度
  if (isIphoneX) {
    return 0;
  } else {
    if (Platform.OS === 'ios') {
      return 22;
    } else {
      return StatusBar.currentHeight;
    }
  }
};

const common = {
  isIphoneX,
  statusBarHeight:getBarHeight(),   // 状态栏高度
  px(uiElementPx) {  // 适配  例:height:px(10)
    return uiElementPx *  countDpRatio;
  },
  pxInt(uiElementPx) {
    return Math.round(uiElementPx *  countDpRatio);
  },
  isNull(data) {  // 判断传过来的值是否为空
    if (data === '' || data == null || data === undefined) {
      return true;
    }
    return false;
  },
  toast(text) {
    Toast.show(text,{
      position:100,
      opacity:1,
      backgroundColor:'rgba(0,0,0,0.6)',
      shadow:false,
    });
  },
  setStorage: async (key,value) => {  // 存Storage
    await AsyncStorage.setItem(key, value);
  },
  getStorage: async (key) => {  // 获取Storage
    const data = await AsyncStorage.getItem(key);
    return data;
  },
  removeStorage: async (key) => { // 删除Storage
    await AsyncStorage.removeItem(key);
  },
  post,
};

Object.assign(global, common);
export default common;
