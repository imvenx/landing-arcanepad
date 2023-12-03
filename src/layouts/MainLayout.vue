<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background: linear-gradient(120deg, rgb(0, 20, 20, .9), rgb(20, 0, 20, .9)); color: cyan;">
      <q-toolbar>
        <!-- <q-btn flat dense round outline icon="diamond" aria-label="Menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title>
          <ArcanepadText />
          <!-- Arcanepad -->
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <q-btn icon="face" round />
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

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
