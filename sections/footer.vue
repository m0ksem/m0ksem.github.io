<template>
  <CarCity>
    <div class="footer">
      <div class="footer__content">
        <div v-for="{ href, title } in links" :key="href" class="footer__card">
          <a :href="href" target="_blank">{{ title }}</a>
        </div>
      </div>
    </div>
  </CarCity>
</template>

<script setup lang="ts">
import CarCity from '../components/car-city/index.vue'
import { links } from '../data/links'
</script>

<style lang="scss" scoped>
  .footer {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    color: var(--m-color);
    padding: 32px;

    &__content {
      display: flex;
      width: 100%;
      max-width: 1024px;
      justify-content: flex-end;
    }

    &__card {
      padding: 16px;
      position: relative;
      margin: 16px;

      a {
        &, &:visited {
          text-decoration: none;
          color: var(--m-color);
        }
        &:hover {
          color: var(--m-rgb);
        }
      }
    }
  }
</style>
