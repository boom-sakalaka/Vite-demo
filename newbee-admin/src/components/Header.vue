<!--
 * @Author: GZH
 * @Date: 2021-08-20 17:26:48
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-20 17:38:10
 * @FilePath: \Vite-demo\newbee-admin\src\components\Header.vue
 * @Description: 
-->
<!--Header.vue-->
<template>
  <div class="header">
    <div class="left">
      <span style="font-size: 20px">{{ name }}</span>
    </div>
    <div class="right">右</div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Header',
  setup() {
    // 获取路由实例
    const router = useRouter();
    // 声明路由和title 对应的键值对
    const postMap = {
      index: '首页',
      add: '添加商品',
    };
    const state = reactive({
      name: '首页',
    });
    // 监听路由变化方法
    router.afterEach(to => {
      console.log('to', to);
      const { id } = to.query;
      state.name = postMap[to.name];
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.header {
  height: 50px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>
