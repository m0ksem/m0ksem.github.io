<template>
  <div class="timeline">
    <Timeline />
    <!-- <TenBackground /> -->
  </div>
</template>

<script setup lang="ts">
import Timeline from 'project/components/timeline/index.vue'
</script>

<style lang="scss" scoped>
  .timeline {
    height: 100vh;
    position: relative;
    padding: 200px 0;
  }
</style>