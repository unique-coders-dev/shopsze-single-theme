<script setup lang="ts">
import en from '~/locales/en'

useHead({
  htmlAttrs: { dir: 'ltr', lang: 'en' },
  title: 'Shopze - Login',
})
</script>

<template>
  <LoginHero locale="en" :t="en" />
</template>
