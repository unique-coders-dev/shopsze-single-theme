<script setup lang="ts">
import ar from '~/locales/ar'

useHead({
  htmlAttrs: { dir: 'rtl', lang: 'ar' },
  title: 'شوبزي - مركز المساعدة',
})
</script>

<template>
  <HelpHero locale="ar" :t="ar" />
</template>
