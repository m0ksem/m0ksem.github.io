<template>
  <div class="contributions">
    <div class="canvas-container">
      <canvas ref="canvas"></canvas>
    </div>
    <a href="https://github.com/m0ksem" target="_blank" style="color: var(--m-rgb)">
      <slot />
    </a>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, Fog, InstancedMesh, Object3D, Color } from 'three'
import { getContributions }  from '@/api/github'
import { createMaterial } from './contribution-city-shader'
import { useClock } from '../../composables/use-clock'
import { useElementBackground } from '@/composables/use-element-background'
import { useIntersectionObserver } from '@vueuse/core'
import { useFadeIntersection } from '../../composables/use-fade-intersection'
import { useCanvasRaf } from '../../composables/use-canvas-raf'

const clock = useClock()
const canvas = ref<HTMLCanvasElement>()
const scene = ref<Scene | null>(null)
let camera: PerspectiveCamera | null = null
let renderer: WebGLRenderer | null = null

const getContributionColor = (count: number) => {
  if (count > 20) {
    return '#fff'
  } else if (count > 18) {
    return '#f8f9fa'
  } else if (count > 15) {
    return '#e9ecef'
  } else if (count > 12) {
    return '#dee2e6'
  } else if (count > 10) {
    return '#ced4da'
  } else if (count > 7) {
    return '#adb5bd'
  } else if (count > 5) {
    return '#6c757d'
  } else if (count > 2) {
    return '#495057'
  } else if (count > 0) {
    return '#343a40'
  } else {
    return '#f8f9fa'
  }
}

const { isIntersecting } = useFadeIntersection(canvas)

const createScene = async () => {
  const weeks = await getContributions('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', 'm0ksem')

  if (!canvas.value) { return null }
  
  canvas.value.width = canvas.value.offsetWidth
  canvas.value.height = canvas.value.offsetHeight

  const scene = new Scene()

  renderer = new WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true })
  renderer.setSize(canvas.value.offsetWidth, canvas.value.offsetHeight)

  const cellGap = 0.5
  const cellSize = 1
  const width = weeks.length * cellSize + (weeks.length) * cellGap
  const depth = cellSize * 7 + (2) * cellGap

  const dummy = new Object3D()
  const geometry = new BoxGeometry()
  const material = createMaterial('#fff', scene)
  const mesh = new InstancedMesh(geometry, material, 365)
  scene.add(mesh)
  weeks.forEach((week: any, w: number) => {
    week.contributionDays.forEach((day: any, d: number) => {
      const count = day.contributionCount

      dummy.scale.y = Math.sqrt(Math.max(count, 0) / 2) * 5

      dummy.position.set(
        (cellSize + cellGap) * w - width / 2, 
        dummy.scale.y / 2, 
        (cellSize + cellGap) * d
      )
      dummy.updateMatrix()

      mesh.setMatrixAt(w * 7 + d, dummy.matrix)
      mesh.setColorAt(w * 7 + d, new Color(getContributionColor(count)))
    })
  })

  camera = new PerspectiveCamera(30, canvas.value.offsetWidth / canvas.value.offsetHeight, 0.1, 1000)
  camera.position.set(0, width / 2.2 - depth, width / 1.7)
  camera.lookAt(0, 0, -depth)

  startCameraPosition = { ...camera.position } 

  useCanvasRaf(canvas, () => {
    material.uniforms['time'].value = clock.value
    material.uniforms['fogColor'].value = scene.fog?.color
    material.uniforms['fogNear'].value = (scene.fog as Fog)?.near
    material.uniforms['fogFar'].value = (scene.fog as Fog)?.color
    material.needsUpdate = true

    renderer?.render(scene, camera!)
  })

  return scene
}

let startCameraPosition = { x: 0, y: 0, z: 0 }
const onScroll = () => {
  const rect = canvas.value!.getBoundingClientRect()
  const zoom = Math.max(0, rect.top + rect.height - window.innerHeight)

  camera!.position.z = startCameraPosition.z + zoom / 50
  camera!.position.y = startCameraPosition.y + zoom / 50
}

const onResize = () => {
  if (!camera || !canvas.value) { return }

  camera.aspect = canvas.value.offsetWidth / canvas.value.offsetHeight
  camera.updateProjectionMatrix()

  renderer?.setSize(canvas.value.offsetWidth, canvas.value.offsetHeight)
}

onMounted(async () => { 
  scene.value = await createScene()
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})

const background = useElementBackground()

watch([background, scene], () => {
  if (!scene.value) { return }

  scene.value.fog = new Fog(background.value, 30, 50)
})
</script>

<style lang="scss" scoped>
  .contributions {
    position: relative;

    .canvas-container {
      position: relative;
      width: 100%;
      height: 300px;
    }

    canvas { 
      position: absolute;
      height: 100% !important;
      width: 100% !important;
      outline: none !important;
    }

    a {
      position: absolute;
      bottom: 0;
      right: 50%;
      transform: translateX(50%);
      color: white;
      text-decoration: none;
      padding: 16px;
      font-weight: bolder;
      font-size: 14px;
      opacity: 0;
      text-align: center;
      transition: opacity 0.3s ease-in-out;
    }
    &:hover {
      a {
        opacity: 0.7;
      }
    }
  }
</style>