<!--
 * @Author: GZH
 * @Date: 2021-07-09 15:30:55
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-09 16:03:44
 * @FilePath: \Vite-demo\my-vue-app\src\views\ModalButton\index.vue
 * @Description: 
-->
<template>
  <div>
    <button @click="modulOpen = true">弹出一个模态窗口</button>
    <teleport to="body">
      <div v-if="modulOpen" class="modal">
        <div>这是一个弹窗，我的父元素是body</div>
        <button @click="modulOpen = false">关闭</button>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name: 'ModalButton',
  setup() {
    const modulOpen = ref(false);
    return { modulOpen };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background: #e3e3e3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
