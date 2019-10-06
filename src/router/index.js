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
      name: 'login',
      // component: () => import ('../views/one.vue'),
      component: resolve => require (['../views/login'], resolve),
    },
    {
      path: '/sf_cloud',
      name: 'sf_cloud',
      redirect: '/',
      component: resolve => require (['../views/index'], resolve),
      children: [
        {
          path: '/auth',
          name: 'auth',
          // component: () => import ('../views/one.vue'),
          component: resolve => require (['../views/auth'], resolve),
        },
        {
          path: '/group',
          component: resolve => require (['../views/group/overview'], resolve),
          children: [
            {
              path: '/',
              name: 'group',
              component: resolve => require (['../views/group'], resolve),
            },
            {
              path: '/configGroup',
              name: 'configGroup',
              component: resolve =>
                require (['../views/group/configGroup'], resolve),
            },
          ],
        },
        {
          path: '/menu',
          component: resolve => require (['../views/menu/overview'], resolve),
          children: [
            {
              path: '/',
              name: 'menu',
              component: resolve => require (['../views/menu'], resolve),
            },
            {
              path: '/configMenu',
              name: 'configMenu',
              component: resolve =>
                require (['../views/menu/configmenu'], resolve),
            },
          ],
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
