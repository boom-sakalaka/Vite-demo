/*
 * @Author: your name
 * @Date: 2021-06-06 09:50:46
 * @LastEditTime: 2021-06-06 09:55:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite\my-vue-app\src\store\index.js
 */
import { createStore } from 'vuex';

const store = createStore({
  state: {
    couter: 0,
  },
  mutations: {
    add(state) {
      state.couter++;
    },
  },
});
export default store;
