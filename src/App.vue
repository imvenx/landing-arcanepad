<template>
  <!-- <svg id="bgSvg">
    <line x1="-300" y1="0" x2="5555" y2="9999" stroke="purple" stroke-width="30px" stroke-dasharray="100 50 10 30 50" />
    <line x1="0" y1="0" x2="5555" y2="9999" stroke="green" stroke-width="80px" stroke-dasharray="100 50 10 30 50" />
    <line x1="400" y1="0" x2="5555" y2="9999" stroke="darkcyan" stroke-width="100px" stroke-dasharray="100 50 10 30 50" />
    <line x1="800" y1="0" x2="5555" y2="9999" stroke="gray" stroke-width="120px" stroke-dasharray="100 50 10 30 50" />
    <line x1="1220" y1="0" x2="5555" y2="9999" stroke="darkgray" stroke-width="200px"
      stroke-dasharray="100 50 10 30 50" />
  </svg> -->
  <router-view />
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted } from 'vue';
import { aConfig } from './config';

// onMounted(() => {
//   const lines = Array.from(document.getElementsByTagName('line')) as SVGLineElement[];

//   lines.forEach(line => {
//     line.animate([
//       { strokeDashoffset: '55' },
//       { strokeDashoffset: '-5000' }
//     ], {
//       duration: 150000 + Math.random() * 100000,
//       iterations: Infinity,
//       easing: 'linear',
//       fill: 'forwards'
//     });
//   });
// })


const registerVisit = async () => {
  try {
    const referer = document.referrer
    const deviceType = navigator.userAgent 

    const response = await axios.post(`${aConfig.arcaneApiBaseUrl}/landing/register-visit`, {
      referer,
      deviceType,
    })

    console.log('Visit registered:', response.data)
  } catch (error) {
    console.error('Error registering visit:', error)
  }
};

onMounted(async () => {
  await registerVisit();
});
</script>

<style scoped>
/* #bgSvg {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100lvh;
  margin: auto;
  width: 100%;
} */
</style>
