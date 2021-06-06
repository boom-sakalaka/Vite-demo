/*
 * @Author: your name
 * @Date: 2021-06-02 22:46:49
 * @LastEditTime: 2021-06-06 09:52:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite\my-vue-app\src\main.js
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
createApp(App).use(router).use(store).mount('#app');
