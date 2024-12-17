<template>
  <h1 class="m-heading">
    <slot>
      {{ animatedText }}
    </slot>
  </h1>
</template>

<script setup lang="ts">
import { useCurrentElement, useIntersectionObserver } from '@vueuse/core'
import type { Ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: false,
  },
})

const animatedText = ref(props.text)

const isVisible = ref(false)

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

if (props.text) {
  const el = useCurrentElement() as Ref<HTMLElement>
  const { stop } = useIntersectionObserver(el, ([e]) => {
    if (!e.isIntersecting) {
      return
    }
    isVisible.value = true
    stop()
    if (!props.text) { return }

    let counter = 0

    let interval = setInterval(() => {
      if (counter > props.text!.length) {
        clearInterval(interval)
        return
      }

      animatedText.value = props.text!.split('').map((letter, i) => {
        if (i < counter) {
          return letter
        }

        if (letter == ' ') {
          return ' '
        }

        return letters[Math.floor(Math.random() * letters.length)]
      }).join('')
      counter += 1 / 4
    }, 16)
  }, { threshold: 1, rootMargin: '10px'  })
}
</script>

<style lang="scss" scoped>
.m-heading {
  color: var(--m-color);
  font-weight: bold;
  margin: 0;
  padding: 0;
  display: block;
  color: v-bind("isVisible ? 'var(--m-color)' : 'transparent'");
}
</style>