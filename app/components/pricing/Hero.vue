<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

defineProps<{
  locale: LocaleKey
  t: Translations
}>()
</script>

<template>
  <div :dir="t.dir" class="overflow-x-hidden bg-white">
    <!-- Light Navbar -->
    <LayoutNavbarLight :locale="locale" :t="t" />

    <!-- Breadcrumb -->
    <div class="max-w-[1280px] mx-auto px-6 pt-6">
      <div class="flex items-center gap-2 text-[13px] text-start">
        <NuxtLink :to="`/${locale}`" class="text-[#6B7280] hover:text-[#0F1B2D] transition-colors">
          {{ t.pricingPage.breadcrumbHome }}
        </NuxtLink>
        <span class="text-[#9CA3AF]">/</span>
        <span style="color: #0B9E89;">{{ t.pricingPage.breadcrumbCurrent }}</span>
      </div>
    </div>

    <!-- Hero Heading -->
    <section class="w-full">
      <div class="max-w-[920px] mx-auto px-6 pt-12 pb-12 text-center">
        <h1 class="font-bold text-[#0F1B2D] leading-[1.25]" style="font-size: clamp(1.8rem, 3.4vw, 2.6rem);">
          {{ t.pricingPage.heading1 }}
          <span style="color: #0B9E89;"> {{ t.pricingPage.headingHighlight }}</span>
        </h1>
        <p class="mt-5 text-[#6B7280] text-[14.5px] leading-relaxed max-w-[640px] mx-auto">
          {{ t.pricingPage.subtitle }}
        </p>
      </div>
    </section>

    <!-- Pricing Cards -->
    <PricingPlans :t="t" />

    <!-- Detailed Comparison Table -->
    <PricingCompare :t="t" />

    <!-- FAQ + Consultation CTA -->
    <PricingFaq :t="t" />

    <!-- Footer -->
    <HomeFooter :t="t" />
  </div>
</template>
