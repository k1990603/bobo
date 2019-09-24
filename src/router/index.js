import Vue from 'vue';
import Router from 'vue-router';

// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use (Router);
let router = new Router ({
  routes: [
    {
      path: '/',
      name: 'auth',
      // component: () => import ('../views/one.vue'),
      component: resolve => require (['../views/auth'], resolve),
    },
    {
      path: '/auth',
      name: 'auth',
      // component: () => import ('../views/one.vue'),
      component: resolve => require (['../views/auth'], resolve),
    },
    {
      path: '/two',
      name: 'two',
      // component: () => import ('../views/two.vue'),
      component: resolve => require (['../views/two'], resolve),
    },
    {
      path: '/three',
      name: 'three',
      // component: () => import ('../views/HelloWorld.vue'),
      component: resolve => require (['../views/three'], resolve),
    },
  ],
});

router.beforeEach ((to, from, next) => {
  // 进度条
  NProgress.start ();
  next ();
});

router.afterEach (() => {
  // 进度条
  NProgress.done ();
});

export default router;
