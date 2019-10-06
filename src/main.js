import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import axios from './utils/apiUtils';
import 'ant-design-vue/dist/antd.css';
import './style/style.css';

import antDesign from 'ant-design-vue';
Vue.use (antDesign);

Vue.prototype.$store = store;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue ({
  router,
  render: h => h (App),
}).$mount ('#app');
