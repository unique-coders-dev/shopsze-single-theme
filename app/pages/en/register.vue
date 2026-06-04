<script setup lang="ts">
import en from '~/locales/en'

useHead({
  htmlAttrs: { dir: 'ltr', lang: 'en' },
  title: 'Shopze - Create Account',
})
</script>

<template>
  <RegisterHero locale="en" :t="en" />
</template>
