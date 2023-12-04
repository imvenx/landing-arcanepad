<template>
  <div id="mainCont">
    <br>
    <div class="gradient-container">
      <q-img id="logoImg" src="/images/logo.png" alt="Logo" />
    </div>

    <div class="text-h5" style="font-family: 'Courier New', Courier, monospace; font-weight: 1000;">
      A new way of playing
    </div>
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
        <q-btn style="color: cyan;" outline @click="tryDownload(androidDownloadUrl, '.apk')">Android</q-btn>
      </div>
      <div class="card">
        <div class="text-h6">Desktop</div>
        <q-icon style="margin: auto;" name="laptop" size="xl" />
        <div style="display: flex; gap: 5px;">
          <q-btn style="color: cyan;" outline @click="tryDownload(windowsDownloadUrl, '.exe')">Windows</q-btn>
          <q-btn style="color: cyan;" outline @click="tryDownload(linuxDownloadUrl, '.appimage')">Linux</q-btn>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script lang="ts" setup>

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

.gradient-container {
  background: linear-gradient(120deg, cyan, fuchsia);
  padding: .3em;
  border-radius: 1000px;
  box-shadow: 0px 0px 20px cyan;
  width: 100%;
  margin: auto;
}

#logoImg {
  display: block;
  border-radius: 1000px;
}

#mainCont {
  justify-content: center;
  display: grid;
  gap: 30px;
  text-align: center;
  margin: auto;
  height: 90svh;
}
</style>
