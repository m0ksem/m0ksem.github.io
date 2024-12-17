export const useMetronome = (max: number, min: number, initial = 0) => {
  const current = ref(initial)
  
  let stepModdifier = 1
  const animate = (step: number) => {
    current.value += step * stepModdifier
    if (current.value > max) {
      stepModdifier = -1
    } else if (current.value < min) {
      stepModdifier = 1
    }
  }

  return {
    current, animate
  }
}
