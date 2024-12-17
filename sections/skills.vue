<template>
  <div class="skills-section my-40">
    <MHeading class="text-center" text="SKILLS"></MHeading>
    <Skills />
  </div>
</template>

<script setup lang="ts">
import Skills from '@/components/skils'
import MHeading from '../components/base/m-heading.vue'
</script>

<style lang="scss" scoped>
.m-heading {
  font-size: 64px;
  font-weight: 900;
  transform: translateY(60%);
}
</style>