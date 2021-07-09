<!--
 * @Author: GZH
 * @Date: 2021-07-09 16:41:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-09 17:25:19
 * @FilePath: \Vite-demo\my-vue-app\src\views\v-modal\index.vue
 * @Description: 
-->
<template>
  <div>
    <div>数字：{{ count }}</div>
    <button @click="$emit('update:count', count + 1)">修改数字</button>
  </div>
</template>

<script>
export default {
  name: 'myVModal',
  props: {
    count: Number,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
