<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

defineProps<{
  locale: LocaleKey
  t: Translations
}>()
</script>

<template>
  <section :dir="t.dir" class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 py-20 flex flex-col gap-8">
      <!-- Card 1: All Templates Include -->
      <div
        class="px-6 sm:px-10 py-14 text-center"
        style="
          border: 2px solid #E2E8F0;
          border-radius: 34px;
          background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
        "
      >
        <h2 class="font-bold text-[#0F1B2D] leading-tight mb-12" style="font-size: clamp(1.6rem, 2.8vw, 2.2rem);">
          {{ t.templatesPage.allIncludes.heading }}
        </h2>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div
            v-for="(item, i) in t.templatesPage.allIncludes.items"
            :key="i"
            class="flex flex-col items-center"
          >
            <div
              class="flex items-center justify-center mb-4 rounded-2xl bg-white"
              style="width: 65px; height: 65px; box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.06);"
            >
              <img :src="item.icon" :alt="item.title" class="w-8 h-8 object-contain" />
            </div>
            <h3 class="font-bold text-[#0F1B2D] text-[14px] mb-1.5">{{ item.title }}</h3>
            <p class="text-[#6B7280] text-[12.5px] leading-relaxed max-w-[180px]">
              {{ item.desc }}
            </p>
          </div>
        </div>

        <button
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-[13.5px] hover:opacity-90 transition-opacity"
          style="background: #44BFAD;"
        >
          <span>{{ t.templatesPage.allIncludes.btn }}</span>
          <svg class="w-4 h-4" :class="locale === 'ar' ? 'rotate-0' : 'rotate-180'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
        </button>
      </div>

      <!-- Card 2: Ready to Choose CTA -->
      <div
        class="px-6 sm:px-10 py-14 text-center text-white"
        style="
          background: linear-gradient(135deg, #44BFAD 0%, #548CC9 100%);
          border-radius: 34px;
        "
      >
        <h2 class="font-bold leading-tight mb-4" style="font-size: clamp(1.6rem, 2.8vw, 2.2rem);">
          {{ t.templatesPage.readyCta.heading }}
        </h2>

        <p class="text-white/85 text-[14px] mb-8">
          {{ t.templatesPage.readyCta.subtitle }}
        </p>

        <button
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-[13.5px] hover:opacity-90 transition-opacity"
          style="background: #fff; color: #0F1B2D;"
        >
          <span>{{ t.templatesPage.readyCta.btn }}</span>
        </button>
      </div>
    </div>
  </section>
</template>
