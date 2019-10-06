import * as types from './mutation-types';
// 登录用户信息
export const updateUserInfo = ({commit}, data) => {
  commit (types.SET_USERINFO, data);
};

// 登录用户信息
export const updateToken = ({commit}, data) => {
  commit (types.SET_TOKEN, data);
};
