<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()

const logos = Array.from({ length: 6 }, (_, i) => `/images/p${i + 1}.png`)
</script>

<template>
  <section class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 py-20">
      <!-- Heading -->
      <div class="text-center mb-12">
        <h2 class="font-bold text-[#0F1B2D] leading-[1.25]" style="font-size: clamp(1.5rem, 2.6vw, 2rem);">
          <span class="block">{{ t.integrations.heading1 }}</span>
          <span class="block">{{ t.integrations.heading2 }}</span>
        </h2>
        <p class="mt-4 text-[#9CA3AF] text-[13px]">
          {{ t.integrations.subtitle }}
        </p>
      </div>

      <!-- Logo Grid -->
      <div class="grid grid-cols-3 md:grid-cols-6 gap-5 max-w-[960px] mx-auto">
        <div
          v-for="(src, i) in logos"
          :key="i"
          class="bg-white flex items-center justify-center"
          style="height: 110px; border-radius: 20px; box-shadow: 0px 4px 20px 0px #64646426;"
        >
          <img
            :src="src"
            alt=""
            class="max-h-[55%] w-auto object-contain"
            loading="lazy"
          >
        </div>
      </div>

      <!-- Footer text -->
      <p class="text-center text-[#9CA3AF] text-[13px] mt-10">
        {{ t.integrations.footer }}
      </p>
    </div>
  </section>
</template>
