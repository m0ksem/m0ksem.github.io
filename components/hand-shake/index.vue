<template>
  <canvas class="hand-shake" ref="canvas" />
</template>

<script setup lang="ts">
import {
  Scene,
  WebGLRenderer,
  Camera,
  MeshPhongMaterial,
  DataTexture,
  Group,
  HemisphereLight,
  Mesh,
  Color,
  DoubleSide,
  MeshToonMaterial,
  RedFormat,
  LuminanceFormat,
  PointLight,
} from 'three'
import { degToRad } from 'three/src/math/MathUtils'
import { useRaf60Fps } from '../../composables/use-raf-60-fps'
import { useMetronome } from '@/composables/use-metronome'
import { useRgbBreathingObject } from '../../composables/use-rgb-breathing'
import hand from './models/hand.obj?three'

const canvas = ref()

const { current, animate } = useMetronome(15, -15)

onMounted(() => {
  const scene = new Scene()
  const camera = new Camera()
  const renderer = new WebGLRenderer({ canvas: canvas.value, alpha: true })
  // const ambientLight = new HemisphereLight(0xffffff, 0.5)

  const light = new PointLight(0xffffff, 1)
  light.position.set(10, 10, 10)
  scene.add(light)

  renderer.setSize(canvas.value!.clientWidth, canvas.value!.clientHeight)

  const createGradientMap = () => {
    const colors = new Uint8Array(2 + 2)

    for (let c = 0; c <= colors.length; c++) {
      colors[c] = (c / colors.length) * 256
    }

    const gradientMap = new DataTexture(colors, colors.length, 1, (renderer.capabilities.isWebGL2 ) ? RedFormat : LuminanceFormat)
    gradientMap.needsUpdate = true
    return gradientMap
  }


  const handWrapper = new Group()
  hand.scale.set(0.07, 0.07, 0.07)
  hand.rotation.set(0, degToRad(90), degToRad(90))
  hand.rotateY(degToRad(90))
  const handMaterial = ((hand.children[0] as Mesh).material = new MeshToonMaterial({ color: 0xffffff, side: DoubleSide, gradientMap: createGradientMap() }))
  handMaterial.side = DoubleSide

  handWrapper.add(hand)

  scene.add(handWrapper) //.add(ambientLight)

  scene.position.y = -0.5

  const rgb = useRgbBreathingObject()

  handMaterial.opacity = 1

  useRaf60Fps(() => {
    handMaterial.color = rgb.value as Color
    renderer.render(scene, camera)
    handWrapper.rotation.z = degToRad(current.value)
    // handWrapper.rotation.y += 0.005
    handMaterial.needsUpdate = true
    animate(0.5)
  })
})
</script>

<style lang="scss" scoped>
canvas {
  height: 800px;
  width: 800px;
}
</style>
