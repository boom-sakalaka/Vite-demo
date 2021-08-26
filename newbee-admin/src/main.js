/*
 * @Author: GZH
 * @Date: 2021-08-20 15:45:03
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-26 09:39:21
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

app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith('http')) {
      // 当 url 以 http 开头时候，我们返回原路径
      return url;
    } else {
      // 否则，我们给路径添加 host，如下
      url = `http://backend-api-02.newbee.ltd${url}`;
      return url;
    }
  },
};

app.mount('#app');
