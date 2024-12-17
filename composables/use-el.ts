export const useEl = () => {
  const { proxy } = getCurrentInstance()!

  const el = ref<HTMLElement | undefined>()

  onMounted(() => {
    el.value = proxy?.$el
  })

  onBeforeUnmount(() => {
    el.value = undefined
  })

  return el
}