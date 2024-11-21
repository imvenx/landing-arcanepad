<template>
  <div id="mainCont">
    <div id="contentCont">
      <div
        style="border: 0px solid darkcyan; position: relative; padding: 6%; display: grid; justify-content: center; align-items: center;">
        <div>
          <div class="text-h1 gradientCont" style="font-weight: 800; ">Arcanepad</div>
          <h4 style="font-weight: 400;">Download & Play!</h4>
          <h5>Develop</h5>
        </div>
      </div>
      <div
        style="border: 0px solid darkcyan; position: relative; padding: 6%; display: grid; justify-content: center; align-items: center;">
        <!-- <div style="border: 1px solid red; height: 100px; width: 100px;">

        </div> -->
        <video autoplay muted loop style="width: 100%; box-shadow: 0 0 50px cyan;">
          <source src="/videos/test.mov" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div style="border: 0px solid darkcyan; display: grid; justify-content: center;">
      <SocialLinks />
    </div>
  </div>
  <!-- <div id="main-cont">
    <div>
    
    </div>
    <div>
    
    </div>
    <div></div>
  </div>
  <div style="margin: auto; display: grid; height: 10vh;">
    <SocialLinks />
  </div> -->
</template>

<script setup lang="ts">
import MainComponent from 'src/components/MainComponent.vue';
import SocialLinks from 'src/components/SocialLinks.vue';
import YoutubeEmbed from 'src/components/YoutubeEmbed.vue';


</script>

<style scoped>
#mainCont {
  /* border: 1px solid red; */
  height: 100vh;
  display: grid;
  gap: 2%;
  grid-template-rows: 89% 9%;
  padding: 1%;
}

#contentCont {
  gap: 2%;
  display: grid;
  grid-template-columns: 49% 49%;
}

@media (orientation: portrait) {
  #contentCont {
    grid-template-columns: auto;

  }
}
</style>
