<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

defineProps<{
  locale: LocaleKey
  t: Translations
}>()
</script>

<template>
  <section class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 py-20">
      <!-- Header row -->
      <div class="flex items-start justify-between gap-4 mb-10 text-start">
        <div>
          <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.4vw, 2rem);">
            {{ t.helpPage.popularTitle }}
          </h2>
          <p class="mt-2 text-[#6B7280] text-[13.5px]">
            {{ t.helpPage.popularSubtitle }}
          </p>
        </div>

        <a
          href="#"
          class="inline-flex items-center gap-1 text-[13px] font-semibold shrink-0"
          style="color: #548CC9;"
        >
          <span>{{ t.helpPage.popularViewAll }}</span>
          <svg
            class="w-3.5 h-3.5"
            :class="locale === 'ar' ? 'rotate-180' : ''"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(card, i) in t.helpPage.popular"
          :key="i"
          class="bg-white p-5 flex flex-col text-start cursor-pointer hover:translate-y-[-2px] transition-transform"
          style="border-radius: 16px; border: 1px solid #E8E8E8;"
        >
          <!-- Top: tag + icon -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span
              class="px-3 py-1 text-[11px] font-medium"
              style="background: #EAF4FF; color: #548CC9; border-radius: 999px;"
            >
              {{ card.tag }}
            </span>
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#C8C8E0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 7v14"/>
              <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
            </svg>
          </div>

          <!-- Title -->
          <h3 class="font-bold text-[#0F1B2D] text-[14.5px] leading-snug mb-4 flex-1">
            {{ card.title }}
          </h3>

          <!-- Meta -->
          <p class="text-[#9CA3AF] text-[11.5px]">
            {{ t.helpPage.popularMetaViews }} {{ card.views }} • {{ card.minutes }} {{ t.helpPage.popularMetaMinutes }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
