<template>
  <div class="projects-list container">
    <a
      class="project-wrapper"
      v-for="project in projects"
      :key="project.name"
      :href="project.link.url"
      :title="project.link.text"
      target="_blank"
    >
      <div class="project">
        <div class="project__image">
          <img :src="project.image" />
        </div>
        <div class="project__text">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <div class="project__link-text">
            <span>{{ project.link.text }}</span>
          </div>
        </div>
      </div>
    </a>
    <div class="project-wrapper">
      <div class="project">
        <LibList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from './projects'
import LibList from '@/components/projects/lib-list.vue'
</script>

<style lang="scss" scoped>
.projects-list {
  display: flex;
  flex-wrap: wrap;
  & > * {
    width: 50%;
  }
}

.project {
  position: relative;
  height: 300px;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 70%;
    height: 70%;
    filter: blur(100px);
    background: var(--m-rgb);
    z-index: -1;
    opacity: 0.3;
    transform: translate(-50%, -50%);
  }

  background: linear-gradient(
    143deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5)
  );

  backdrop-filter: blur(10px);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--m-background--soft);
    z-index: -1;
    opacity: 0.8;
  }

  &-wrapper {
    padding: 24px 16px;
  }

  &__image {
    position: relative;
    height: 300px;
    overflow: hidden;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      z-index: 1;
      background: var(--m-rgb);
      transition: all 0.1s ease-in-out;
      opacity: 0.05;
    }

    & > img {
      position: absolute;
      max-width: 150%;
      min-width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: transform 0.3s ease-in-out;
      filter: brightness(0.5);
    }
  }

  &__text {
    padding: 8px 16px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 50%;
    transform: translate(-50%, 13%);
    background-color: var(--m-background--soft);
    color: var(--m-color);
    z-index: 2;
    border-bottom: 3px solid var(--m-rgb);

    & > h3 {
      margin: 0;
      font-size: 1.25em;
      font-weight: bold;
    }
    & > p {
      margin: 0;
      font-size: 0.8em;
    }
  }

  &__link-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    font-size: 1em;
    font-weight: bold;
    color: var(--m-rgb);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    padding: 8px 16px;
    background: var(--m-background--soft);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    .project {
      &__image {
        &::before {
          opacity: 0;
        }

        & > img {
          transform: translate(-50%, -50%) scale(1.05);
        }
      }

      &__link-text {
        opacity: 1;
      }
    }
  }
}
</style>
