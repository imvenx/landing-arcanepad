<template>
  <svg id="bgSvg">
    <line x1="-300" y1="0" x2="5555" y2="9999" stroke="purple" stroke-width="30px" stroke-dasharray="100 50 10 30 50" />
    <line x1="0" y1="0" x2="5555" y2="9999" stroke="green" stroke-width="80px" stroke-dasharray="100 50 10 30 50" />
    <line x1="400" y1="0" x2="5555" y2="9999" stroke="darkcyan" stroke-width="100px" stroke-dasharray="100 50 10 30 50" />
    <line x1="800" y1="0" x2="5555" y2="9999" stroke="gray" stroke-width="120px" stroke-dasharray="100 50 10 30 50" />
    <line x1="1220" y1="0" x2="5555" y2="9999" stroke="darkgray" stroke-width="200px"
      stroke-dasharray="100 50 10 30 50" />
  </svg>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
  const lines = Array.from(document.getElementsByTagName('line')) as SVGLineElement[];

  lines.forEach(line => {
    line.animate([
      { strokeDashoffset: '55' },
      { strokeDashoffset: '-550000' }
    ], {
      duration: Math.random() * 150000000,
      iterations: Infinity,
      easing: 'linear',
      fill: 'forwards'
    });
  });

  window.addEventListener('scroll', () => {
    const parallaxSpeedFactor = .3; // Adjust this to change the speed of the parallax
    // const svg = document.getElementById('parallaxSvg');
    // const offset = window.pageYOffset * parallaxSpeedFactor;
    // svg.style.transform = 'translateY(' + offset + 'px)';
  });
})

</script>

<style scoped>
#bgSvg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* filter: blur(15px); */
  height: 100vh;
  margin: auto;
  width: 100%;
}
</style>
