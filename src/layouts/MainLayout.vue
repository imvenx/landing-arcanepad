<template>
  <div id="mainNav" class="fadeInAndEaseIn">
    <div style="font-weight: 1000; font-size: 1.2rem; color: white;">
      Arcanepad
    </div>
    <div class="row q-gutter-sm" style="margin-left: auto;">
      <q-btn icon="fab fa-discord" flat round color="blue" outline class="col" @click="openUrlInNewTab(discordUrl)" />
      <q-btn icon="fab fa-twitter" flat round color="cyan" outline class="col" @click="openUrlInNewTab(twitterUrl)" />
      <q-btn icon="fab fa-youtube" flat round color="red-5" outline class="col" @click="openUrlInNewTab(youtubeUrl)" />
      <q-btn icon="fab fa-instagram" flat round color="purple" outline class="col"
        @click="openUrlInNewTab(instagramUrl)" />
      <q-btn icon="fab fa-reddit" flat round color="orange" outline class="col" @click="openUrlInNewTab(redditUrl)" />
      <q-btn icon="fab fa-mastodon" flat round color="indigo-7" outline class="col"
        @click="openUrlInNewTab(mastodonUrl)" />
      <q-btn icon="fab fa-tiktok" flat round color="deep-purple-9" outline class="col"
        @click="openUrlInNewTab(tiktokUrl)" />
    </div>
  </div>
  <!-- <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background: linear-gradient(120deg, rgb(0, 20, 20, .9), rgb(20, 0, 20, .9)); ">
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>

      </q-toolbar>
    </q-header> -->

  <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer> -->

  <!-- <q-page-container> -->
  <div style="padding-top: 3rem;" class="fadeInAndEaseIn">
    <router-view />
  </div>

  <q-btn class="hideOnPortrait fadeInAndEaseIn" :icon="'arrow_downward'" @click="scrollBottom()" size="lg"
    :style="`display: ${scrollPosition > 50 ? 'none' : 'block'}`"
    style="margin: auto; width: 100%; position: fixed; bottom: 0; color:cyan"> Video</q-btn>


  <!-- </q-page-container>
  </q-layout> -->
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import ArcanepadText from 'components/ArcanepadText.vue';
import ScrollButton from 'src/components/ScrollButton.vue';

const leftDrawerOpen = ref(false)

const discordUrl = 'https://discord.com/invite/6Pr9JBCGXy'
const tiktokUrl = 'https://www.tiktok.com/@arcanepad'
const instagramUrl = 'https://www.instagram.com/arcanepad/'
const redditUrl = 'https://www.reddit.com/r/Arcane_pad/'
const mastodonUrl = 'https://mastodon.social/@Arcanepad'
const twitterUrl = 'https://twitter.com/arcanepad'
const youtubeUrl = 'https://www.youtube.com/@Arcanepad'

function openUrlInNewTab(url: string) {
  window.open(url)
}

const scrollPosition = ref(0);

const updateScroll = () => {
  const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrollPosition.value = (scrolled / height) * 100;
};

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll);
});

const scrollBottom = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
@media (min-width: 500px) {
  .q-btn {
    font-size: 0.75rem;
    /* Smaller font size */
    min-width: 40px;
    /* Smaller button width */
    padding: 4px 8px;
    /* Reduce padding */
  }
}

#mainNav {
  padding: 1em;
  background: linear-gradient(300deg, rgba(59, 0, 48, 0.6), rgba(0, 0, 0, .2), rgba(0, 79, 79, 0.6));
  box-shadow: 0 1px 10px black;
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 99;
}
</style>
