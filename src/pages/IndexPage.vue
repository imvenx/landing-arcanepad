<template>
  <q-page class="row justify-evenly" style="background-color: rgba(0, 0, 0, 0.7);;">

    <main-component />

    <youtube-embed style="opacity: .9; box-shadow: 0 0 50px white; margin: 5vh 0" video-id="OpaYoftORnE" />

    <develop-component />

  </q-page>
</template>

<script setup lang="ts">
import DevelopComponent from 'src/components/DevelopComponent.vue';
import MainComponent from 'src/components/MainComponent.vue';
import YoutubeEmbed from 'src/components/YoutubeEmbed.vue';


</script>

<style scoped></style>
