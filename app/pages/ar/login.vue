<script setup lang="ts">
import ar from '~/locales/ar'

useHead({
  htmlAttrs: { dir: 'rtl', lang: 'ar' },
  title: 'شوبزي - تسجيل الدخول',
})
</script>

<template>
  <LoginHero locale="ar" :t="ar" />
</template>
