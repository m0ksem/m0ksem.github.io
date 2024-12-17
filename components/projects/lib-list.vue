<template>
  <div class="libs">
    <ul>
      <li v-for="{ href, title } in libs" :key="title">
        <a :href="href" target="_blank">{{ title }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const libs = [
  { href: 'https://github.com/m0ksem/unplugin-object-3d', title: 'unplugin-3d-object' },
  { href: 'https://github.com/m0ksem/vue-glsl', title: 'vue-glsl' },
  { href: 'https://github.com/m0ksem/vue-custom-scrollbar/tree/master/packages/vue-custom-scrollbar', title: 'vue-custom-scrollbar' },
  { href: 'https://github.com/m0ksem/vscode-vue3-snippets', title: 'vscode-vue3-snippets' },
  { href: 'https://github.com/m0ksem/clocks', title: 'clocks' },
  { href: 'https://github.com/m0ksem/google-calendar', title: 'google-calendar' },
  { href: 'https://github.com/m0ksem/telegram-bot-template', title: 'telegram-bot-template' }
]
</script>

<style lang="scss" scoped>
  a {
    color: var(--m-color);
    &:hover {
      color: var(--m-rgb);
    }
  }

  ul {
    padding-left: 0;
    margin: 0;
    li {
      margin: 1rem 0 0 0;
      list-style: none;
      &:first-child {
        margin-top: 0;
      }
      &::before {
        display: inline-block;
        content: '';
        height: 10px;
        width: 10px;
        margin-right: 1rem;
        background: var(--m-rgb);
        vertical-align: middle;
        border-radius: 65% 35% 55% 45% / 43% 54% 46% 57%;
      }
    }
  }

  .libs {
    display: flex;
    justify-content: center;
    ul {
      width: 100%;
      max-width: 1024px;
      padding: 16px;
      box-sizing: content-box;
    }
  }
</style>