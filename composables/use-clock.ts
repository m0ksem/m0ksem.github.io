import { useIntervalFn, useRafFn } from '@vueuse/core'
import { ref } from 'vue'

export const clock = ref(0)

export const useClock = () => {
  return clock
}

const rafClock = ref(0)
export const useRafClock = () => {
  return rafClock
}

useIntervalFn(() => {
  clock.value += 0.1
}, 100, { immediate: true})

useRafFn(() => {
  rafClock.value += 0.01
})
