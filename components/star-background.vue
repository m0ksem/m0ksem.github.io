<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import { useCanvasRaf } from '../composables/use-canvas-raf'
import { useMouseMovement } from '../composables/use-mouse-movement'
import { useRgbBreathing } from '../composables/use-rgb-breathing'
import FluidBackground from './fluid-background.vue'

const getRandomBoolean = (coef = 0.5) => Math.random() < coef

const canvas = ref<HTMLCanvasElement>()

type Star = {
  x: number, y: number,
  size: number,
  animation: number,
  velocity: { x: number, y: number },
  color: string | undefined | null,
  tail: boolean,
}

const rgb = useRgbBreathing()

const colors = [
  '#1D1D1Daa',
  '#800034', 
  '#7f00ff',
  '#7b0046',
  '#8000b3',
  '#700064',
  '#4d00ff',
  '#410062',
  '#76008b',
  '#800069',
]

const getRandomColor = () => {
  if (getRandomBoolean(0.5)) { return colors[0] }

  return undefined

}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

const DRAW_PADDING = 50
const STARS_COUNT = 500
const MAX_STAR_SIZE = 3
const MIN_STAR_SIZE = 2
const SPEED = 0.01
const MOVING_SPEED = 0.3
const COMET_MOVING_SPEED = 30
const GRAVITY_DISTANCE = 500
const TAIL_LENGTH = 30

const createStar = (): Star => {
  const velocity = { x : (Math.random() * 2 - 1), y: (Math.random() * 2 - 1) }

  return {
    x: Math.random() * (canvas.value!.width - DRAW_PADDING),
    y: Math.random() * (canvas.value!.height - DRAW_PADDING),
    size: Math.random() * MAX_STAR_SIZE,
    animation: Math.random(),
    velocity,
    color: getRandomColor(),
    tail: false
  }
}

const toSingle = (x :number) => x > COMET_MOVING_SPEED ? x / COMET_MOVING_SPEED : x

const darkenColor = (rgb: string, amount = 0.5) => {
  const color = rgb.slice(4, -1).split(',').map((v) => parseInt(v))
  return `rgb(${color.map((v) => v * amount).join(',')})`
}

const transparentColor = (rgb: string, alpha: number) => {
  const color = rgb.slice(4, -1).split(',').map((v) => parseInt(v))
  return `rgba(${color.join(',')}, ${alpha})`
}

const createGradientBrash = (ctx: CanvasRenderingContext2D, star: Star) => {
  const brush = ctx.createLinearGradient(
    star.x, 
    star.y, 
    star.x - star.size * TAIL_LENGTH / 2 * toSingle(star.velocity.x), 
    star.y - star.size * TAIL_LENGTH / 2 * toSingle(star.velocity.y)
  )

  brush.addColorStop(0.0, star.color || darkenColor('rgb(255, 255, 255)', Math.random() * 0.5 + 0.5))
  brush.addColorStop(0.9, '#ffffff00')

  return brush
}

const createRadialGradientBrash = (ctx: CanvasRenderingContext2D, star: Star, scale: number) => {
  const brush = ctx.createRadialGradient(
    star.x, 
    star.y, 
    0, 
    star.x, 
    star.y, 
    star.size + 5.0 * clamp(scale, 0.8, 1)
  )

  brush.addColorStop(1.0, transparentColor(rgb.value, 0.0))
  brush.addColorStop(0.0, star.color || transparentColor(darkenColor(rgb.value), 0.5))

  return brush
}

const mouseMovement = useMouseMovement()
const mouse = useMouse()

onMounted(() => {
  canvas.value!.width = canvas.value!.offsetWidth
  canvas.value!.height = canvas.value!.offsetHeight
  const ctx = canvas.value!.getContext('2d')

  if (!ctx) { return }

  const stars: Star[] = Array(STARS_COUNT).fill(0).map(createStar)
  // const comets: Star[] = Array(COMET_COUNT).fill(0).map(createCommet)

  let time = 0

  const gravitityTo = (fromX: number, fromY: number, toX: number, toY: number) => {
    const distanceX = (fromX - toX)
    const distanceY = (fromY - toY)

    const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))

    const mouseMovementScale = Math.abs((mouseMovement.value.x + mouseMovement.value.y) / 2)
    const scale = clamp(1 - Math.pow(distance / GRAVITY_DISTANCE, 2), 0, 1) * mouseMovementScale * 0.5

    return {
      x: distanceX / distance * scale,
      y: distanceY / distance * scale,
    }
  }

  const drawStar = (star: Star, scale: number) => {
    ctx.beginPath()
    ctx.arc(star.x, star.y, clamp(star.size * scale, MIN_STAR_SIZE, MAX_STAR_SIZE), 0, Math.PI * 2)
    ctx.fill()
  }

  const drawStarGlow = (star: Star, scale: number) => {
    ctx.beginPath()
    ctx.arc(star.x, star.y, (star.size + 10.0) * clamp(scale, 0.8, 1), 0, Math.PI * 2)
    ctx.fill()
  }

  useCanvasRaf(canvas, () => {
    time += SPEED
    ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height)

    stars.forEach((star) => {
      const scale = (Math.sin(time + star.animation) + 1) / 2

      if (!star.color) {
        ctx.fillStyle = createRadialGradientBrash(ctx, star, scale)
        drawStarGlow(star, scale)
      }
      ctx.fillStyle = createGradientBrash(ctx, star)
      drawStar(star, scale)

      
      const gr = gravitityTo(star.x, star.y, mouse.x.value, mouse.y.value)

      star.x += (star.velocity.x + gr.x) * MOVING_SPEED
      star.y += (star.velocity.y + gr.y) * MOVING_SPEED

      if (star.x < -DRAW_PADDING) { star.x = canvas.value!.width }
      if (star.x > canvas.value!.width + DRAW_PADDING) { star.x = -DRAW_PADDING }
      if (star.y < -DRAW_PADDING) { star.y = canvas.value!.height + DRAW_PADDING }
      if (star.y > canvas.value!.height + DRAW_PADDING) { star.y = -DRAW_PADDING }
    })
  })
})
</script>

<template>
  <div class="star-background">
    <canvas ref="canvas" />
    <FluidBackground />
  </div>
</template>

<style lang="scss" scoped>
  .star-background {
    position: relative;
    display: flex;
    canvas {
      flex: 1;
    }

    .fluid-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.25;
      max-height: 100vh;
    }
  }
</style>