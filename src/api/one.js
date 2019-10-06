import api from '../utils/apiUtils';

export function login (params) {
  return api.postForm ('/auth/sys/login', params);
}
