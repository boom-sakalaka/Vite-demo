<!--
 * @Author: GZH
 * @Date: 2021-11-06 13:50:11
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 14:04:07
 * @FilePath: \Vite-demo\my-vue-app\src\views\Vue3Model\cModal--one.vue
 * @Description: 
-->
<template>
  <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
  <!-- 事件名字改为update:modelValue -->
</template>

<script setup>
defineProps({
  modelValue: String,
});
</script>
<style lang="scss" scoped></style>
