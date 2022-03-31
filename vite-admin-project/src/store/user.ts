/*
 * @Date: 2022-03-31 14:01:18
 * @LastEditTime: 2022-03-31 14:01:19
 * @FilePath: \Vite-demo\vite-admin-project\src\store\user.ts
 * @Description:
 */
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            name: '张三',
        };
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        },
    },
});
