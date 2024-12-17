<template>
  <div class="projects-section">
    <div class="projects-section__planet" />
    <MHeading class="text-8xl -mb-16 text-center font-bold" text="Portfolio"></MHeading>
    <ProjectsList class="container max-w-6xl project-list" />
    <Horizon/>
    <ClientOnly>
      <ContributionsCity>View Github Profile</ContributionsCity>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import ProjectsList from '../components/projects/projects-list.vue'
import ContributionsCity from '../components/contributions-city/contributions-city.client.vue'
import MHeading from '../components/base/m-heading.vue'
import Horizon from '../components/horizon.vue'
</script>

<style lang="scss" scoped>
.m-heading {
  font-size: 128px;
  font-weight: 900;
  transform: translateY(40%);
}

.project-list {
  position: relative;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    top: 24px;
    height: 70%;
    width: 42px;
    z-index: -1;
    right: -74px;
    background: linear-gradient(to bottom, var(--m-rgb), transparent);
    opacity: 0.3;
  }
  &::before {
    content: '';
    position: absolute;
    top: 24px;
    height: 70%;
    width: 42px;
    z-index: -2;
    right: -74px;
    background: var(--m-background);
  }
}
.projects-section {
  position: relative;
  &__planet {
    position: absolute;
    height: 300px;
    width: 300px;
    left: 0;
    top: 100px;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      top: -25%;
      left: -25%;
      height: 150%;
      width: 150%;
      background: radial-gradient(circle, transparent, var(--m-background) 40%, rgba(var(--m-rgb--raw), 0.1) 50%, transparent 70%);
      border-radius: 50%;
      z-index: -1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(to bottom, var(--m-rgb) 50%, rgba(var(--m-rgb--raw), 0.2));
      border-radius: 50%;
      opacity: 0.5;
      z-index: 0;
    }
  }
}
</style>