<script setup lang="ts">
import ar from '~/locales/ar'

useHead({
  htmlAttrs: { dir: 'rtl', lang: 'ar' },
  title: 'شوبزي - القوالب',
})
</script>

<template>
  <TemplatesHero locale="ar" :t="ar" />
</template>
