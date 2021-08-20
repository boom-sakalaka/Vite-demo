/*
 * @Author: GZH
 * @Date: 2021-08-20 15:18:45
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-20 15:40:43
 * @FilePath: \newbee-admin\src\main.js
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from '@/router';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app');
