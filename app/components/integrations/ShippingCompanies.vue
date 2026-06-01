<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

defineProps<{
  locale: LocaleKey
  t: Translations
}>()

const shippingCards = [
  { key: 'dhl',     emoji: '🚨' },
  { key: 'smsa',    emoji: '🚚' },
  { key: 'aramex',  emoji: '📦' },
  { key: 'local',   emoji: '🛵' },
  { key: 'ups',     emoji: '📬' },
  { key: 'fedex',   emoji: '🚛' },
]
</script>

<template>
  <section :dir="t.dir" class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 py-16">

      <!-- Section Header -->
      <div class="flex items-center gap-4 mb-10">
        <div
          class="flex-shrink-0 flex items-center justify-center rounded-xl"
          style="width: 52px; height: 52px; background: #548CC9;"
        >
          <!-- Truck / shipping icon -->
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="1" y="3" width="15" height="13" rx="1"/>
            <path d="M16 8h4l3 5v4h-7V8z"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
        </div>
        <div class="flex-1">
          <h2 class="font-bold text-[#0F1B2D]" style="font-size: clamp(1.4rem, 2.4vw, 1.9rem);">
            {{ t.integrationsPage.shipping.title }}
          </h2>
          <p class="text-[#6B7280] text-[13.5px] mt-1">{{ t.integrationsPage.shipping.subtitle }}</p>
        </div>
      </div>

      <!-- 6 Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(card, i) in shippingCards"
          :key="card.key"
          class="flex flex-col bg-white p-5"
          style="box-shadow: 0px 4px 20px 0px #64646426; border-radius: 16px;"
        >
          <!-- Top row: icon + text -->
          <div class="flex items-start gap-3 mb-3">
            <!-- Icon box -->
            <div
              class="flex-shrink-0 flex items-center justify-center"
              style="width: 60px; height: 60px; border-radius: 16px; box-shadow: 0px 4px 20px 0px #64646426; background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);"
            >
              <span class="text-[28px] leading-none select-none">{{ card.emoji }}</span>
            </div>
            <!-- Text -->
            <div class="flex-1">
              <h3 class="font-bold text-[#0F1B2D] text-[15px]">
                {{ t.integrationsPage.shipping.items[i].name }}
              </h3>
              <p class="text-[#6B7280] text-[12.5px] mt-1 leading-relaxed">
                {{ t.integrationsPage.shipping.items[i].desc }}
              </p>
            </div>
          </div>

          <!-- Activate button -->
          <div class="mt-auto pt-4">
            <button
              class="w-full py-2.5 text-[13px] font-medium text-[#6B7280] hover:text-[#0F1B2D] transition-colors"
              style="background: #F3F4F6; border-radius: 24px;"
            >
              {{ t.integrationsPage.shipping.activateBtn }}
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
