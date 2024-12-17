import { useEventListener } from '@vueuse/core'
import type { Camera } from 'three'
import type { Ref } from 'vue'

export const useCameraScroll = (canvas: Ref<HTMLCanvasElement | undefined>, camera: Camera) => {
  const startCameraPosition = { x: 0, y: 5, z: 20 }
  const onScroll = () => {
    const rect = canvas.value!.getBoundingClientRect()
    const zoom = Math.max(0, rect.top + rect.height - window.innerHeight)

    camera!.position.z = startCameraPosition.z + zoom / 5
    camera!.position.y = startCameraPosition.y + zoom / 10
  }

  useEventListener('scroll', onScroll)
}