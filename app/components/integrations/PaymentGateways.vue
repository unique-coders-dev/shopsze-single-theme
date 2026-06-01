<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

defineProps<{
  locale: LocaleKey
  t: Translations
}>()

const paymentCards = [
  { key: 'tabby',    icon: '/images/pay1.png' },
  { key: 'stripe',   icon: '/images/pay2.png' },
  { key: 'paypal',   icon: '/images/pay3.png' },
  { key: 'paytabs',  icon: '/images/pay4.png' },
  { key: 'hyperpay', icon: '/images/pay5.png' },
  { key: 'tamara',   icon: '/images/pay6.png' },
]
</script>

<template>
  <section :dir="t.dir" class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 py-16">

      <!-- Section Header -->
      <div class="flex items-center gap-4 mb-10">
        <div
          class="flex-shrink-0 flex items-center justify-center rounded-xl"
          style="width: 52px; height: 52px; background: #0B9E89;"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <line x1="2" y1="10" x2="22" y2="10"/>
          </svg>
        </div>
        <div class="flex-1">
          <h2 class="font-bold text-[#0F1B2D]" style="font-size: clamp(1.4rem, 2.4vw, 1.9rem);">
            {{ t.integrationsPage.payments.title }}
          </h2>
          <p class="text-[#6B7280] text-[13.5px] mt-1">{{ t.integrationsPage.payments.subtitle }}</p>
        </div>
      </div>

      <!-- 6 Integration Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(card, i) in paymentCards"
          :key="card.key"
          class="flex flex-col bg-white p-5"
          style="box-shadow: 0px 4px 20px 0px #64646426; border-radius: 16px;"
        >
          <!-- Top row: icon + text -->
          <div class="flex items-start gap-3 mb-3">
            <!-- Icon box -->
            <div
              class="flex-shrink-0 flex items-center justify-center bg-white"
              style="width: 60px; height: 60px; border-radius: 16px; box-shadow: 0px 4px 20px 0px #64646426;"
            >
              <img :src="card.icon" :alt="t.integrationsPage.payments.items[i].name" class="w-9 h-9 object-contain" />
            </div>
            <!-- Text -->
            <div class="flex-1">
              <h3 class="font-bold text-[#0F1B2D] text-[15px]">
                {{ t.integrationsPage.payments.items[i].name }}
              </h3>
              <p class="text-[#6B7280] text-[12.5px] mt-1 leading-relaxed">
                {{ t.integrationsPage.payments.items[i].desc }}
              </p>
            </div>
          </div>

          <!-- Activate button -->
          <div class="mt-auto pt-4">
            <button
              class="w-full py-2.5 text-[13px] font-medium text-[#6B7280] hover:text-[#0F1B2D] transition-colors"
              style="background: #F3F4F6; border-radius: 24px;"
            >
              {{ t.integrationsPage.payments.activateBtn }}
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
