<script setup lang="ts">
import en from '~/locales/en'

useHead({
  htmlAttrs: { dir: 'ltr', lang: 'en' },
  title: 'Shopze - Help Center',
})
</script>

<template>
  <HelpHero locale="en" :t="en" />
</template>
