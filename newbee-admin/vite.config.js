/*
 * @Author: GZH
 * @Date: 2021-08-20 15:44:49
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-20 15:56:33
 * @FilePath: \Vite-demo\newbee-admin\vite.config.js
 * @Description:
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vitePluginImport from 'vite-plugin-babel-import';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginImport([
      {
        libraryName: 'element-plus',
        libraryDirectory: 'es',
        style(name) {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      },
    ]),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://backend-api-02.newbee.ltd/manage-api/v1', // 凡是遇到 /api 路径的请求，都映射到 target 属性
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''), // 重写 api 为 空，就是去掉它
      },
    },
  },
});
