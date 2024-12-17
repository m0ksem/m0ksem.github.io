<template>
  <svg class="scrolldown-icon" :style="{ opacity }" xmlns="http://www.w3.org/2000/svg" version="1.0" width="121.33" height="121.33" viewBox="0 0 91 91"><path d="M30.9 3.4C24.7 7.6 24 10.4 24 31s.7 23.4 6.9 27.6c3.2 2.2 4.6 2.4 14.2 2.4 9.3 0 11-.3 13.9-2.3 6.8-4.5 7.5-7 7.5-27.7S65.8 7.8 59 3.3C56.1 1.3 54.4 1 45.1 1c-9.6 0-11 .2-14.2 2.4zm26 4.2c4.2 3 5.1 7.1 5.1 23.4 0 22.9-1.4 25-17 25-15.2-.1-16-1.3-16-25s.8-24.9 16-25c7.2 0 10.1.4 11.9 1.6z"/><path d="M43.7 15.7c-.4.3-.7 3.1-.7 6 0 5.1.2 5.4 2.3 5.1 1.7-.2 2.3-1.1 2.5-3.7.6-6.2-1.5-10-4.1-7.4zM43.7 65.7c-.4.3-.7 4.2-.7 8.5v7.9l-2.9-2c-3.6-2.6-6.1-2.7-6.1-.4 0 2 9.1 10.3 11.2 10.3 2.3 0 11.8-8.9 11.1-10.5-.8-2.1-3.3-1.8-6 .7L48 82.3v-7.4c0-8-1.8-11.8-4.3-9.2z"/></svg>
</template>

<script setup lang="ts">
import { useEventListener } from '@vueuse/core'

const opacity = ref(0)
let timeout = -1
onMounted(() => {
  timeout = setTimeout(() => {
    opacity.value = 1
  }, 5000)
})

useEventListener('scroll', () => {
  clearTimeout(timeout)
  opacity.value = 0
})
</script>

<style lang="scss" scoped>
  @keyframes pulse {
    0% {
      transform: scale(1) translateY(0);
    }
    50% {
      transform: scale(1.05) translateY(5px);
    }
    100% {
      transform: scale(1);
    }
  }

  .scrolldown-icon {
    animation: pulse 3.0s infinite;
    opacity: 0;
    transition: opacity 0.5s ease-in-out 0.5s;
  }
</style>