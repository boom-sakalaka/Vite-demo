/*
 * @Author: GZH
 * @Date: 2021-07-09 14:28:31
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-09 16:13:52
 * @FilePath: \Vite-demo\my-vue-app\src\views\home\data\countOption.js
 * @Description:
 */
import { computed, reactive, toRefs, onMounted, onUnmounted } from 'vue';
export const useCount = () => {
  const countOption = reactive({
    count: 1,
    doubleCount: computed(() => countOption.count * 2),
    clearCount: () => (countOption.count = 0),
  });

  // 生命周期函数
  let timer;
  // onMounted(() => {
  //   timer = setInterval(() => {
  //     console.log(1);
  //     countOption.count++;
  //   }, 1000);
  // });

  onUnmounted(() => {
    clearInterval(timer);
  });
  return countOption;
};
