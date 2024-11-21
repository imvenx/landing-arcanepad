<template>
    <div class="row" style="margin-left: auto;">
        <q-btn size="lg" icon="fab fa-discord" flat ccolor="blue" outline class="col"
            @click="openUrlInNewTab(discordUrl)" />
        <q-btn size="lg" icon="fab fa-twitter" flat ccolor="cyan" outline class="col"
            @click="openUrlInNewTab(twitterUrl)" />
        <q-btn size="lg" icon="fab fa-youtube" flat ccolor="red-5" outline class="col"
            @click="openUrlInNewTab(youtubeUrl)" />
        <q-btn size="lg" icon="fab fa-instagram" flat ccolor="purple" outline class="col"
            @click="openUrlInNewTab(instagramUrl)" />
        <q-btn size="lg" icon="fab fa-reddit" flat ccolor="orange" outline class="col"
            @click="openUrlInNewTab(redditUrl)" />
        <q-btn size="lg" icon="fab fa-mastodon" flat ccolor="indigo-7" outline class="col"
            @click="openUrlInNewTab(mastodonUrl)" />
        <q-btn size="lg" icon="fab fa-tiktok" flat ccolor="deep-purple-9" outline class="col"
            @click="openUrlInNewTab(tiktokUrl)" />
    </div>
</template>

<script lang="ts" setup>

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

</script>