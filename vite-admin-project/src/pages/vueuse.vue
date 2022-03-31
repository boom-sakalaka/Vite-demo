<!--
 * @Date: 2022-03-31 14:07:34
 * @LastEditTime: 2022-03-31 14:07:34
 * @FilePath: \Vite-demo\vite-admin-project\src\pages\vueuse.vue
 * @Description: 
-->
<template>
    <h1>测试 vueUse 的鼠标坐标</h1>

    <h3>Mouse: {{ x }} x {{ y }}</h3>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useMouse } from '@vueuse/core';

export default defineComponent({
    name: 'VueUse',
    setup() {
        const { x, y } = useMouse();

        return {
            x,
            y,
        };
    },
});
</script>
