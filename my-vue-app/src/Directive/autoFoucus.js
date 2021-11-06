/*
 * @Author: GZH
 * @Date: 2021-11-06 10:56:31
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 11:11:32
 * @FilePath: \Vite-demo\my-vue-app\src\Directive\autoFoucus.js
 * @Description:
 */
export const autoFoucus = {
  mounted(el, { value }) {
    if (value) {
      el.focus();
    }
  },
  updated(el, { value }) {
    if (value) {
      el.focus();
    }
  },
};
