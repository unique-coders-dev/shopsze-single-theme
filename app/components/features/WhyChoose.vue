<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()
</script>

<template>
  <section class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 py-20 flex flex-col gap-8">
      <!-- Card 1: Why Choose Shopze -->
      <div
        class="px-6 sm:px-10 py-14 text-center text-white"
        style="
          background: linear-gradient(135deg, #44BFAD 0%, #548CC9 100%);
          border-radius: 24px;
        "
      >
        <h2 class="font-bold leading-tight mb-12" style="font-size: clamp(1.6rem, 2.8vw, 2.2rem);">
          {{ t.featuresPage.whyChoose.heading }}
        </h2>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(item, i) in t.featuresPage.whyChoose.items"
            :key="i"
            class="flex flex-col items-center"
          >
            <img :src="item.emoji" :alt="item.title" class="w-10 h-10 mb-4 object-contain" />
            <h3 class="font-bold text-[15px] mb-2">{{ item.title }}</h3>
            <p class="text-white/85 text-[12.5px] leading-relaxed max-w-[200px]">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2: Ready CTA -->
      <div
        class="bg-white px-6 sm:px-10 py-14 text-center"
        style="
          border: 2px solid #E2E8F0;
          border-radius: 24px;
        "
      >
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style="background: #F3F4F6; color: #6B7280;"
        >
          <span class="w-1.5 h-1.5 rounded-full" style="background: #6B7280;"></span>
          <span class="text-[12.5px]">{{ t.featuresPage.readyCta.badge }}</span>
        </div>

        <h2 class="font-bold text-[#0F1B2D] leading-[1.25] mb-4" style="font-size: clamp(1.6rem, 3vw, 2.3rem);">
          {{ t.featuresPage.readyCta.heading }}
        </h2>

        <p class="text-[#6B7280] text-[14px] mb-8">
          {{ t.featuresPage.readyCta.subtitle }}
        </p>

        <button
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-[13.5px] hover:opacity-90 transition-opacity"
          style="background: #44BFAD;"
        >
          <span>{{ t.featuresPage.readyCta.btn }}</span>
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
