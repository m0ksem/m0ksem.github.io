<template>
  <Shader2D class="fluid-background" :fragment="fragment" @ready="onCanvasReady" />
</template>

<script setup lang="ts">
import { Shader2D } from '@m0ksem/vue-glsl'
import type { VueGLSLReadyEvent } from '@m0ksem/vue-glsl'
import { useElementSize, useEventListener } from '@vueuse/core'
import { useEl } from '@/composables/use-el'
import { useRafClock } from '@/composables/use-clock'

const fragment = `
precision highp float;

uniform float time;
uniform float width;
uniform float height;

vec2 resolution = vec2(width, height);

float strength = 0.2;
float PI = 3.14;

vec2 tornado (vec2 position, float frame) {
  float start = 2.0;
  float animation_speed = 0.1;
  float breathing_animation_speed = 0.5;
  float movement = start + cos(frame) * animation_speed;

  for (float k = 1.0; k < 11.0; k += 1.0) {
    position.x += sin(movement * 2.0 + k * position.y) * strength + frame * 0.1;
    position.y += cos(movement + k * position.x + 0.1 * position.y) * strength - 0.05;
  }

  return position;
}

float fadeY (vec2 screen_coords, float factor) {
  float inv = screen_coords.y;

  if (inv > factor) { 
    return 1.0;
  }

  return smoothstep(0.0, 1.0, inv / factor);
}

void main() {
  vec2 st = gl_FragCoord.xy / resolution.xy;
  vec2 t = tornado(st + 0.9, time);

  vec3 rgb = vec3(clamp(t.x * time / 2.0, 0.0, 0.5), 0.0, t.y);

  gl_FragColor = vec4(rgb * 0.5, 0.1) * st.y;
}
`

const el = useEl()
const { width, height } = useElementSize(el)
const clock = useRafClock()
const vueglsl = ref()

const onCanvasReady = (g: VueGLSLReadyEvent) => {
  vueglsl.value = g
  const { gl, getUniform, draw } = g
  const timeHandle = getUniform('time')

  gl.uniform1f(getUniform('width'), width.value)
  gl.uniform1f(getUniform('height'), height.value)

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

  draw(() => {
    gl.clearColor(0.0, 0.0, 0.0, 1)
    gl.uniform1f(timeHandle, clock.value / 10)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
  })
}

const updateResoulutin = () => {
  if (!vueglsl.value) return

  const { gl, getUniform } = vueglsl.value

  gl.uniform1f(getUniform('width'), width.value)
  gl.uniform1f(getUniform('height'), height.value)
}

watch([width, height], updateResoulutin)

useEventListener('resize', updateResoulutin)
</script>

<style lang="scss" scoped>
  .fluid-background {
    width: 100%;
    height: 100%;
  }
</style>