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
      <div class="text-center mb-12">
        <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.6vw, 2rem);">
          {{ t.reviews.heading }}
        </h2>
        <p class="mt-3 text-[#9CA3AF] text-[13px]">
          {{ t.reviews.subtitle }}
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(review, i) in t.reviews.items"
          :key="i"
          class="p-6 text-start flex flex-col"
          style="background: #F3F4F6; border-radius: 24px;"
        >
          <!-- Top row: quote + stars -->
          <div class="flex items-center justify-between mb-4">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="#9CA3AF">
              <path d="M9.17 6c-3.1 0-5.83 2.5-5.83 6 0 3.5 2.4 6 5.5 6 .6 0 1.16-.08 1.66-.24-.5 1.34-1.66 2.24-3.16 2.24v2c3.5 0 6.5-2.5 6.5-7v-5c0-2.21-1.79-4-4-4h-.67zm10 0c-3.1 0-5.83 2.5-5.83 6 0 3.5 2.4 6 5.5 6 .6 0 1.16-.08 1.66-.24-.5 1.34-1.66 2.24-3.16 2.24v2c3.5 0 6.5-2.5 6.5-7v-5c0-2.21-1.79-4-4-4h-.67z"/>
            </svg>
            <div class="flex items-center gap-0.5">
              <svg v-for="s in 5" :key="s" class="w-4 h-4" viewBox="0 0 24 24" fill="#FBBF24">
                <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z"/>
              </svg>
            </div>
          </div>

          <!-- Review text -->
          <p class="text-[#0F1B2D] text-[13.5px] leading-relaxed flex-1">
            "{{ review.text }}"
          </p>

          <!-- Author row -->
          <div class="flex items-center justify-start gap-3 mt-5">
            <img
              src="/images/client.png"
              :alt="review.name"
              class="w-11 h-11 rounded-full object-cover shrink-0"
              style="border: 2px solid #fff;"
              loading="lazy"
            >
            <div class="flex flex-col text-start">
              <span class="font-bold text-[#0F1B2D] text-[14px]">{{ review.name }}</span>
              <span class="text-[#9CA3AF] text-[12px] mt-0.5">{{ review.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
