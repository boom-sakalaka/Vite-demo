<!--
 * @Author: GZH
 * @Date: 2021-11-06 13:49:58
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 15:06:59
 * @FilePath: \Vite-demo\my-vue-app\src\views\Vue3Model\index.vue
 * @Description: 
-->
<template>
  <div>vue3 model</div>
  <h1>第一种情况 默认值为modelValue</h1>
  <!-- <c-modal-vue-one v-model="msg1" /> -->
  <c-model-vue-one :modelValue="msg1" @update:modelValue="msg1 = $event" />
  <h1>msg1--- {{ msg1 }}</h1>
  <hr />
  <h1>第二种情况</h1>
  <!-- <c-model-two v-model:title="msg2" /> -->
  <!-- 也相当于 -->
  <c-model-two :title="msg2" @update:title="msg2 = $event" />
  <h1>msg2--- {{ msg2 }}</h1>
  <hr />
  <h1>第三种情况---多个modle 传值的情况 其实vue3 修改v-model 废除 .sync 也是为了语义化和更好的去处理这些情况</h1>
  <!-- <c-model-three v-model:name="name" v-model:age="age" /> -->
  <!-- 另外一种写法 -->
  <c-model-three :name="name" :age="age" @update:name="name = $event" @update:age="age = $event" />
  <h1>name: {{ name }}</h1>
  <h1>age:{{ age }}</h1>
  <hr />

  <!-- <h1>第三种情况,v-model 添加参数</h1> -->
  <!-- <c-modal-four v-model:title.capitalize="msg3" /> -->
  <c-modal-four v-model="msg3" />
  <h1>msg3 --{{ msg3 }}</h1>
</template>

<script setup>
import { ref } from 'vue';
import cModelVueOne from './cModal--one.vue'; // 第一种默认的形势
import cModelTwo from './cModal--two.vue';
import cModelThree from './cModal--three.vue';
import CModalFour from './cModal-Four.vue';

const msg1 = ref('msg1');
const msg2 = ref('msg2');

const msg3 = ref('msg2');

const name = ref('zhangsan');
const age = ref('18');
</script>
<style lang="scss" scoped></style>
