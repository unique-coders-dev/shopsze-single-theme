<script setup lang="ts">
import en from '~/locales/en'

useHead({
  htmlAttrs: { dir: 'ltr', lang: 'en' },
  title: 'Shopze - News',
})
</script>

<template>
  <NewsHero locale="en" :t="en" />
</template>
