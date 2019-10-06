import {SET_USERINFO, SET_TOKEN} from '../mutation-types';
const state = {
  token: null,
  userInfo: null,
};

const mutations = {
  [SET_USERINFO] (state, userInfo) {
    state.userInfo = userInfo;
  },
  // 以下为测试数据
  [SET_TOKEN] (state, token) {
    state.token = token;
  },
};

export default {
  state,
  mutations,
};
