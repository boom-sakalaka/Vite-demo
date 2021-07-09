<!--
 * @Author: your name
 * @Date: 2021-06-06 09:41:09
 * @LastEditTime: 2021-07-09 16:14:51
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \Vite-demo\my-vue-app\src\views\home\index.vue
-->
<template>
  <div>
    <div>count----{{ count }}</div>
    <div>double---{{ doubleCount }}</div>
    <div>name---{{ name }}</div>
    <div ref="desc">元素引用测试</div>
    <ModalButton />
    <Emits @success="clickfn" />
  </div>
</template>

<script>
import { useCount } from '@/views/home/data/countOption';
import { ref, toRefs } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';
import ModalButton from '@/views/ModalButton/index.vue';
import Emits from '@/views/Emits/index.vue';

export default {
  name: 'home',
  components: {
    ModalButton,
    Emits,
  },
  setup() {
    const countOption = useCount();
    // const {count,doubleCount} = useCount(); // 这样导出的数据就不是响应式的了
    const name = ref('Tom');
    onMounted(() => {
      setTimeout(() => {
        // countOption.clearCount();
        name.value = 'jerry';
      }, 2000);
    });

    // 使用元素的引用
    const desc = ref(null);

    watch(
      () => countOption.count, // 返回监听的值
      (val, oldVal) => {
        console.log('old', oldVal);
        console.log('oldval', val);
        const divDom = desc.value;
        divDom.textContent = 'counter change' + val;
      }
    );
    const clickfn = () => {
      console.log('click');
    };
    return {
      // count,
      // doubleCount,
      ...toRefs(countOption),
      name,
      desc,
      clickfn,
    };
  },
};
</script>

<style lang="scss" scoped></style>
