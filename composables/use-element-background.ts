import type { Ref } from 'vue'
import { useEl } from './use-el'

type Maybe<T> = T | undefined | null 

const WHITE_COLOR = 'rgb(255, 255, 255)'
const isTransparent = (color: string) => color === 'rgba(0, 0, 0, 0)'

const recursiveGetBackground = (el: Maybe<HTMLElement>): string => {
  if (!el) { return WHITE_COLOR }
  if (el.nodeType !== Node.ELEMENT_NODE) { return recursiveGetBackground(el.parentElement) }

  const bg = window.getComputedStyle(el).backgroundColor

  if (!isTransparent(bg)) { return bg }

  return recursiveGetBackground(el.parentElement)
}

export const useElementBackground = (el: Ref<HTMLElement | undefined> = useEl()) => {
  const background = ref(WHITE_COLOR)

  watch(el, (newEl) => {
    background.value = recursiveGetBackground(newEl)
  }, { immediate: true })

  return background
}