<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()
</script>

<template>
  <section class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 pb-24">
      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.6vw, 2rem);">
          {{ t.pricingPage.faq.heading }}
        </h2>
      </div>

      <!-- FAQ Cards -->
      <div class="flex flex-col gap-5 mb-12">
        <div
          v-for="(item, i) in t.pricingPage.faq.items"
          :key="i"
          class="bg-white px-7 py-6 text-start"
          style="border-radius: 50px; box-shadow: 0px 4px 20px 0px #64646426;"
        >
          <h3 class="font-bold text-[#0F1B2D] text-[15px] mb-2">{{ item.q }}</h3>
          <p class="text-[#9CA3AF] text-[13px] leading-relaxed">{{ item.a }}</p>
        </div>
      </div>

      <!-- Bottom CTA Card -->
      <div
        class="text-center text-white px-6 py-14"
        style="
          background: linear-gradient(135deg, #44BFAD 0%, #548CC9 100%);
          border-radius: 24px;
        "
      >
        <h3 class="font-bold leading-tight" style="font-size: clamp(1.6rem, 3vw, 2.3rem);">
          {{ t.pricingPage.faq.ctaHeading }}
        </h3>
        <p class="text-white/85 text-[14px] mt-3 mb-6">
          {{ t.pricingPage.faq.ctaSubtitle }}
        </p>
        <button
          class="inline-flex items-center px-6 py-2.5 bg-white text-[#0F1B2D] font-semibold text-[13px] rounded-full hover:bg-white/90 transition-colors"
        >
          {{ t.pricingPage.faq.ctaBtn }}
        </button>
      </div>
    </div>
  </section>
</template>
