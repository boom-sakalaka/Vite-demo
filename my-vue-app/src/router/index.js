/*
 * @Author: your name
 * @Date: 2021-06-06 09:38:04
 * @LastEditTime: 2021-11-06 15:35:27
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \Vite-demo\my-vue-app\src\router\index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';

// 工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('../views/home/index.vue') },
    { path: '/lifeCycle', component: () => import('../views/lifeCycle/index.vue') },
    { path: '/setupProps', component: () => import('../views/setupProps/index.vue') },
    { path: '/privideInject', component: () => import('../views/privideInject/index.vue') },
    { path: '/setupSugar', component: () => import('../views/setup/index.vue') },
    { path: '/Vue3Model', component: () => import('../views/Vue3Model/index.vue') },
    {
      path: '/myDirective',
      component: () => import('../views/MyDirective/index.vue'),
      children: [
        {
          path: '/myDirective/autoFocus',
          component: () => import('../views/MyDirective/autoFocus/index.vue'),
        },
        {
          path: '/myDirective/copy',
          component: () => import('../views/MyDirective/copy/index.vue'),
        },
        {
          path: '/myDirective/realImg',
          component: () => import('../views/MyDirective/realImg/index.vue'),
        },
      ],
    },
  ],
});

export default router;
