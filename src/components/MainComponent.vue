<template>
  <div id="mainCont">
    <div style="display: grid; gap: 1rem">
      <div class="logoCont">
        <q-img id="logoImg" src="/images/logo.png" alt="Logo" />
      </div>

      <div style="display: grid;">
        <div class="text-h2 gradientCont" style="font-weight: 800; ">Arcanepad</div>
        <div class="text-h5" style="font-family: 'Courier New', Courier, monospace; font-weight: 1000;">
          A new way of playing
        </div>
        <div class="text-h5 gradientCont" style="font-weight: 1000; max-width: 300px; margin: auto;">
          Use your phone to interact with the digital world
        </div>
      </div>
    </div>
    <div id="downloadCont">
      <div>
        <div class="text-h4" style="margin-top: .5em; font-weight: 1000;">Download & Play</div>
        <!-- <span style="color: rgb(255, 93, 123); font-weight: 800;">
          Early Access Alpha Test
        </span> -->
      </div>
      <div style="display: grid; grid-template-columns:60% 40%; gap:2%; width: 100%;" class="gradientCont">
        <div class="card">
          <div class="text-h6">Desktop</div>
          <q-icon style="margin: auto;" name="laptop" size="xl" color="white" />
          <div style=" display: flex; gap: 5px;">
            <q-btn style="color: cyan;" outline @click="tryDownload(windowsDownloadUrl, '.exe')">Windows</q-btn>
            <q-btn style="color: cyan;" outline @click="tryDownload(linuxDownloadUrl, '.appimage')">Linux</q-btn>
          </div>
        </div>
        <div class="card">
          <div class="text-h6">Mobile</div>
          <q-icon style="margin: auto;" name="smartphone" size="xl" color="white" />
          <q-btn style="color: cyan;" outline @click="tryDownload(androidDownloadUrl, '.apk')">Android</q-btn>
        </div>
      </div>
      <hr style="border: 1px solid gray; width: 100%;">
      <develop-component />
    </div>
    <br>
  </div>
</template>

<script lang="ts" setup>
import DevelopComponent from './DevelopComponent.vue';


const baseUrl = 'https://api.github.com/repos/imvenx/'
const windowsDownloadUrl = baseUrl + 'arcanepad-releases/releases/latest'
const linuxDownloadUrl = baseUrl + 'arcanepad-releases-linux/releases/latest'
const androidDownloadUrl = baseUrl + 'arcanepad-releases-android/releases/latest'

function fetchDesktopReleaseAssets(url: string, fileExtension: string) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const assets = data.assets;

        const exeAsset = assets.find((asset: any) => (asset.name as string).toLowerCase().endsWith(fileExtension.toLocaleLowerCase()));
        if (exeAsset) {
          triggerDownload(exeAsset.browser_download_url)
        }

        resolve('');
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}

function triggerDownload(url: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = '';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function tryDownload(downloadUrl: string, fileExtension: string) {
  fetchDesktopReleaseAssets(downloadUrl, fileExtension).then(() => {
  });
}
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

.logoCont {
  background: linear-gradient(120deg, cyan, fuchsia);
  padding: .3em;
  border-radius: 1000px;
  box-shadow: 0px 0px 30px cyan;
  width: 100%;
  margin: auto;
  max-width: 400px;
  width: 60vw;
}

#downloadCont {
  display: grid;
  gap: 2em;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 500px;
  margin: auto;
}

#logoImg {
  display: block;
  border-radius: 1000px;
}

#mainCont {
  justify-content: center;
  display: grid;
  text-align: center;
  padding: 2rem;
  max-width: 1400px;
  margin: auto;
  min-height: 100svh;
  align-items: center;
}

@media screen and (min-aspect-ratio: 1/1) {
  #mainCont {
    grid-template-columns: 50% 50%;
  }
}
</style>
