<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()
</script>

<template>
  <section class="w-full" style="background: #F3F4F6;">
    <div class="max-w-[1180px] mx-auto px-6 py-20">
      <div
        class="bg-white rounded-[24px] px-6 py-14 sm:px-10 sm:py-16 text-center"
        style="box-shadow: 0 2px 12px rgba(15, 27, 45, 0.03);"
      >
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style="background: #F3F4F6; color: #6B7280;"
        >
          <span class="w-1.5 h-1.5 rounded-full" style="background: #44BFAD;"></span>
          <span class="text-[12.5px]">{{ t.ctaSection.badge }}</span>
        </div>

        <!-- Heading -->
        <h2 class="font-bold text-[#0F1B2D] leading-[1.25] mb-5" style="font-size: clamp(1.8rem, 3.4vw, 2.5rem);">
          <span class="block">{{ t.ctaSection.heading1 }}</span>
          <span class="block">
            {{ t.ctaSection.heading2 }}
            <span style="color: #548CC9;">{{ t.ctaSection.headingBrand }}</span>
          </span>
        </h2>

        <!-- Subtitle -->
        <p class="text-[#6B7280] text-[14px] max-w-[620px] mx-auto leading-relaxed mb-8">
          {{ t.ctaSection.subtitle }}
        </p>

        <!-- Buttons -->
        <div class="flex items-center justify-center gap-3 flex-wrap mb-10">
          <button
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-[13px] hover:opacity-90 transition-opacity"
            style="background: #44BFAD;"
          >
            <span>{{ t.ctaSection.primaryBtn }}</span>
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
          </button>
          <button
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-[13px] hover:opacity-90 transition-opacity"
            style="background: #548CC9;"
          >
            <span>{{ t.ctaSection.secondaryBtn }}</span>
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
            </svg>
          </button>
        </div>

        <!-- Perks Row -->
        <div class="flex items-center justify-center gap-x-10 gap-y-3 flex-wrap">
          <div
            v-for="(perk, i) in t.ctaSection.perks"
            :key="i"
            class="inline-flex items-center gap-2 text-[#6B7280] text-[13px]"
          >
            <span class="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style="background: #44BFAD;">
              <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span>{{ perk }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
