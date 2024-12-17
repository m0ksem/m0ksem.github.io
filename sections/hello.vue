<template>
  <div class="hello-section">
    <div class="container max-w-8xl px-4 flex flex-col justify-center h-screen">
      <h1 class="md:text-9xl z-10 font-bold md:-ml-2 -ml-1 text-5xl">
        <MText>MAKSIM NEDOSHEV</MText>
      </h1>
      <p style="color: var(--m-rgb); filter: brightness(0.7)">
        {{ age }}y.o. Web Developer
      </p>
      <p style="color: var(--m-rgb); filter: brightness(0.5)">
        from Kyiv, Ukraine
      </p>
    </div>
    <div class="cross-line-background">
      <div class="cross-line-background__content">
        <a v-for="{ href, title } in links" :key="href" class="link" :href="href" target="_blank">{{ title }}</a>
      </div>
    </div>
    <div class="hello-section__scroll-icon">
      <ScrolldownIcon />
    </div>
  </div>
  <RandomText size="20" class="absolute right-[0] top-[0] text-white -z-10 opacity-10" style="color: var(--m-rgb)" />
</template>

<script setup lang="ts">
import MText from '../components/base/fluid-text.vue'
import RandomText from '../components/random-text.vue'
import { useClock } from '../composables/use-clock'
import { links } from '../data/links'
import ScrolldownIcon from '../components/icons/scrolldown.vue'

const clock = useClock()

const color = computed(() => {
  const r = 0.5 + Math.sin(clock.value + 0.7) * 0.3
  const g = 0.5
  const b = 0.5 + Math.cos(clock.value + 0.7) * 0.7

  return `rgb(${r * 255}, ${g * 255}, ${b * 255})`
})

const age = new Date().getFullYear() - 2000
</script>

<style lang="scss" scoped>
.hello-section {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: -40%;
    top: -25%;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right,
        var(--m-rgb) 25%,
        v-bind(color) 100%,
      );
    border-radius: 99% 1% 97% 3% / 0% 41% 59% 100%;
    filter: blur(100px);
    opacity: 0.2;
  }

  &__hand {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    height: 500px;
    width: 500px;
  }

  &__scroll-icon {
    position: absolute;
    left: 50%;
    bottom: 64px;
    transform: translateY(-50%) translateX(-50%);

    @media screen and (max-width: 768px) {
      display: none;     
    }

    .scrolldown-icon {
      color: var(--m-color);
      fill: currentColor;
      height: 36px;
    }
  }

  .star-background {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 100%;
    z-index: 0;
  }

  .fluid-background {
    position: absolute;
    width: 50%;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: visible;

    &__size-keeper {
      margin-top: 100%;
    }

    &__image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &::before {
      content: '';
      position: absolute;
      top: 10%;
      right: -25%;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg,
          red 0%,
          v-bind(color) 50%,
        );
      border-radius: 50%;
      filter: blur(200px);
      opacity: 0.3;
    }
  }

  .cross-line-background {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    overflow-x: hidden;

    @media screen and (max-width: 768px) {
      width: 100%;      
    }

    &__content {
      color: var(--m-color);
      filter: brightness(0.8);
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 27px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0px;
        height: 8px;
        width: 100%;
        background-image: linear-gradient(to right, var(--m-rgb), v-bind(color) 50%);
        border-radius: 5000px;
      }

      a {
        background: var(--m-background);
      }
    }
  }

  .container {
    position: relative;
  }
}
</style>
