<script setup lang="ts">
import ar from '~/locales/ar'

useHead({
  htmlAttrs: { dir: 'rtl', lang: 'ar' },
  title: 'شوبزي - الأسعار',
})
</script>

<template>
  <PricingHero locale="ar" :t="ar" />
</template>
