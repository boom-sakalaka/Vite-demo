/*
 * @Author: GZH
 * @Date: 2021-08-20 16:03:52
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-20 16:04:13
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
