<template>
  <div class="timeline-item">
    {{ item?.title }}
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  item: {
    type: Object as PropType<{ title: string }>
  },
})
</script>

<style lang="scss" scoped>
  .timeline-item {
    margin: 20px 0;
    background: var(--m-background--soft);
    padding: 0.5rem 1rem;
    border-radius: 2px;
    border-bottom: 1px solid var(--m-rgb);
  }
</style>