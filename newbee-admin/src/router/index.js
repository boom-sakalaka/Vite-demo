/*
 * @Author: GZH
 * @Date: 2021-08-20 15:21:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-26 10:45:51
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
      path: '/category',
      name: 'category',
      component: () => import('../views/Category.vue'),
      children: [
        {
          path: '/category/level2',
          name: 'level2',
          component: () => import('../views/Category.vue'),
        },
        {
          path: '/category/level3',
          name: 'level3',
          component: () => import('../views/Category.vue'),
        },
      ],
    },
    {
      path: '/good',
      name: 'good',
      component: () => import('../views/Good.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Order.vue'),
    },
    {
      path: '/order_detail',
      name: 'order_detail',
      component: () => import('../views/OrderDetail.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
  ],
});

export default router;
