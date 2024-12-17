<template>
  <div class="surface-bg">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .surface-bg {
    background: var(--m-background);
    position: relative;
  }
</style>