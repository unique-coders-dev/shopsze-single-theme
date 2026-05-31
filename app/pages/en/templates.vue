<script setup lang="ts">
import en from '~/locales/en'

useHead({
  htmlAttrs: { dir: 'ltr', lang: 'en' },
  title: 'Shopze - Templates',
})
</script>

<template>
  <TemplatesHero locale="en" :t="en" />
</template>
