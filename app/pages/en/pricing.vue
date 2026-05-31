<script setup lang="ts">
import en from '~/locales/en'

useHead({
  htmlAttrs: { dir: 'ltr', lang: 'en' },
  title: 'Shopze - Pricing',
})
</script>

<template>
  <PricingHero locale="en" :t="en" />
</template>
