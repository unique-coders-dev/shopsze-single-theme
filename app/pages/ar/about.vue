<script setup lang="ts">
import ar from '~/locales/ar'

useHead({
  htmlAttrs: { dir: 'rtl', lang: 'ar' },
  title: 'شوبزي - عن شوبزي',
})
</script>

<template>
  <AboutHero locale="ar" :t="ar" />
</template>
