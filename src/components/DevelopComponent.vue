<template>
  <div id="developCont">
    <div>
      <hr>
      <div class="text-h4">
        Develop
      </div>
      <hr>

      <p class="text-h6 text-justify text-hyphens">Arcanepad is a multi-screen app store. Also is an
        SDK (software development kit) with support for Godot, Unity and Web. Create incredible apps and games that use
        smartphones a controllers!
      </p>
      <a href="https://imvenx.github.io/arcanedocs/" target="_blank" class="text-center" id="startDevelopingText">Start
        Developing!</a>
    </div>
    <br>
    <br>
    <q-img style="box-shadow: 0 0 10px white; border-radius: 10px;" src="/images/phone-hologram-1.png" />
    <br>
    <br>
  </div>
</template>

<style scoped>
#developCont {
  text-align: center;
  margin: 0 10%;
  max-width: 400px;
  height: 90dvh;
}

#startDevelopingText {
  font-size: 1.3rem;
  border: 1px solid cyan;
  padding: .5rem;
  border-radius: 5px;
  transition: .5s all;
}

#startDevelopingText:hover {
  background-color: rgba(0, 255, 255, 0.4);
}
</style>
