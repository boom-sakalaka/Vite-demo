<!--
 * @Author: GZH
 * @Date: 2021-10-29 16:03:34
 * @LastEditors: GZH
 * @LastEditTime: 2021-10-29 16:09:23
 * @FilePath: \Vite-demo\my-vue-app\src\views\setup\index.vue
 * @Description: 
-->
<template>
  <div>{{ mystate.a }}</div>
  <div>{{ name }}</div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const mystate = reactive({ a: 1 });
const name = ref('zhangsan');
</script>

<style scoped></style>
