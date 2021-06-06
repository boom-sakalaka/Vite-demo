/*
 * @Author: your name
 * @Date: 2021-06-02 22:46:49
 * @LastEditTime: 2021-06-06 09:59:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite\my-vue-app\vite.config.js
 */

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      comps: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
    },
  },
  plugins: [vue(), viteMockServe({ supportTs: false })],
});
