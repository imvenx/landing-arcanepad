<template>
  <div id="developCont">
    <div class="text-h4" style="padding: 5px 0; font-weight: 1000;">
      Develop
    </div>
    <p class="text-h6 text-justify gradientCont" style="text-align: left;">Create incredible apps and games that use
      smartphones as
      controllers! Support for Godot, Unity and Web.
    </p>
    <a href="https://imvenx.github.io/arcanedocs/" target="_blank" class="text-center" id="startDevelopingText">Start
      Developing!</a>
  </div>
  <!-- <div style="border: 1px solid red; vertical-align: middle;">
      <q-img style="margin: auto; box-shadow: 0 0 10px white; border-radius: 10px;" src="/images/phone-hologram-1.png" />
    </div> -->
</template>

<style scoped>
#developCont {
  /* padding: 5%; */
  text-align: center;
  margin: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 5%;
}

#startDevelopingText {
  font-size: 1.3rem;
  border: 1px solid cyan;
  padding: .5rem;
  border-radius: 5px;
  transition: .3s all;
}

#startDevelopingText:hover {
  background-color: rgba(0, 255, 255, 0.1);
}
</style>
