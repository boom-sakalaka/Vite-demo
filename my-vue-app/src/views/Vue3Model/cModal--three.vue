<!--
 * @Author: GZH
 * @Date: 2021-11-06 13:50:11
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 14:20:03
 * @FilePath: \Vite-demo\my-vue-app\src\views\Vue3Model\cModal--three.vue
 * @Description: 
-->
<template>
  <input type="text" :value="name" @input="$emit('update:name', $event.target.value)" />
  <input type="text" :value="age" @input="$emit('update:age', $event.target.value)" />
</template>

<script setup>
defineProps({
  name: String,
  age: String,
});
</script>
<style lang="scss" scoped></style>
