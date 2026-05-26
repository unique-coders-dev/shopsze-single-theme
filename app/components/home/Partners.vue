<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()

const brands = Array.from({ length: 12 }, (_, i) => `/images/br${i + 1}.png`)
</script>

<template>
  <section class="w-full" style="background: #F3F4F6;">
    <div class="max-w-[1180px] mx-auto px-6 py-20">
      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.6vw, 2rem);">
          {{ t.partners.heading }}
        </h2>
        <p class="mt-3 text-[#9CA3AF] text-[13px]">
          {{ t.partners.subtitle }}
        </p>
      </div>

      <!-- Brands Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        <div
          v-for="(src, i) in brands"
          :key="i"
          class="bg-white flex items-center justify-center"
          style="height: 90px; border-radius: 16px;"
        >
          <img
            :src="src"
            alt=""
            class="h-full w-auto object-contain"
            loading="lazy"
          >
        </div>
      </div>
    </div>
  </section>
</template>
