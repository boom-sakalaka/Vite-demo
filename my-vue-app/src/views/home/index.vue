<!--
 * @Author: your name
 * @Date: 2021-06-06 09:41:09
 * @LastEditTime: 2021-08-18 19:06:35
 * @LastEditors: GZH
 * @Description: In User Settings Edit
 * @FilePath: \Vite-demo\my-vue-app\src\views\home\index.vue
-->
<template>
  <div>
    <h1>Vue3 Composition API --- 组合API 的使用</h1>
    <div>count----{{ count }}</div>
    <div>double---{{ doubleCount }}</div>
    <div>name---{{ name }}</div>
    <div ref="desc">元素引用测试</div>
    <ModalButton />
    <Emits @success="clickfn" />
    <MyVModel :count="count" @update:count="count = $event" />
  </div>
</template>

<script>
// 1.函数式： 类型支持更好 ts
// 2.标准化、简化 一致性
// 3.tree-shaking  Vue2.x 方法挂载在原型上或者实例中，不好割离， Vue3 composition api 通过 import 导入，利于做tree-shaking
// 4.复用性 composition api
// 5.性能优化 编译期的优化 // vue3 diff 算法优化 ，Vue2 会每个节点都对比 、、、vue3 通过打tag标记的方式标注那些节点需要更新 只会对需要变化的节点对比
// 6.扩展性：自定义渲染器 // Vue2 需要通过函数柯里化返回一个新的path去更新挂载节点 ，Vue3 直接拓展平台相关的api
// 带来的直观感受就是 打包后代码体积更小，程序运行速度更快

// vite 本质是起了一个后端服务，通过不同的请求返回文件，例如node_modules里面 的文件就不要处理，其余的文件就处理后返回
// vite 打包还是依赖了 rollup 的， 并且插件也是兼容rollup 插件的

import { useCount } from '@/views/home/data/countOption';
import { ref, toRefs } from '@vue/reactivity';
import { onMounted, watch, watchEffect } from '@vue/runtime-core';
import ModalButton from '@/views/ModalButton/index.vue';
import Emits from '@/views/Emits/index.vue';
import MyVModel from '@/views/v-modal/index.vue';

export default {
  name: 'home',
  components: {
    ModalButton,
    Emits,
    MyVModel,
  },
  setup() {
    const countOption = useCount();
    // const {count,doubleCount} = useCount(); //错误用法, 这样导出的数据就不是响应式的了

    // 本质是 reactive  的语法糖 , 相当于 reactive({value: 'Tom'})  这也就是为什么我们修改的时候需要    name.value = 'jerry'; 去修改
    // 但是在 return 之后为什么不需要 .vulue 调用呢，就是因为框架里面做了优化，__v_isRef: true，根据这个字段去优化
    const name = ref('Tom');
    console.log(name);

    // 生命周期钩子函数
    onMounted(() => {
      setTimeout(() => {
        // countOption.clearCount();
        name.value = 'jerry';
      }, 2000);
    });

    // 监听属性 ref 获取到 dom 实例
    // 使用dom元素的引用
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

    //watchEffect 追踪响应式数据的变化，在第一次渲染的时候会执行一次
    // watchEffect(() => {
    //   console.log(`监听查询字段${name.value}`);
    // });

    // onInvalidate 回调会在watchEffect的每一次执行前调用
    // const stop = watchEffect((onInvalidate) => {
    //     console.log(`监听查询字段${state.search}`)
    //     onInvalidate(() => {
    //       console.log('执行 onInvalidate')
    //     })
    //   })

    // watchEffect 解决 多次重复请求的问题，如果发送多个请求，一来会加大服务端的压力，二来不能保证请求返回的数据是最后一次返回的数据
    let timer = null;
    watchEffect(onInvalidate => {
      console.log(`监听查询字段${countOption.count}`);
      timer = setTimeout(() => {
        console.log('模拟接口异步请求，3 秒之后返回详情信息');
      }, 3000);
      onInvalidate(() => {
        console.log('清除');
        clearInterval(timer);
      });
    });

    // 子组件 触发事件
    const clickfn = () => {
      console.log('child click');
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
