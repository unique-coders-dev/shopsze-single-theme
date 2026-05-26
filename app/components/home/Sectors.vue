<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()
</script>

<template>
  <section class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 py-20">
      <!-- Heading -->
      <div class="text-center mb-10">
        <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.6rem, 3vw, 2.25rem);">
          {{ t.sectors.heading }}
        </h2>
      </div>

      <!-- Chips -->
      <div class="flex items-center justify-center flex-wrap gap-3 mb-12">
        <div
          v-for="(chip, i) in t.sectors.chips"
          :key="i"
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0F1B2D] text-[13px] font-medium cursor-pointer"
          style="border-radius: 20px; box-shadow: 0px 4px 20px 0px #64646426;"
        >
          <span>{{ chip }}</span>
          <!-- Accessories - bag -->
          <svg v-if="i === 0" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#548CC9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <!-- Jewelry - sparkle -->
          <svg v-else-if="i === 1" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#548CC9">
            <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z"/>
          </svg>
          <!-- Electronics - monitor -->
          <svg v-else-if="i === 2" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#548CC9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          <!-- Health - heart -->
          <svg v-else-if="i === 3" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#548CC9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          <!-- Digital - file -->
          <svg v-else-if="i === 4" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#548CC9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
          <!-- Abayas - heart outline -->
          <svg v-else-if="i === 5" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#548CC9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
          <!-- Fashion - bag -->
          <svg v-else class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#548CC9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </div>
      </div>

      <!-- Showcase Card -->
      <div
        class="relative w-full overflow-hidden flex items-center"
        style="background: #548CC9; height: 600px; border-radius: 30px;"
      >
        <div class="w-full h-full flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12">
          <!-- Text Content (first in DOM → right side in RTL, left side in LTR) -->
          <div class="w-full lg:w-1/2 text-white text-start flex flex-col">
            <h3 class="font-bold leading-[1.25]" style="font-size: clamp(1.6rem, 2.6vw, 2.2rem);">
              {{ t.sectors.headline1 }}
              <span style="color: #80EADB;"> {{ t.sectors.headlineHighlight }}</span>
            </h3>

            <p class="text-white/85 text-[14px] leading-relaxed mt-5 max-w-[460px]">
              {{ t.sectors.desc }}
            </p>

            <ul class="mt-6 space-y-3">
              <li
                v-for="(point, i) in t.sectors.points"
                :key="i"
                class="flex items-center gap-3 text-white text-[14px]"
              >
                <span class="shrink-0 w-2 h-2 rounded-full bg-white"></span>
                <span>{{ point }}</span>
              </li>
            </ul>

            <div class="mt-8">
              <button
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#548CC9] font-semibold text-[13px] hover:bg-white/90 transition-colors"
              >
                <span>{{ t.sectors.cta }}</span>
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Preview Image (second in DOM → left in RTL, right in LTR) -->
          <div
            class="w-full lg:w-1/2 h-full overflow-hidden shrink-0"
            style="border-radius: 30px;"
          >
            <img
              src="/images/bCard.png"
              :alt="t.sectors.headlineHighlight"
              class="w-full h-full object-cover"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
