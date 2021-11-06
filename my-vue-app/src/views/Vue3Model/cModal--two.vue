<!--
 * @Author: GZH
 * @Date: 2021-11-06 13:50:11
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 14:10:36
 * @FilePath: \Vite-demo\my-vue-app\src\views\Vue3Model\cModal--two.vue
 * @Description: 
-->
<template>
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
  <!-- 事件名字改为update:modelValue -->
</template>

<script setup>
defineProps({
  title: String,
});
</script>
<style lang="scss" scoped></style>
