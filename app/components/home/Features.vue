<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()
</script>

<template>
  <section class="relative w-full overflow-hidden" style="background: #F3F4F6;">
    <!-- subtle decorative gradients to match the soft greenish backdrop -->
    <div
      class="pointer-events-none absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full opacity-50"
      style="background: radial-gradient(circle, rgba(11,158,137,0.18) 0%, rgba(11,158,137,0) 70%);"
    ></div>
    <div
      class="pointer-events-none absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full opacity-40"
      style="background: radial-gradient(circle, rgba(70,103,155,0.16) 0%, rgba(70,103,155,0) 70%);"
    ></div>

    <div class="relative max-w-[1180px] mx-auto px-6 py-20">
      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.6rem, 3vw, 2.25rem);">
          {{ t.features.heading1 }}
          <span style="color: #0B9E89;">{{ t.features.headingHighlight }}</span>
        </h2>
        <p class="mt-4 text-[#6B7280] text-[15px] max-w-[640px] mx-auto leading-relaxed">
          {{ t.features.subtitle }}
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(card, i) in t.features.cards"
          :key="i"
          class="bg-white p-4 flex flex-col"
          style="height: 340px; border-radius: 20px; border: 1px solid #EFEFEF; box-shadow: 0 4px 18px rgba(15, 27, 45, 0.04);"
        >
          <!-- Image -->
          <div class="w-full overflow-hidden shrink-0" style="height: 190px; border-radius: 20px;">
            <img
              :src="card.image"
              :alt="card.title"
              class="w-full h-full object-cover"
              loading="lazy"
            >
          </div>

          <!-- Content (Icon + Text) -->
          <div class="flex items-start gap-3 mt-4">
            <div
              class="shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center"
              style="background: #F3F4F6;"
            >
              <!-- Different icon per card -->
              <svg v-if="i === 0" class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#0F1B2D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <svg v-else-if="i === 1" class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#0F1B2D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l1-5h16l1 5"/>
                <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9"/>
                <path d="M3 9c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3"/>
              </svg>
              <svg v-else-if="i === 2" class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#0F1B2D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
              <svg v-else class="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="#0F1B2D" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            
            <div class="flex-1">
              <h3 class="font-bold text-[#0F1B2D] text-[17px] mt-1">{{ card.title }}</h3>
              <p class="text-[#6B7280] text-[13px] leading-relaxed mt-1">
                {{ card.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="flex flex-col items-center mt-12">
        <button
          class="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          style="background: #0B9E89;"
        >
          <span>{{ t.features.cta }}</span>
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
        </button>
        <p class="text-[#9CA3AF] text-[13px] mt-4">{{ t.features.disclaimer }}</p>
      </div>
    </div>
  </section>
</template>
