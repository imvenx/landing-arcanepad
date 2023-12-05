<template>
  <!-- <q-page class="row justify-evenly" style="background-color: rgba(0, 0, 0, 0.7);"> -->

  <div>
    <main-component />

    <!-- <develop-component /> -->

    <youtube-embed style="box-shadow: 0 0 150px white;" video-id="OpaYoftORnE" />
  </div>

  <!-- </q-page> -->
</template>

<script setup lang="ts">
import DevelopComponent from 'src/components/DevelopComponent.vue';
import MainComponent from 'src/components/MainComponent.vue';
import YoutubeEmbed from 'src/components/YoutubeEmbed.vue';


</script>

<style scoped></style>
