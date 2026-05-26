<script setup lang="ts">
import en from '~/locales/en'

useHead({
  htmlAttrs: { dir: 'ltr', lang: 'en' },
  title: 'ShopsZe - Create Your Online Store in Minutes',
})
</script>

<template>
  <HomeHero locale="en" :t="en" />
</template>
