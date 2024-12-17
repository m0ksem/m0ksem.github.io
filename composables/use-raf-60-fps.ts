import { useRafFn } from '@vueuse/core'

const FPS = 60

export const useRaf60Fps = (fn: () => void) => {
  const delay = 1000 / FPS                            // calc. time per frame
  let then = Number(new Date())
  return useRafFn(() => {
    const now = Number(new Date())
    const delta = now - then

    if (delta > delay) {
      then = now - (delta % delay)
      fn()
    }
  })
}
