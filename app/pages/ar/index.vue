<script setup lang="ts">
import ar from '~/locales/ar'

useHead({
  htmlAttrs: { dir: 'rtl', lang: 'ar' },
  title: 'شوبزي - أنشئ متجرك الإلكتروني في دقائق',
})
</script>

<template>
  <HomeHero locale="ar" :t="ar" />
</template>
