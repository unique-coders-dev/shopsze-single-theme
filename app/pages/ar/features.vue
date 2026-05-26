<script setup lang="ts">
import ar from '~/locales/ar'

useHead({
  htmlAttrs: { dir: 'rtl', lang: 'ar' },
  title: 'شوبزي - المميزات',
})
</script>

<template>
  <FeaturesHero locale="ar" :t="ar" />
</template>
