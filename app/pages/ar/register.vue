<script setup lang="ts">
import ar from '~/locales/ar'

useHead({
  htmlAttrs: { dir: 'rtl', lang: 'ar' },
  title: 'شوبزي - إنشاء حساب',
})
</script>

<template>
  <RegisterHero locale="ar" :t="ar" />
</template>
