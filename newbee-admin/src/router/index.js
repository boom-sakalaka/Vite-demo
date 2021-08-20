/*
 * @Author: GZH
 * @Date: 2021-08-20 15:21:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-20 15:29:46
 * @FilePath: \newbee-admin\src\router\index.js
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/views/Index.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    },
  ],
});

export default router;
