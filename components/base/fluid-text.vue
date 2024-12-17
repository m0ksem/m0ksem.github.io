<template>
  <span class="m-fluid-text" ref="root">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { useRgbBreathing } from '../../composables/use-rgb-breathing'

const rgb = useRgbBreathing()

const rgbRaw = computed(() => {
  if (!rgb.value) { return '255, 255, 255' }

  return `rgba(${rgb.value.match(/rgb\((.*)\)/)![1]}, 0.8)`
})

const root = ref()

const shiftX = computed(() => {
  if (!root.value) { return 0 }

  const { x } = root.value.getBoundingClientRect()

  return -x + 'px'
})

const shiftY = computed(() => {
  if (!root.value) { return 0 }

  const { y } = root.value.getBoundingClientRect()

  return -y + 'px'
})
</script>

<style lang="scss" scoped>
@keyframes moveFluidBg {
  0% {
    background-position: v-bind(shiftX) v-bind(shiftY);
  }

  100% {
    background-position: calc(-1 * var(--size) + v-bind(shiftX)) v-bind(shiftY);
  }
}

.m-fluid-text {
  --size: 1000px;

  position: relative;
  font-weight: bold;
  background: url(@/assets/fluid.jpg);
  background-size: var(--size) var(--size);

  filter: brightness(1.5);

  -webkit-text-fill-color: v-bind(rgbRaw);
  background-clip: text;
  -webkit-background-clip: text;

  animation: moveFluidBg 30s linear 1s infinite;
  opacity: 0.5;
}
</style>