import { useCurrentElement } from '@vueuse/core'

export const useMouseMovement = () => {
  const el = ref(window)
  const movement = ref({ x: 0, y: 0, isMoving: false })

  let cleaningTimeout: ReturnType<typeof setTimeout>
  const handleMouseMove = (e: MouseEvent) => {
    movement.value = { x: e.movementX, y: e.movementY, isMoving: true }
    clearTimeout(cleaningTimeout)
    cleaningTimeout = setTimeout(() => {
      movement.value = { x: 0, y: 0, isMoving: false }
    }, 2000)
  }

  watch(el, (newVal, oldVal) => {
    if (oldVal) {
      oldVal.removeEventListener('mousemove', handleMouseMove)
    }
    if (newVal) {
      newVal.addEventListener('mousemove', handleMouseMove)
    }
  }, { immediate: true })

  return movement
}