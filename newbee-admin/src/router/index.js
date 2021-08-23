/*
 * @Author: GZH
 * @Date: 2021-08-20 15:21:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-23 11:15:23
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
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('../views/Swiper.vue'),
    },
  ],
});

export default router;
