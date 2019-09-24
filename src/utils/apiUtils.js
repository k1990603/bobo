import axios from 'axios';
import router from '../router';

//响应拦截器
axios.interceptors.response.use (
  response => {
    let res = response.data;
    if (!res || !res.head) {
      throw new Error ('发生未知错误，请稍后再试');
    }
    if (res.head.status == 1) {
      return res.body;
    } else if (res.head.errorCode === '3') {
      router.replace ({path: 'overDue'});
    } else if (res.head.errorCode === '999') {
      return Promise.reject ('您的登录令牌已失效');
      // throw new Error('您的登录令牌已失效');
    } else {
      return Promise.reject (res.head.errorMsg);
      // throw new Error(res.head.errorMsg);
    }
  },
  error => {
    let message = '';
    let status = error && error.response && error.response.status;
    switch (status) {
      case 400:
        message = '错误请求';
        break;
      case 401:
        message = '未授权，请重新登录';
        break;
      case 403:
        message = '拒绝访问';
        break;
      case 404:
        message = '请求错误,未找到该资源';
        break;
      case 405:
        message = '请求方法未允许';
        break;
      case 408:
        message = '请求超时';
        break;
      case 500:
        message = '服务器端出错';
        break;
      case 501:
        message = '网络未实现';
        break;
      case 502:
        message = '网络错误';
        break;
      case 503:
        message = '服务不可用';
        break;
      case 504:
        message = '网络超时';
        break;
      case 505:
        message = 'http版本不支持该请求';
        break;
      default:
        message = `连接错误${status}`;
    }
    return Promise.resolve (message);
  }
);

axios.defaults.baseURL = '/';
axios.defaults.timeout = 10000;
//设置默认请求头
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['Accept'] = 'application/json';

export default {
  get (url, params) {
    return axios ({
      method: 'GET',
      url,
      params,
    });
  },
  post (url, params) {
    return axios ({
      method: 'POST',
      url,
      params,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    });
  },
  postJson (url, params) {
    return axios ({
      method: 'POST',
      url,
      params,
      headers: {'Content-Type': 'application/json'},
    });
  },
};
