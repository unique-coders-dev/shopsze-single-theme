<script setup lang="ts">
import en from '~/locales/en'

useHead({
  htmlAttrs: { dir: 'ltr', lang: 'en' },
  title: 'Shopze - Features',
})
</script>

<template>
  <FeaturesHero locale="en" :t="en" />
</template>
