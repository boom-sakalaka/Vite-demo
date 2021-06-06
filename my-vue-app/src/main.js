/*
 * @Author: your name
 * @Date: 2021-06-02 22:46:49
 * @LastEditTime: 2021-06-06 10:38:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite\my-vue-app\src\main.js
 */
import { createApp } from 'vue';
import App from './App.vue';

// 路由
import router from './router';

// Vuex
import store from './store';

// 全局样式
import 'styles/index.scss';

//element3
import element3 from 'plugins/element3';

createApp(App).use(router).use(store).use(element3).mount('#app');
