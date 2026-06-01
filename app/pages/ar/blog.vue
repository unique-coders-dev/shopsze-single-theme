<script setup lang="ts">
import ar from '~/locales/ar'

useHead({
  htmlAttrs: { dir: 'rtl', lang: 'ar' },
  title: 'شوبزي - المدونة',
})
</script>

<template>
  <BlogHero locale="ar" :t="ar" />
</template>
