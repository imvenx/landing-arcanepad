<template>
  <q-page class="row justify-evenly" style="background-color: rgba(0, 0, 0, 0.7);">
    <div style="display: grid; gap: 30px; width: 75%; max-width: 400px;" class="text-center">
      <br style="margin: 2px;">
      <div class="gradient-container">
        <q-img src="/images/logo.png" alt="Logo" />
      </div>

      <div class="text-h5">
        A new way of playing
      </div>
      <hr style="width: 100%; margin-bottom: -20px" />
      <div>
        <div class="text-h4">Download</div>
        <span style="color: orange;">
          Early Access Alpha Test
        </span>
      </div>
      <div style="display: grid; grid-template-columns: 35% 60%; gap: 5%;">
        <div class="card">
          <div class="text-h6">Mobile</div>
          <q-icon style="margin: auto;" name="smartphone" size="xl" />
          <q-btn style="color: cyan;" outline>Android</q-btn>
        </div>
        <div class="card">
          <div class="text-h6">Desktop</div>
          <q-icon style="margin: auto;" name="laptop" size="xl" />
          <div style="display: flex; gap: 5px;">
            <q-btn style="color: cyan;" outline>Windows</q-btn>
            <q-btn style="color: cyan;" outline>Linux</q-btn>
          </div>
        </div>
      </div>
      <br>
    </div>

    <youtube-embed video-id="OpaYoftORnE" />
  </q-page>
</template>

<script setup lang="ts">
import YoutubeEmbed from 'src/components/YoutubeEmbed.vue';

</script>

<style scoped>
.card {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  display: grid;
  text-align: center;
  justify-content: center;
  gap: 5px;
}

.gradient-container {
  background: linear-gradient(120deg, cyan, fuchsia);
  display: inline-block;
  padding: 1em;
  border-radius: 1000px;
  box-shadow: 0px 0px 20px cyan;
}

.gradient-container img {
  display: block;
  border-radius: 1000px;
  width: 100%;
  height: auto;
}
</style>
