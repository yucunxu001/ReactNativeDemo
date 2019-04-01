import * as types from '../actions/action-type';

const defaultCommon = {
  language:0,   // 当前语言  0 中文  1英文
};

const common = Object.assign({},defaultCommon);
const planReducer = (state = common, action) => {
  switch (action.type) {
    case types.COMMON:
      return Object.assign(state, action.common);
  }
  return state;
};

export default planReducer;
