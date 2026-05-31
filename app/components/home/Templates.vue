<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

withDefaults(defineProps<{
  t: Translations
  hideHeader?: boolean
  hideViewMore?: boolean
  showDownloads?: boolean
  background?: string
}>(), {
  hideHeader: false,
  hideViewMore: false,
  showDownloads: false,
  background: '#F5FAFF',
})
</script>

<template>
  <section class="w-full" :style="`background: ${background};`">
    <div class="max-w-[1180px] mx-auto px-6 py-20">
      <!-- Heading -->
      <div v-if="!hideHeader" class="text-center mb-12">
        <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.6rem, 3vw, 2.25rem);">
          {{ t.templates.heading }}
        </h2>
        <p class="mt-4 text-[#6B7280] text-[14px] max-w-[640px] mx-auto leading-relaxed">
          {{ t.templates.subtitle }}
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(card, i) in t.templates.items"
          :key="i"
          class="bg-white flex flex-col overflow-hidden"
          style="height: 410px; border-radius: 16px; border: 1px solid #ECEFF3; box-shadow: 0 2px 10px rgba(15, 27, 45, 0.04);"
        >
          <!-- Image -->
          <div class="w-full shrink-0 overflow-hidden" style="height: 240px;">
            <img
              :src="card.image"
              :alt="card.title"
              class="w-full h-full object-cover"
              loading="lazy"
            >
          </div>

          <!-- Content -->
          <div class="flex-1 flex flex-col px-4 pt-3 pb-4">
            <!-- Title + Category badge -->
            <div class="flex items-center justify-between gap-2">
              <h3 class="font-bold text-[#0F1B2D] text-[15px]">{{ card.title }}</h3>
              <span class="text-[11px] text-[#9CA3AF]">{{ card.category }}</span>
            </div>

            <!-- Description -->
            <p class="text-[#6B7280] text-[12.5px] leading-relaxed mt-2 flex-1">
              {{ card.desc }}
            </p>

            <!-- Downloads -->
            <p v-if="showDownloads" class="text-[12px] font-semibold mt-2" style="color: #0B9E89;">
              890 {{ t.templatesPage.downloads }}
            </p>

            <!-- Buttons -->
            <div class="flex items-center gap-2 mt-3">
              <button
                class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-[10px] text-white text-[12.5px] font-semibold hover:opacity-90 transition-opacity"
                style="background: #44BFAD;"
              >
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                </svg>
                {{ t.templates.previewBtn }}
              </button>
              <button
                class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-[10px] text-white text-[12.5px] font-semibold hover:opacity-90 transition-opacity"
                style="background: #548CC9;"
              >
                {{ t.templates.useBtn }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- View More Button -->
      <div v-if="!hideViewMore" class="flex justify-center mt-10">
        <button
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-[13px] hover:opacity-90 transition-opacity"
          style="background: #44BFAD;"
        >
          {{ t.templates.viewMore }}
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
