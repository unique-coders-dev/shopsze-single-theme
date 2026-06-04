<script setup lang="ts">
import en from '~/locales/en'

useHead({
  htmlAttrs: { dir: 'ltr', lang: 'en' },
  title: 'Shopze - About Shopze',
})
</script>

<template>
  <AboutHero locale="en" :t="en" />
</template>
