import { useIntersectionObserver } from '@vueuse/core'
import type { MaybeRef, MaybeElement } from '@vueuse/core'

export const useFadeIntersection = (el: MaybeRef<MaybeElement>) => {
  const ownIsIntersecting = { value: false }
  useIntersectionObserver(el, ([{ isIntersecting }]) => {
    ownIsIntersecting.value = isIntersecting
    const element = unref(el) as HTMLElement

    if (isIntersecting) {
      element.animate([
        { opacity: 0 },
        { opacity: 1 },
      ], {
        duration: 300,
      })
      element!.style.opacity = '1'
    } else {
      element!.style.opacity = '0'
    }
  })

  return { isIntersecting: ownIsIntersecting }
}