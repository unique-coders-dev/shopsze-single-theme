<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()
</script>

<template>
  <section class="w-full" style="background: #F3F4F6;">
    <div class="max-w-[1180px] mx-auto px-6 py-20">
      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.6rem, 3vw, 2.25rem);">
          {{ t.stores.heading1 }}
          <span style="color: #0B9E89;">{{ t.stores.headingBrand }}</span>
        </h2>
        <p class="mt-4 text-[#6B7280] text-[14px] max-w-[640px] mx-auto leading-relaxed">
          {{ t.stores.subtitle }}
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(store, i) in t.stores.items"
          :key="i"
          class="bg-white flex flex-col overflow-hidden"
          style="height: 320px; border-radius: 16px; box-shadow: 0px 4px 20px 0px #64646426;"
        >
          <!-- Image -->
          <div class="w-full shrink-0 overflow-hidden" style="height: 190px;">
            <img
              :src="store.image"
              :alt="store.name"
              class="w-full h-full object-cover"
              loading="lazy"
            >
          </div>

          <!-- Content -->
          <div class="flex-1 flex flex-col justify-between px-5 py-4 text-start">
            <div>
              <h3 class="font-bold text-[#0F1B2D] text-[16px]">{{ store.name }}</h3>
              <p class="text-[#9CA3AF] text-[13px] mt-1">{{ store.category }}</p>
            </div>

            <a
              href="#"
              class="inline-flex items-center gap-1.5 text-[13px] font-medium hover:opacity-80 transition-opacity"
              style="color: #0B9E89;"
            >
              <span>{{ t.stores.visit }}</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- See More CTA -->
      <div class="flex justify-center mt-10">
        <button
          class="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-[13px] hover:opacity-90 transition-opacity"
          style="background: #44BFAD;"
        >
          <span>{{ t.stores.seeMore }}</span>
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
