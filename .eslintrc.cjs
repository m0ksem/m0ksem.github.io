/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    './auto-imports/.eslintrc-auto-import.json',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
