<script setup lang="ts">
import en from '~/locales/en'

useHead({
  htmlAttrs: { dir: 'ltr', lang: 'en' },
  title: 'Shopze - Blog',
})
</script>

<template>
  <BlogHero locale="en" :t="en" />
</template>
