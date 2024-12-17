<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
import { useRgbBreathing } from './composables/use-rgb-breathing'

import HelloSection from './sections/hello.vue'
import StarBackground from './components/star-background.vue'
import SurfaceBg from './components/surface-bg.vue'
import ProjectsSection from './sections/projects.vue'

const FooterSection = defineAsyncComponent(() => import('./sections/footer.vue'))
const SkillsSectrion = defineAsyncComponent(() => import('./sections/skills.vue'))
// const ProjectsSection = defineAsyncComponent(() => import('./sections/projects.vue'))
// const TimelineSection = defineAsyncComponent(() => import('./sections/timeline.vue'))

const rgb = useRgbBreathing()

const rgbRaw = computed(() => {
  if (!rgb.value) { return '255, 255, 255' }

  return rgb.value.match(/rgb\((.*)\)/)![1]
})

const { isGreater } = useBreakpoints({
  mobile: 768,
  desktop: 1024,
})
</script>

<template>
  <div class="app">
    <div class="app__content">
      <HelloSection />
      <ProjectsSection class="mt-24" />
      <template v-if="isGreater('mobile')">
        <SurfaceBg>
          <SkillsSectrion class="mt-24" />
          <!-- <TimelineSection style="margin-top: -400px; margin-bottom: -200px;" /> -->
          <FooterSection class="section -mt-48" />
        </SurfaceBg>
      </template>
      <StarBackground class="star-background" />
    </div>
  </div>
</template>

<style>
*, a, button, input { font-family: 'Noto Sans', sans-serif; }
</style>

<style lang="scss" scoped>
  .section {
    scroll-snap-align: start;
  }

  .star-background {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 200vh;
    z-index: -9999;
  }

  .custom-thumb {
    background: var(--m-rgb);
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: linear-gradient(143deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
    }
  }
</style>

<style lang="scss">
@forward "./assets/base.scss";

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.app {
  --m-rgb: v-bind(rgb);
  --m-rgb--raw: v-bind(rgbRaw);
}

body {
  background: var(--m-background);
  margin: 0;
}

.vue-custom-scrollbar__inner {
  width: fit-content;
  height: fit-content;
}
</style>
