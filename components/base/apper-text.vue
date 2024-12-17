<template>
  <span class="m-fluid-text" ref="root">
    {{ animatedText }}
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

const animatedText = ref('')

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

onMounted(() => {
  let counter = 0

  let interval = setInterval(() => {
    if (counter > props.text.length) {
      clearInterval(interval)
      return
    }

    animatedText.value = props.text.split('').map((letter, i) => {
      if (i < counter) {
        return letter
      }

      if (letter == ' ') {
        return ' '
      }

      return letters[Math.floor(Math.random() * letters.length)]
    }).join('')
    counter += 1/4
  }, 16)
})
</script>

<style lang="scss" scoped>
.m-fluid-text {
  --size: 500px;


  position: relative;
  font-weight: bold;
  color: var(--m-rgb);
}
</style>