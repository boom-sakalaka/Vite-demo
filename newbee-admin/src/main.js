/*
 * @Author: GZH
 * @Date: 2021-08-20 15:45:03
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-20 15:57:05
 * @FilePath: \Vite-demo\newbee-admin\src\main.js
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import { ElButton } from 'element-plus';
import router from '@/router';

import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);

app.use(router);

app.use(ElButton);

app.mount('#app');
