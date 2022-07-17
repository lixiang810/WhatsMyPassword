module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'prettier',
    'plugin:solid/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'solid'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: [],
    parser: '@typescript-eslint/parser',
  },
};
