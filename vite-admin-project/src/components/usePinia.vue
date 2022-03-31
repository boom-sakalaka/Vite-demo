<!--
 * @Date: 2022-03-31 14:02:10
 * @LastEditTime: 2022-03-31 14:02:10
 * @FilePath: \Vite-demo\vite-admin-project\src\components\usePinia.vue
 * @Description: 
-->
<template>
    <div>{{ userStore.name }}</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

userStore.updateName('李四');
</script>
