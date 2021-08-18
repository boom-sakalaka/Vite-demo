<!--
 * @Author: GZH
 * @Date: 2021-08-18 16:34:46
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-18 17:03:50
 * @FilePath: \Vite-demo\my-vue-app\src\views\setupProps\sChild.vue
 * @Description: 
-->
<template>
  <div>
    <h3>schild --- 子组件</h3>
    <br />
    {{ msg }}
    <!-- <slot name="content"></slot> -->
    <button @click="childChangeMsg">修改mdg</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  setup(props, context) {
    console.log(props.msg);

    // Attribute (非响应式对象)
    console.log(context.attrs);

    // 插槽 (非响应式对象)
    // console.log(context.slots.content);

    // 触发事件 (方法)
    console.log(context.emit);

    const childChangeMsg = () => {
      context.emit('changemsg', '子组件emit派发改动的msg');
    };

    return { childChangeMsg };
  },
};
</script>

<style lang="scss" scoped></style>
