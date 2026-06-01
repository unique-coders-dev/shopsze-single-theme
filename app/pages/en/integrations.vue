<script setup lang="ts">
import en from '~/locales/en'

useHead({
  htmlAttrs: { dir: 'ltr', lang: 'en' },
  title: 'Shopze - Integrations',
})
</script>

<template>
  <IntegrationsHero locale="en" :t="en" />
</template>
