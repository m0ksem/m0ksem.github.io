import { computed } from '@vue/reactivity'
import { useClock } from './use-clock'

export const useRgbBreathing = () => {
  const clock = useClock()

  return computed(() => {
    const r = 0.5 + Math.sin(clock.value) * 0.3
    const g = 0.5
    const b = 0.5 + Math.cos(clock.value) * 0.7

    return `rgb(${r * 255}, ${g * 255}, ${b * 255})`
  })
}

export const useRgbBreathingObject = () => {
  const clock = useClock()

  return computed(() => {
    const r = 0.5 + Math.sin(clock.value) * 0.3
    const g = 0.5
    const b = 0.5 + Math.cos(clock.value) * 0.7

    return { r, g, b}
  })
}