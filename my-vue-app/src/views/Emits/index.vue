<!--
 * @Author: GZH
 * @Date: 2021-07-09 16:09:49
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-09 16:14:29
 * @FilePath: \Vite-demo\my-vue-app\src\views\Emits\index.vue
 * @Description: 
-->

<template>
  <div @click="$emit('success')">自定义事件</div>
</template>

<script>
export default {
  emits: ['success'],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
