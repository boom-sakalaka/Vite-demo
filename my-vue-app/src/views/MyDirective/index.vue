<!--
 * @Author: GZH
 * @Date: 2021-11-06 10:44:25
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 15:36:49
 * @FilePath: \Vite-demo\my-vue-app\src\views\MyDirective\index.vue
 * @Description:  https://juejin.cn/post/6968996649515515917#heading-0
-->
<template>
  <div class="my-directive-box">
    <router-link to="/myDirective/autoFocus">自定义指令---input自动聚焦</router-link>
    <br />
    <hr />
    <router-link to="/myDirective/copy">自定义指令---点击按钮自动复制内容</router-link>
    <br />
    <hr />
    <router-link to="/myDirective/realImg">自定义指令---图片加载失败后的处理</router-link>
    <br />
    <hr />
    <router-view></router-view>
  </div>
</template>

<script setup></script>
<style scoped>
.my-directive-box {
  margin-top: 50px;
}
a {
  font-weight: bold;
  color: #2c3e50 !important;
}
a.router-link-exact-active {
  color: #42b983 !important;
}
</style>
