module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        document: true,
        window: true,
        BigInt: true
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    extends: [
        'plugin:vue/strongly-recommended',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/prettier'
    ]
};
