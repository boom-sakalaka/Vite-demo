/*
 * @Author: GZH
 * @Date: 2021-08-20 15:45:03
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-26 10:32:11
 * @FilePath: \Vite-demo\newbee-admin\src\main.js
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import { ElButton } from 'element-plus';
import router from '@/router';

import 'element-plus/lib/theme-chalk/index.css';

// main.js
const orderStatus = {
  0: '待支付',
  1: '已支付',
  2: '配货完成',
  3: '出库成功',
  4: '交易成功',
  '-1': '手动关闭',
  '-2': '超时关闭',
  '-3': '商家关闭',
};

const app = createApp(App);

app.use(router);

app.use(ElButton);

// 全局方法
app.config.globalProperties.$filters = {
  orderMap(status) {
    return orderStatus[status] || '未知状态';
  },
  prefix(url) {
    if (url && url.startsWith('http')) {
      return url;
    } else {
      url = `http://backend-api-02.newbee.ltd${url}`;
      return url;
    }
  },
};

app.mount('#app');
