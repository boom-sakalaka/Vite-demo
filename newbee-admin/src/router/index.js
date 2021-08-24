/*
 * @Author: GZH
 * @Date: 2021-08-20 15:21:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-24 09:29:13
 * @FilePath: \Vite-demo\newbee-admin\src\router\index.js
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/Index.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddGood.vue'),
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('../views/Swiper.vue'),
    },
    {
      path: '/hot',
      name: 'hot',
      component: () => import('../views/IndexConfig.vue'),
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/IndexConfig.vue'),
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('../views/IndexConfig.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
  ],
});

export default router;
