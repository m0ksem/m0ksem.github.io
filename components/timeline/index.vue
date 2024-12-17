<template>
  <div class="timeline">
    <div class="left">
      <TimelineItem v-for="item in leftItems" :key="item.title" :item="item" />
    </div>
    <div class="line" />
    <div class="right">
       <TimelineItem v-for="item in rightItems" :key="item.title" :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TimelineItem from './timeline-item.vue'

const items = [
  {
    title: 'CCTE NAU'
  }, 
  {
    title: 'NT',
  },
  {
    title: 'Nubip',
  },
  {
    title: 'Epicmax'
  }
]

const leftItems = items.filter((v, i) => i % 2 === 0)
const rightItems = items.filter((v, i) => i % 2 === 1)
</script>

<style lang="scss" scoped>
  .timeline {
    margin: auto;
    max-width: 400px;
    display: flex;
    justify-content: space-around;
    color: var(--m-color);
    width: 100%;

    // .line {
    //   top: 0;
    //   height: 100%;
    //   width: 4px;
    //   background: var(--m-rgb);
    //   border-radius: 999px;
    // }
  }
</style>