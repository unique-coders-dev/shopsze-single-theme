<script setup lang="ts">
import ar from '~/locales/ar'

useHead({
  htmlAttrs: { dir: 'rtl', lang: 'ar' },
  title: 'شوبزي - التكاملات',
})
</script>

<template>
  <IntegrationsHero locale="ar" :t="ar" />
</template>
