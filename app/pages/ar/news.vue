<script setup lang="ts">
import ar from '~/locales/ar'

useHead({
  htmlAttrs: { dir: 'rtl', lang: 'ar' },
  title: 'شوبزي - الأخبار',
})
</script>

<template>
  <NewsHero locale="ar" :t="ar" />
</template>
