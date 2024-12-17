<template>
  <div class="horizon">
    <div class="horizon__svg-wrapper">
      <svg
        width="800"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
      >
        <defs>
          <radialGradient spreadMethod="pad" id="m-horizon-fill">
            <stop offset="0.85" stop-color="var(--m-background)" />
            <stop offset="1" :stop-color="color" />
          </radialGradient>
        </defs>
        <g>
          <ellipse
            style="vector-effect: non-scaling-stroke"
            transform="translate(39.7849, -2.15054) translate(1) translate(1) translate(5.37634) translate(562.532) translate(-5.47961, -163.703) translate(-20.5485, 27.3981) translate(660, 136) scale(1.21388, 1) translate(-660, -136) translate(138, 136) scale(1.26637, 1) translate(-138, -136) translate(138, 136) scale(1, 1.77909) translate(-138, -136) translate(660, 136) scale(2.50871, 4.55471) translate(-660, -136) translate(139, 136.5) scale(1, 0.450193) translate(-139, -136.5)"
            ry="100"
            rx="260"
            id="svg_1"
            cy="237"
            cx="400"
            fill="url(#m-horizon-fill)"
          />
        </g>
      </svg>      
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  color: {
    default: 'var(--m-rgb)',
  },
})
</script>

<style lang="scss" scoped>
.horizon {
  position: relative;
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  &::after {
    content: '';
    position: absolute;
    top: 200px;
    left: 0;
    height: 900px;
    width: 100%;
    z-index: -2;
    background: var(--m-background);
  }

  &::before {
    content: '';
    position: absolute;
    top: -200px;
    left: 0;
    height: 50vw;
    width: 100%;
    z-index: -3;
    background: linear-gradient(to bottom, var(--m-rgb), transparent 20%);
    opacity: 0.2;
    filter: blur(100px);
  }


  &__svg-wrapper {
    position: absolute;
    top: -100px;
    left: 0;
    height: 400px;
    width: 100%;
    overflow: hidden; 
    z-index: -1;
    opacity: 0.2;
  }
  svg {
    position: relative;
    width: 100%;
    transform: scale(2) translateY(25%);
  }
}
</style>
