<!--
 * @Author: GZH
 * @Date: 2021-08-18 16:07:22
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-18 17:20:40
 * @FilePath: \Vite-demo\my-vue-app\src\views\lifeCycle\index.vue
 * @Description: 
-->
<template>
  <div>
    <h1>Vue3生命周期</h1>
    <div>{{ name }}</div>
  </div>
</template>

<script>
// vue3 中 beforeCreate  create被删除，改为setup
// onBeforeMount()： 组件挂载到节点上之前执行的函数。
// onMounted()：组件挂载完成后执行的函数。
// onBeforeUpdate()：组件更新之前执行的函数。
// onUpdated()：组件更新完成之后执行的函数。
// onBeforeUnmount()：组件卸载之前执行的函数。
// onUnmounted()：组件卸载完成后执行的函数。
// onActivated()：被 keep-alive 缓存的组件激活时调用。
// onDeactivated()：被 keep-alive 缓存的组件停用时调用，比如从 A 组件，切换到 B 组件，A 组件消失时执行。
// 10、onErrorCaptured()：当捕获一个来自子孙组件的异常时激活钩子函数。

import {
  onMounted,
  onUpdated,
  onBeforeUnmount,
  onBeforeUpdate,
  onUnmounted,
  onActivated,
  onDeactivated,
  ref,
} from 'vue';
export default {
  setup() {
    const name = ref('Tom');

    // 发送请求 写在这里 支持 async 和 awati
    // onMounted(async () => {
    //   const data = await serviceApi(params)
    // })

    // mouted 阶段
    onMounted(() => {
      console.log('onMounted');
      setTimeout(() => {
        name.value = 'jerry';
      }, 1000);
    });

    // 更新阶段
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });

    // keep-alived 相关
    onActivated(() => {
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('onDeactivated');
    });

    // 组件卸载阶段
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });

    return {
      name,
    };
  },
};
</script>

<style lang="scss" scoped></style>
