/*
 * @Author: your name
 * @Date: 2021-06-06 09:38:04
 * @LastEditTime: 2021-06-06 09:47:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite\my-vue-app\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';

// 工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/', component: () => import('../views/home.vue') }],
});

export default router;
