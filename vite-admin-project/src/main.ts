/*
 * @Date: 2022-03-31 10:33:00
 * @LastEditTime: 2022-03-31 14:06:10
 * @FilePath: \Vite-demo\vite-admin-project\src\main.ts
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // 创建vue实例
const app = createApp(App); // 挂载pinia
import router from '@/router';

app.use(router);
app.use(store); // 挂载实例
app.mount('#app');
