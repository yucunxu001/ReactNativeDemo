import * as types from './action-type';

const plan = {
  setCommon(common) {
    return {
      type:types.COMMON,
      common,
    };
  },
};

export default plan;
