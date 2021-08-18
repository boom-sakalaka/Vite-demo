<!--
 * @Author: GZH
 * @Date: 2021-08-18 17:21:52
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-18 17:49:08
 * @FilePath: \Vite-demo\my-vue-app\src\views\privideInject\index.vue
 * @Description: 
-->
<template>
  <div>
    <son />
  </div>
</template>

<script>
import son from './son.vue';
import { provide } from 'vue';
export default {
  components: { son },
  setup() {
    provide('name', 'Tom'); // 单个声明形式
    provide('info', {
      work: '前端开发',
      age: '18',
    }); // 多个声明形式
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
