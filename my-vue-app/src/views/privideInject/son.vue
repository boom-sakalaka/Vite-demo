<!--
 * @Author: GZH
 * @Date: 2021-08-18 17:24:01
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-18 17:26:32
 * @FilePath: \Vite-demo\my-vue-app\src\views\privideInject\son.vue
 * @Description: 
-->
<template>
  <div>
    <grand-son />
  </div>
</template>

<script>
import grandSon from './grandSon.vue';
export default {
  components: { grandSon },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
