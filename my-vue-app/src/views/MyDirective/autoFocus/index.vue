<!--
 * @Author: GZH
 * @Date: 2021-11-06 11:24:36
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 11:24:37
 * @FilePath: \Vite-demo\my-vue-app\src\views\MyDirective\autoFocus\index.vue
 * @Description:  自定义指令 input 框 自动聚焦 例子
-->
<template>
  <div>
    <input v-auto-Foucus="name === '张三'" />
    <input v-auto-Foucus="name === '李四'" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const name = ref('张三');
setTimeout(() => {
  name.value = '李四';
}, 2000);
</script>
<style scoped></style>
