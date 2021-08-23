/*
 * @Author: GZH
 * @Date: 2021-08-20 16:03:52
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-23 10:02:01
 * @FilePath: \Vite-demo\newbee-admin\src\utils\index.js
 * @Description:
 */
export function localGet(key) {
  const value = window.localStorage.getItem(key);
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (error) {
    return value;
  }
}

export function localSet(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function localRemove(key) {
  window.localStorage.removeItem(key);
}

// src/utils/index.js
export const pathMap = {
  index: '首页',
  login: '登录',
  add: '添加商品',
};
