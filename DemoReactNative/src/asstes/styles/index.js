const css = {
  color: '#0093f8',    // 网站主色
  bcColor: '#f8f8f8',  // 默认背景颜色
  bc: { // 默认背景色
    backgroundColor: '#f8f8f8'
  },
  bcfff:{
    backgroundColor: '#fff'
  },
  flex: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

Object.assign(global, { css });
export default css;
