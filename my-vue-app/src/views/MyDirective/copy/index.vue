<!--
 * @Author: GZH
 * @Date: 2021-11-06 11:53:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 11:54:27
 * @FilePath: \Vite-demo\my-vue-app\src\views\MyDirective\copy\index.vue
 * @Description: 
-->
<template>
  <div>
    <button v-copy:[success]="msg">点击复制</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('我是要复制的信息');
const success = msgs => {
  alert(`${msgs}---信息复制成功了!`);
};
</script>
<style lang="scss" scoped></style>
