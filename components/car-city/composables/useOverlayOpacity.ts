import { useEventListener } from '@vueuse/core'
import type { Ref } from 'vue'

export const useOverlayOpacity = (canvas: Ref<HTMLCanvasElement | undefined>) => {
  const opacity = ref<number>()
  const onScroll = () => {
    const rect = canvas.value!.getBoundingClientRect()
    const zoom = Math.max(0, rect.top + rect.height - window.innerHeight * 1.3)

    opacity.value = zoom / 100
  }

  useEventListener('scroll', onScroll)

  return opacity
}