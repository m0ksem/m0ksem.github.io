<template>
  <div class="canvas skills" ref="canvas" />

  <div class="skills__buttons">
    <button class="skills__button" v-for="b in buttons" :key="b.text" @click="b.smoothMove">
      {{ b.text }}
    </button>
  </div>

  <div class="skills">
    <div
      v-for="(group, i) in skillsGroups"
      :key="i"
      :ref="items.set"
      class="skills__group"
    >
      <template v-if="group.length">
        <div v-for="skill in group" :key="skill" class="skill">
          {{ skill }}
        </div>        
      </template>

      <div v-else class="skills__divider" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { noop, useTemplateRefsList } from '@vueuse/core'
import { PerspectiveCamera, Scene } from 'three'
import {
  CSS3DObject,
  CSS3DRenderer,
} from 'three/examples/jsm/renderers/CSS3DRenderer.js'
import { onMounted } from 'vue'
import { GalleryControls } from './gallery-controls'
import { skills, category } from './skills'

const doubleArray = function <T>(arr: T[]) { return [...arr, ...arr] }

const skillsGroups = doubleArray(skills)

const canvas = ref()
const items = useTemplateRefsList<HTMLDivElement>()
const scene = ref<ReturnType<typeof createScene> | undefined>()

const circlePosition = (index: number, r: number) => {
  return {
    x: r * Math.sin(-index),
    y: 0,
    z: r * Math.cos(-index),
  }
}

const getRadiusFromCircleLength = (length: number) => {
  return length / (Math.PI * 2)
}

const createScene = () => {
  canvas.value.width = canvas.value.offsetWidth
  canvas.value.height = canvas.value.offsetHeight

  const scene = new Scene()

  const renderer = new CSS3DRenderer({ element: canvas.value })
  renderer.setSize(canvas.value.offsetWidth, canvas.value.offsetHeight)

  const camera = new PerspectiveCamera(
    20,
    canvas.value.offsetWidth / canvas.value.offsetHeight,
    0.1,
    1000
  )

  const controls = new GalleryControls(camera, renderer.domElement)

  const divs = items.value
  const divWidth = divs[0].parentElement!.scrollWidth

  const hLength = divs.length / 2
  const radius = getRadiusFromCircleLength(divWidth)

  scene.add(
    ...divs.map((div, i, arr) => {
      const object = new CSS3DObject(div)
      // If half array, then draw item on circle side behind the camera
      const circleHalf = i >= arr.length / 2 ? Math.PI * 2 : Math.PI
      const circleHalfIndex = i % hLength
      const { x, y, z } = circlePosition(
        (Math.PI * circleHalfIndex) / hLength + circleHalf,
        radius
      )
      object.position.set(x, y, z)
      object.lookAt(0, 0, 0)
      return object
    })
  )

  return { scene, renderer, camera, controls }
}

let draw = noop

onMounted(() => {
  scene.value = createScene()
  const { renderer, scene: s, camera, controls } = scene.value
  buttons[0].move()
  draw = () => {
    renderer.render(s, camera)
  }

  controls.onUpdate(draw)
  requestAnimationFrame(draw)
})

const getStep = (to: number, from: number) => {
  const s = (to - from)

  return s / 10
}

const moveCameraSmooth = (to: number, from: number) => {
  if (!scene.value) { return }
  const { camera } = scene.value
  const step = getStep(to, from)
  camera.rotation.y = from
  const animate = () => {
    camera.rotation.y += step

    if (Math.abs(camera.rotation.y - to) > 0.1) {
      requestAnimationFrame(animate)
    } else {
      camera.rotation.set(0, to, 0)
    }
    draw()
  }
  animate()
}

const moveCamera = (to: number): void => {
  if (!scene.value) { return }
  const { camera } = scene.value
  const from = camera.rotation.y

  moveCameraSmooth(to, from)
}

let sum = 0
const divider = 1
const buttons = Object.entries(category).map(([text, arr]) => {
  const left = sum
  sum += arr.length + divider
  return {
    text,
    smoothMove() {
      const division = items.value.length

      const thetta = (Math.PI * 2 / division) * (left + (arr.length - divider) / 2)

      moveCamera(-thetta)
    },
    move() {
      const division = items.value.length

      const thetta = (Math.PI * 2 / division) * (left + (arr.length - divider) / 2)

      if (!scene.value) { return }
      const { camera } = scene.value
      camera.rotation.set(0, -thetta, 0)
    }
  }
})
</script>

<style lang="scss">
.canvas {
  width: 100%;
  height: 400px;
  position: relative;
  z-index: 0;
}

.skills {
  display: flex;
  white-space: nowrap;

  &__group {
    padding: 8px;
  }

  &__divider {
    height: 125px;
    width: 4px;
    background: var(--m-rgb);
    border-radius: 5000px;
  }

  .skill {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 120px;
    height: 80px;
    background: var(--m-background--soft);
    color: var(--m-color);
    margin: 10px;
    padding: 8px;
    border-radius: 4px;

    &:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      height: 100%;
      filter: blur(24px);
      transform: translate(-50%, -50%);
      background: var(--m-rgb);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      z-index: 99999999;
    }

    &:hover {
      z-index: 999;
      &:after {
        opacity: 0.2;
      }
    }
  }

  &__buttons {
    display: flex;
    justify-content: center;
    margin-top: -40px;
    position: relative;
    z-index: 11;
  }

  &__button {
    background: none;
    border: 1px solid var(--m-background--soft);
    color: var(--m-color);
    padding: 12px 24px;
    margin: 10px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    font-size: 16px;
    border-radius: 5px;

    &:hover {
      background-color: rgba(var(--m-rgb--raw), 0.5);
    }
  }
}
</style>
