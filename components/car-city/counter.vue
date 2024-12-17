<template>
  <span class="counter">{{ current }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
  count: {
    type: Number,
    default: 3
  },
  delay: {
    type: Number,
    default: 1000
  }
})

const current = ref(0)

onMounted(() => {
  current.value = props.count
  const inrtv = setInterval(() => {
    current.value-=1
    if (current.value === 0) {
      clearInterval(inrtv)
    }
  }, props.delay)
})

const animationDelay = computed(() => props.delay + 'ms')
</script>

<style lang="scss" scoped>
@keyframes CounterAnimation {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

.counter {
  display: block;
  // animation: CounterAnimation v-bind(animationDelay) ease-in-out infinite;
  font-size: 64px;
}
</style>