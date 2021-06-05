/*
 * @Author: your name
 * @Date: 2021-06-05 22:03:28
 * @LastEditTime: 2021-06-05 22:09:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite\my-vue-app\mock\user.js
 */
export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: ['Tom', 'Jerry'],
      };
    },
  },
];
