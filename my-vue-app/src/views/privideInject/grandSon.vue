<!--
 * @Author: GZH
 * @Date: 2021-08-18 17:24:33
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-18 18:10:52
 * @FilePath: \Vite-demo\my-vue-app\src\views\privideInject\grandSon.vue
 * @Description: 
-->
<template>
  <div>
    <h4>name: {{ name1 }}</h4>
    <h4>info: {{ info }}</h4>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  setup() {
    const name = inject('name', '嘻嘻'); // 第二个参数为默认值，可选
    const info = inject('info');
    return {
      name,
      info,
    };
  },
};
</script>

<style lang="scss" scoped></style>
