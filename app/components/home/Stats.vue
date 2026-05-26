<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()
</script>

<template>
  <section class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 py-20">
      <div
        class="bg-white rounded-[20px] p-8 lg:p-12"
        style="box-shadow: 0px 4px 20px 0px #64646426;"
      >
        <div class="flex flex-col lg:flex-row items-center gap-10">
          <!-- Text Content (first in DOM → right side in RTL, left side in LTR) -->
          <div class="w-full lg:w-1/2 text-start">
            <p class="text-[13px] font-medium mb-3" style="color: #548CC9;">
              {{ t.stats.eyebrow }}
            </p>
            <h2 class="font-bold text-[#0F1B2D] leading-tight mb-8" style="font-size: clamp(1.5rem, 2.6vw, 2rem);">
              {{ t.stats.heading }}
            </h2>

            <!-- Stats grid -->
            <div class="grid grid-cols-2 gap-y-8 gap-x-6">
              <div
                v-for="(item, i) in t.stats.items"
                :key="i"
                class="flex items-center gap-4"
              >
                <div class="w-px h-12 shrink-0" style="background: #548CC9;"></div>
                <div class="flex flex-col">
                  <span class="font-bold text-[#0F1B2D] text-[22px] leading-none">{{ item.value }}</span>
                  <span class="text-[#9CA3AF] text-[12.5px] mt-2">{{ item.label }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Icon (second in DOM → left in RTL, right in LTR) -->
          <div class="w-full lg:w-1/2 flex items-center justify-center">
            <img
              src="/images/Icon.png"
              alt=""
              class="w-full max-w-[420px] h-auto"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
