/*
 * @Author: GZH
 * @Date: 2021-08-20 15:21:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-20 17:44:01
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
  ],
});

export default router;
