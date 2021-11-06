<!--
 * @Author: GZH
 * @Date: 2021-11-06 13:50:11
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 15:08:09
 * @FilePath: \Vite-demo\my-vue-app\src\views\Vue3Model\cModal-Four.vue
 * @Description: 
-->
<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>

<script setup>
defineProps({
  modelValue: String,
  // modelModifiers: Object,
});

const emit = defineEmits(['update:modelValue']);

const emitValue = e => {
  let value = e.target.value;
  // 如果使用了自定义修饰符，就处理值
  // if (this.modelModifiers.capitalize) {
  value = value.charAt(0).toUpperCase() + value.slice(1);
  // }
  // emit value
  emit('update:modelValue', value);
};
</script>
