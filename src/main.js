import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import 'ant-design-vue/dist/antd.css';
import './style/style.css';

import antDesign from 'ant-design-vue';
Vue.use (antDesign);

Vue.config.productionTip = false;

new Vue ({
  router,
  render: h => h (App),
}).$mount ('#app');
