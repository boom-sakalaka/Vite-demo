<!--
 * @Author: GZH
 * @Date: 2021-11-06 13:50:11
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 17:30:37
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
const emit = defineEmits(['update:modelValue']);

setTimeout(() => {
  emit('update:modelValue', '测试');
}, 1000);
</script>
<style lang="scss" scoped></style>
