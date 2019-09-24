import api from '../utils/apiUtils';

export const shareList = function (shareId) {
  return api.get ('/api/vsc/share/shareList', {shareId: shareId});
};
