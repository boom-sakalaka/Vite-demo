<!--
 * @Author: GZH
 * @Date: 2021-08-18 16:32:22
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-18 17:03:01
 * @FilePath: \Vite-demo\my-vue-app\src\views\setupProps\index.vue
 * @Description: 
-->
<template>
  <div>
    <h1>setup 的参数</h1>
    <s-child :msg="msg" @changemsg="handleChangeMsg">
      <!-- <template v-slot:content>
        <p>这是插槽内容</p>
      </template> -->
    </s-child>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import sChild from './sChild.vue';
import { onMounted } from '@vue/runtime-core';

export default {
  components: { sChild },
  setup() {
    const msg = ref('父组件传递过来的数据');
    onMounted(() => {
      // setTimeout(() => {
      //   msg.value = '父组件修改后传递过来的数据';
      // }, 1000);
    });
    const handleChangeMsg = cMsg => {
      msg.value = cMsg;
    };
    return { msg, handleChangeMsg };
  },
};
</script>

<style lang="scss" scoped></style>
