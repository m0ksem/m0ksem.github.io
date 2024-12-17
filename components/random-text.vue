<template>
  <div class="overflow-hidden text-wrap" style="white-space: break-spaces; font-family: monospace; font-size: 4rem">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { useEventListener } from '@vueuse/core'

const makeRandomCharacter = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return characters.charAt(Math.floor(Math.random() * characters.length))
}

const props = defineProps({
  size: {
    type: [Number, String],
    default: 10
  }
})

const makeRandomText = () => {
  const length = Number(props.size) * Number(props.size) / 2
  return Array
    .from({ length }, makeRandomCharacter)
    .map((character, index) => {
      if ((index + 1)  % Number(props.size) === 0) {
        return `${character}\n`
      }
      return character
    })
    .join('')
}

const text = ref()

onMounted(() => {
  text.value = makeRandomText()
})

useEventListener('scroll', () => {
  text.value = makeRandomText()
})
</script>