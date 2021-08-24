/*
 * @Author: GZH
 * @Date: 2021-08-20 16:03:52
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-24 09:41:59
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
  swiper: '轮播图配置',
  hot: '热销商品配置',
  new: '新品上线配置',
  recommend: '为你推荐配置',
};

// 单张图片上传
export const uploadImgServer = 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/file';
