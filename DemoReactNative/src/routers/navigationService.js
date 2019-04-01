/*
  这个文件用在没有 navigation 这个 prop 的情况下进行页面跳转
*/
import { NavigationActions, } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

export default {
  navigate,
  setTopLevelNavigator,
};
