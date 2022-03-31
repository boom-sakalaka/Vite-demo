/*
 * @Date: 2022-03-31 13:51:37
 * @LastEditTime: 2022-03-31 13:54:09
 * @FilePath: \Vite-demo\vite-admin-project\.eslintrc.js
 * @Description:
 */
module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],

    rules: {
        // override/add rules settings here, such as:
    },
};
