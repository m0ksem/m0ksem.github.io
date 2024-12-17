import { useRaf60Fps } from './use-raf-60-fps'
import { useIntersectionObserver } from '@vueuse/core'
import type { MaybeElement } from '@vueuse/core'
import type { Ref } from 'vue'

export const useCanvasRaf = (canvas: Ref<MaybeElement>, cb: () => void) => {
  const { pause, resume } = useRaf60Fps(cb)

  useIntersectionObserver(canvas, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      resume()
    } else {
      pause()
    }
  })
}