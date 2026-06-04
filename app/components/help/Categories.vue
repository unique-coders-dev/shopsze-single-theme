<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

defineProps<{
  locale: LocaleKey
  t: Translations
}>()

const styles = [
  { bg: '#FFF7ED', color: '#F54900' },
  { bg: '#FAF5FF', color: '#9810FA' },
  { bg: '#F0FDF4', color: '#00A63E' },
  { bg: '#EFF6FF', color: '#155DFC' },
  { bg: '#F9FAFB', color: '#4A5565' },
  { bg: '#FEF2F2', color: '#F54900' },
  { bg: '#FFF7ED', color: '#E7000B' },
  { bg: '#FDF2F8', color: '#E60076' },
]
</script>

<template>
  <section class="w-full" style="background: #F3F4F6;">
    <div class="max-w-[1180px] mx-auto px-6 py-20">
      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.4vw, 2rem);">
          {{ t.helpPage.categoriesTitle }}
        </h2>
        <p class="mt-3 text-[#6B7280] text-[13.5px]">
          {{ t.helpPage.categoriesSubtitle }}
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(card, i) in t.helpPage.categories"
          :key="i"
          class="bg-white p-6 flex flex-col text-start cursor-pointer hover:translate-y-[-2px] transition-transform"
          style="border-radius: 16px; box-shadow: 0px 4px 20px 0px #64646426;"
        >
          <!-- Icon (at start side) -->
          <span
            class="w-10 h-10 rounded-[10px] flex items-center justify-center self-start mb-5"
            :style="`background: ${styles[i]?.bg};`"
          >
            <!-- Shipping/truck -->
            <svg v-if="i === 0" class="w-5 h-5" viewBox="0 0 24 24" fill="none" :stroke="styles[i]?.color" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <!-- Orders/cart -->
            <svg v-else-if="i === 1" class="w-5 h-5" viewBox="0 0 24 24" fill="none" :stroke="styles[i]?.color" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <!-- Products/box -->
            <svg v-else-if="i === 2" class="w-5 h-5" viewBox="0 0 24 24" fill="none" :stroke="styles[i]?.color" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
            <!-- Getting started/rocket -->
            <svg v-else-if="i === 3" class="w-5 h-5" viewBox="0 0 24 24" fill="none" :stroke="styles[i]?.color" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
              <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
            </svg>
            <!-- Settings/gear -->
            <svg v-else-if="i === 4" class="w-5 h-5" viewBox="0 0 24 24" fill="none" :stroke="styles[i]?.color" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <!-- Marketing/megaphone -->
            <svg v-else-if="i === 5" class="w-5 h-5" viewBox="0 0 24 24" fill="none" :stroke="styles[i]?.color" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 11l18-5v12L3 14v-3z"/>
              <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
            </svg>
            <!-- Templates/grid -->
            <svg v-else-if="i === 6" class="w-5 h-5" viewBox="0 0 24 24" fill="none" :stroke="styles[i]?.color" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            <!-- Payments/card -->
            <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" :stroke="styles[i]?.color" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="5" width="20" height="14" rx="2"/>
              <line x1="2" y1="10" x2="22" y2="10"/>
            </svg>
          </span>

          <!-- Title -->
          <h3 class="font-bold text-[#0F1B2D] text-[15px] mb-2">{{ card.title }}</h3>

          <!-- Description -->
          <p class="text-[#6B7280] text-[12.5px] leading-relaxed mb-4 flex-1">
            {{ card.desc }}
          </p>

          <!-- Count + arrow -->
          <div class="flex items-center justify-between gap-2 pt-4 border-t border-[#F3F4F6]">
            <span class="text-[#9CA3AF] text-[12px]">{{ card.count }} {{ t.helpPage.articleCount }}</span>
            <svg
              class="w-4 h-4 text-[#9CA3AF]"
              :class="locale === 'ar' ? 'rotate-180' : ''"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
