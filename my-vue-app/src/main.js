/*
 * @Author: your name
 * @Date: 2021-06-02 22:46:49
 * @LastEditTime: 2021-11-06 11:05:45
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \Vite-demo\my-vue-app\src\main.js
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

// 导入自定义指令
import { myDirective } from './Directive/index.js';

const app = createApp(App);

//在vue中注册自定义指令
Object.keys(myDirective).forEach(key => {
  app.directive(key, myDirective[key]);
});

app.use(router).use(store).use(element3);

app.mount('#app');
