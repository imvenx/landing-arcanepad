<template>
  <q-page class="row justify-evenly" style="background-color: rgba(0, 0, 0, 0.7);">
    <div id="mainCont">
      <br style="margin: 2px;">
      <div class="gradient-container">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <div class="text-h5" style="font-family: 'Courier New', Courier, monospace; font-weight: 1000;">
        A new way of playing
      </div>
      <hr style="width: 100%; margin-bottom: -20px" />
      <div>
        <div class="text-h4">Download</div>
        <span style="color: orange; font-weight: 800;">
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
            <q-btn style="color: cyan;" outline @click="downloadWindows">Windows</q-btn>

            <a href="https://github.com/imvenx/arcanepad-releases/releases/latest" target="_blank"
              style="font-weight: initial; text">
              <q-btn style="color: cyan;" outline @click="downloadLinux">
                Linux
              </q-btn>
            </a>
          </div>
        </div>
      </div>
      <br>
    </div>

    <youtube-embed video-id="OpaYoftORnE" />
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import YoutubeEmbed from 'src/components/YoutubeEmbed.vue';
import { ref } from 'vue';

const windowsDownloadUrl = ref('');
const linuxDownloadUrl = ref('');

const $q = useQuasar()

function fetchDesktopReleaseAssets() {
  return new Promise((resolve, reject) => {
    fetch('https://api.github.com/repos/imvenx/arcanepad-releases/releases/latest')
      .then(response => response.json())
      .then(data => {
        const assets = data.assets;

        const exeAsset = assets.find((asset: any) => asset.name.endsWith('.exe') && !asset.name.includes('.blockmap'));
        if (exeAsset) {
          windowsDownloadUrl.value = exeAsset.browser_download_url;
        }

        const appImageAsset = assets.find((asset: any) => asset.name.endsWith('.AppImage'));
        if (appImageAsset) {
          linuxDownloadUrl.value = appImageAsset.browser_download_url;
        }
        resolve('');
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
  });
}


function downloadFile(url: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = '';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function downloadWindows() {
  if (!windowsDownloadUrl.value) {
    fetchDesktopReleaseAssets().then(() => {
      if (windowsDownloadUrl.value) {
        downloadFile(windowsDownloadUrl.value);
      }
    });
  } else {
    downloadFile(windowsDownloadUrl.value);
  }
}

function downloadLinux() {
  // if (!linuxDownloadUrl.value) {
  //   fetchDesktopReleaseAssets().then(() => {
  //     if (linuxDownloadUrl.value) {
  //       downloadFile(linuxDownloadUrl.value);
  //     }
  //   });
  // } else {
  // downloadFile(linuxDownloadUrl.value);

  // }

  // if (!linuxDownloadUrl.value) {
  //   $q.notify({
  //     type: 'negative',
  //     message: 'Download Error, <a href="https://discord.com/invite/6Pr9JBCGXy" target="_blank">contact us</a>, or try again later,' +
  //       'You can try to download directly <a href="https://github.com/imvenx/arcanepad-releases/releases" target="_blank"> here </a>'
  //     , html: true
  //   })

  // }
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
  max-width: 100%;
}

#mainCont {
  display: grid;
  gap: 30px;
  width: 75%;
  max-width: 400px;
  text-align: center;
  height: 94vh;
}
</style>
