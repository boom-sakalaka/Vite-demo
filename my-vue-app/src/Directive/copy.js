/*
 * @Author: GZH
 * @Date: 2021-11-06 11:34:50
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 11:57:55
 * @FilePath: \Vite-demo\my-vue-app\src\Directive\copy.js
 * @Description:
 */
export const copy = {
  beforeMount(el, binging) {
    el.targetContent = binging.value;

    // 添加回调方法
    const success = binging.arg;

    el.addEventListener('click', () => {
      if (!el.targetContent) return console.warn('没有需要复制的目标内容');
      // 创建textarea标签
      const textarea = document.createElement('textarea');
      //设置相关属性
      textarea.readOnly = 'readonly';
      textarea.style.position = 'fixed';
      textarea.style.top = '-99999px';
      // 把内容赋值给 它的 value 属性
      textarea.value = el.targetContent;

      // 插入到页面中
      document.body.appendChild(textarea);

      // 调用onselect方法
      textarea.select();

      // 把目标内容赋值到粘贴板
      const res = document.execCommand('Copy');
      res && success ? success(el.targetContent) : console.log(`复制成功，粘贴版上的内容-----${el.targetContent}`);

      // 删除掉 这个元素
      document.body.removeChild(textarea);
    });
  },
  updated(el, binging) {
    // 实时更新最新的数据
    el.targetContent = binging.value;
  },
  unmounted(el) {
    el.removeEventListener('click', () => {});
  },
};
