<template>
  <div class="car-city">
    <div class="car-city__canvas-wrapper">
      <canvas ref="canvas" />
      <div class="car-city__canvas-overlay" :style="{ opacity }" />
    </div>
    
    <div class="car-city__content pl-8">
      <div v-if="!isStarted && !isStarting" class="car-city__card">
        <button @click="startGame">Take a ride</button>
      </div>

      <div v-else-if="isStarting" class="car-city__card">
        <p>Use <kbd>A</kbd> and <kbd>D</kbd> to move the car</p>
      </div>

      <div v-else-if="!isLose" class="car-city__card">
        <p>{{ points }}</p>
      </div>

      <div v-if="isLose && !isStarting" class="car-city__card">
        <button @click.prevent.stop="startGame" class="mr-6">Try again</button>
        <p>{{ points }}</p>
      </div>

      <slot />
    </div>

    <div class="car-city__center">
      <Counter v-if="isStarting" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Counter from './counter.vue'
import { PerspectiveCamera, WebGLRenderer, Scene, Mesh, MeshStandardMaterial, HemisphereLight, Fog, PlaneGeometry, RectAreaLight, InstancedMesh, BufferGeometry, Object3D } from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
import car from './models/car.glb?three'
import building from './models/building.obj?three'
import { createMaterial as createGridMaterial } from './shaders/grid'
import { useClock } from '../../composables/use-clock'
import { useCameraScroll } from './composables/useCameraScroll'
import { useRgbBreathingObject } from '../../composables/use-rgb-breathing'
import { useGame } from './composables/useGame'
import { useFadeIntersection } from '../../composables/use-fade-intersection'
import { useOverlayOpacity } from './composables/useOverlayOpacity'
import { useRaf60Fps } from '../../composables/use-raf-60-fps'

const clock = useClock()
const rgb = useRgbBreathingObject()

const canvas = ref<HTMLCanvasElement>()
const camera = new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 )
const scene = new Scene()

const { isIntersecting } = useFadeIntersection(canvas)

const light = new HemisphereLight(0xeeeeee, 0x000000, 0.1)
scene.add(light)
const fog = new Fog(0x000000, 0, 1000)
car.rotateY(Math.PI)
car.position.set(5, 0, 0)

const carFrontLight = new RectAreaLight(0xfffffff, 30, 10, 2)
carFrontLight.lookAt(0, 0, 1000)
carFrontLight.position.set(0, 0, 7)
car.add(carFrontLight)
scene.add(car)
scene.fog = fog

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
const angles = [
  0,
  Math.PI / 2,
  Math.PI,
  Math.PI * 1.5,
]

// const cityMaterial = createCityMaterial('#ffffff', scene)
const cityMaterial = new MeshStandardMaterial()
cityMaterial.opacity = 0.8
cityMaterial.transparent = true

const geometries: BufferGeometry[] = []
building.traverse((mesh) => {
  if ((mesh as Mesh).isMesh) {
    const { geometry } = (mesh as Mesh)
    geometries.push(geometry)
  }
})
const cityGeometry = mergeGeometries(geometries)

const CHUNKS_COUNT = 10
const CHUNK_SCALE = 4
const CHUNK_SIZE = 128 / CHUNK_SCALE
const city = new InstancedMesh(cityGeometry, cityMaterial, CHUNKS_COUNT * 2)
city.scale.set(CHUNK_SCALE, CHUNK_SCALE, CHUNK_SCALE)
city.position.y = -21
city.position.z = 0
const dummy = new Object3D()
for (let i = 0; i < CHUNKS_COUNT * 2; i += 2) {
  dummy.rotateY(angles[random(0, 3)])
  dummy.position.x = 28
  dummy.position.z = -CHUNK_SIZE * i / 2
  dummy.updateMatrix()
  city.setMatrixAt(i, dummy.matrix)
  dummy.rotateY(angles[random(0, 3)])
  dummy.position.x = -28
  dummy.position.z = -CHUNK_SIZE * i / 2
  dummy.updateMatrix()
  city.setMatrixAt(i + 1, dummy.matrix)
}
city.instanceMatrix.needsUpdate = true
const city2 = city.clone()
city2.position.z = -CHUNK_SIZE * CHUNKS_COUNT * CHUNK_SCALE
scene.add(city).add(city2)

const { startGame, isLose, isStarted, points, isStarting, junkGroup, update: updateGame } = useGame(car, [city, city2], CHUNK_SIZE * CHUNKS_COUNT * CHUNK_SCALE)
scene.add(junkGroup)

const gridMaterial = createGridMaterial('#49494e', scene)
{
  const plane = new PlaneGeometry(20, 9999)

  const getReflectionMesh = () => {
    if (window.innerWidth > 1280) {
      return new Reflector(plane, {
        clipBias: 0.003,
      })
    } else {
      const m = new MeshStandardMaterial({ color: 0x111111, roughness: 1 })
      return new Mesh(plane, m)
    }
  }

  const mesh = new Mesh(plane, gridMaterial)
  mesh.position.y = -1
  mesh.rotateX(-Math.PI / 2)

  const mesh2 = getReflectionMesh()
  mesh2.position.y = -1.1
  mesh2.rotateX(-Math.PI / 2)

  scene.add(mesh, mesh2)
}

scene.add(camera)

camera.position.z = 80
camera.position.y = 10
camera.lookAt(0, 0, 0)

useCameraScroll(canvas, camera)
const opacity = useOverlayOpacity(canvas)

let bodyMaterial: MeshStandardMaterial | null = null
const getBodyMaterial = () => {
  car.traverse((child) => {
    if (child instanceof Mesh) {
      if (child.material.name === 'CarBody') {
        bodyMaterial = child.material
      }
    }
  })
  if (!bodyMaterial) { return }

  bodyMaterial.metalness = 0.0
  bodyMaterial!.roughness = 1.0
}
car.addEventListener('loaded', getBodyMaterial)
getBodyMaterial()

onMounted(() => {
  const renderer = new WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
  })
  renderer.setSize(canvas.value!.clientWidth, canvas.value!.clientHeight)

  // cityMaterial.uniforms.fogColor.value = fog.color
  // cityMaterial.uniforms.fogNear.value = fog.near
  // cityMaterial.uniforms.fogFar.value = fog.far

  useRaf60Fps(() => {    
    if (!isIntersecting.value) { return }
    updateGame()
    cityMaterial.color.setRGB(rgb.value.r, rgb.value.g, rgb.value.b)
    
    carFrontLight.color.setRGB(rgb.value.r, rgb.value.g, rgb.value.b)
    gridMaterial.uniforms.time.value = clock.value

    if (bodyMaterial) {   
      bodyMaterial.color = rgb.value as any
    }

    car.animate()

    renderer.render(scene, camera)
  })
})
</script>

<style lang="scss" scoped>
.car-city {
  position: relative;
  z-index: 0;
  overflow: hidden;

  &__canvas-wrapper {
    z-index: -1;
    overflow: hidden;
    &:after, &::before {
      content: '';
      position: absolute;
      left: 0;
      height: 150px;
      width: 100%;
      z-index: 1;
    }

    &::before {
      height: 400px;
      bottom: 0;
      background: linear-gradient(to top, var(--m-background) 10%, rgba(0, 0, 0, 0) 100%);
    }
  }

  &__canvas-overlay {
    background: var(--m-background);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  &__content {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    max-width: 1280px;
    z-index: 99999;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__center {
    position: absolute;
    top: 30%;
    left: 50%;
    z-index: 999;
    color: var(--m-color);
    z-index: 99999;
    transform: translateX(-50%) translateY(-50%);
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
    font-weight: bold;
  }

  &__card {
    bottom: 64px;
    text-align: center;
    z-index: 1;
    display: flex;
    align-items: center;

    h5 {
      font-size: 3rem;
      color: var(--m-color);
      text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
    }

    button {
      border: 1px solid var(--m-rgb);
      background: transparent;
      color: var(--m-color);
      padding: 8px 16px;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;
      font-size: 1rem;

      &:hover {
        background-color: var(--m-rgb);
      }
    }

    p {
      color: var(--m-color);
      font-weight: bold;
    }

    kbd {
      display: inline-block;
      width: 24px;
      height: 24px;
      line-height: 20px;
      border: 2px solid var(--m-rgb);
      border-radius: 2px;
      background: var(--m-background);
    }
  }
}

canvas {
  width: 100%;
  height: 120vh;
  position: relative;
}
</style>