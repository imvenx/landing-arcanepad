<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background: linear-gradient(120deg, rgb(0, 20, 20, .9), rgb(20, 0, 20, .9)); ">
      <q-toolbar>
        <!-- <q-btn flat dense round outline icon="diamond" aria-label="Menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title>
          <ArcanepadText />
          <!-- Arcanepad -->
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <div class="row q-gutter-sm">
          <q-btn icon="fab fa-discord" round flat color="blue" outline class="col" @click="openUrlInNewTab(discordUrl)" />
          <q-btn icon="fab fa-twitter" round flat color="cyan" outline class="col" @click="openUrlInNewTab(twitterUrl)" />
          <q-btn icon="fab fa-youtube" round flat color="red-5" outline class="col"
            @click="openUrlInNewTab(youtubeUrl)" />
          <q-btn icon="fab fa-mastodon" round flat color="indigo-7" outline class="col"
            @click="openUrlInNewTab(mastodonUrl)" />
          <!-- <q-btn icon="fab fa-instagram" round flat color="pink-5" outline class="col"
            @click="openUrlInNewTab(instagramUrl)" /> -->
          <q-btn icon="fab fa-tiktok" round flat color="deep-purple-9" outline class="col"
            @click="openUrlInNewTab(tiktokUrl)" />
        </div>


        <!-- <q-btn flat dense round outline icon="" aria-label="Menu" @click="toggleLeftDrawer" /> -->
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ArcanepadText from 'components/ArcanepadText.vue';

const leftDrawerOpen = ref(false)

const discordUrl = 'https://discord.com/invite/6Pr9JBCGXy'
const tiktokUrl = 'https://www.tiktok.com/@arcanepad'
const instagramUrl = 'https://www.instagram.com/arcanepad/'
const mastodonUrl = 'https://mastodon.social/@Arcanepad'
const twitterUrl = 'https://twitter.com/arcanepad'
const youtubeUrl = 'https://www.youtube.com/@Arcanepad'

function openUrlInNewTab(url: string) {
  window.open(url)
}

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
</style>
