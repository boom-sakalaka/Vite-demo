/*
 * @Author: GZH
 * @Date: 2021-11-06 15:23:15
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-06 15:31:18
 * @FilePath: \Vite-demo\my-vue-app\src\views\MyDirective\realImg.js
 * @Description:
 */
export const realImg = {
  async beforeMount(el, binding) {
    const imgUrl = binding.value;
    if (imgUrl) {
      const exist = await imagesIsExist(imgUrl);
      exist && el.setAttribute('src', imgUrl);
    }

    // 判断一个图片是否存在
    function imagesIsExist(url) {
      return new Promise(resolve => {
        let img = new Image();
        img.src = url;
        img.onload = () => {
          resolve(true);
          img = null;
        };
        img.onerror = () => {
          resolve(false);
          img = null;
        };
      });
    }
  },
};
