<!--
 * @Author: your name
 * @Date: 2021-06-02 22:46:49
 * @LastEditTime: 2021-08-31 12:10:37
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \Vite-demo\my-vue-app\src\App.vue
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div>
    <router-link to="/">首页1</router-link>
    |
    <router-link to="/lifeCycle">生命周期</router-link>
    |
    <router-link to="/setupProps">setup的参数</router-link>
    |
    <router-link to="/privideInject">Privide/Inject</router-link>
    <div>
      <h2>camear</h2>
      <input type="file" accept="image/*" capture="camera" />
      <br />
      <h2>camcorder</h2>
      <input type="file" accept="video/*" capture="camcorder" />
      <br />
      <h2>microphone</h2>
      <input type="file" accept="audio/*" capture="microphone" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
a {
  font-weight: bold;
  color: #2c3e50 !important;
}
a.router-link-exact-active {
  color: #42b983 !important;
}
</style>
