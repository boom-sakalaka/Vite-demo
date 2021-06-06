<!--
 * @Author: your name
 * @Date: 2021-06-02 22:46:49
 * @LastEditTime: 2021-06-06 09:56:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite\my-vue-app\src\components\HelloWorld.vue
-->
<template>
  <h1>{{ msg }}</h1>
  <p>{{ $store.state.couter }}</p>
  <button @click="$store.commit('add')">加一</button>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue';

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });

// 请求mock api
fetch('/api/getUsers').then(res => {
  console.log(res.json());
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
