/*
 * @Author: your name
 * @Date: 2021-06-06 10:35:13
 * @LastEditTime: 2021-06-06 10:46:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite\my-vue-app\src\plugins\element3.js
 */
// 全局引入element3
import element3 from 'element3';
import 'element3/lib/theme-chalk/index.css';

//按需加载
// import { ElButton } from 'element3';
// import 'element3/lib/theme-chalk/button.css';

export default function (app) {
  // 完整
  app.use(element3);

  // 按需引入
  // app.use(ElButton);
}
