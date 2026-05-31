<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()

const isBoolean = (v: unknown): v is boolean => typeof v === 'boolean'
</script>

<template>
  <section class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 pb-24">
      <!-- Heading -->
      <div class="text-center mb-10">
        <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.6vw, 2rem);">
          {{ t.pricingPage.compare.heading }}
        </h2>
        <p class="mt-3 text-[#9CA3AF] text-[13px]">
          {{ t.pricingPage.compare.subtitle }}
        </p>
      </div>

      <!-- Table -->
      <div
        class="overflow-hidden"
        style="border-radius: 16px; box-shadow: 0px 4px 20px 0px #64646426;"
      >
        <table class="w-full text-[13px]">
          <thead>
            <tr
              class="text-white"
              style="background: linear-gradient(90deg, #44BFAD 0%, #548CC9 100%);"
            >
              <th class="px-5 py-4 font-semibold text-start">{{ t.pricingPage.compare.colFeatures }}</th>
              <th class="px-5 py-4 font-semibold text-center">{{ t.pricingPage.compare.colStarter }}</th>
              <th class="px-5 py-4 font-semibold text-center">{{ t.pricingPage.compare.colBusiness }}</th>
              <th class="px-5 py-4 font-semibold text-center">{{ t.pricingPage.compare.colPro }}</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(section, si) in t.pricingPage.compare.sections" :key="si">
              <!-- Section header row -->
              <tr style="background: #F9FAFB;">
                <td colspan="4" class="px-5 py-3 font-semibold text-[#0F1B2D] text-start">
                  {{ section.title }}
                </td>
              </tr>

              <!-- Feature rows -->
              <tr
                v-for="(row, ri) in section.rows"
                :key="ri"
                class="border-t border-[#F1F5F9]"
              >
                <td class="px-5 py-3.5 text-[#0F1B2D] font-medium text-start">{{ row.label }}</td>

                <!-- Starter -->
                <td class="px-5 py-3.5 text-[#6B7280] text-center">
                  <template v-if="isBoolean(row.starter)">
                    <svg v-if="row.starter" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="#44BFAD" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <svg v-else class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </template>
                  <template v-else>{{ row.starter }}</template>
                </td>

                <!-- Business (highlighted column) -->
                <td
                  class="px-5 py-3.5 text-[#0F1B2D] text-center"
                  style="background: #EEF4FA; border-bottom: 1px solid #C0D3E9;"
                >
                  <template v-if="isBoolean(row.business)">
                    <svg v-if="row.business" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="#44BFAD" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <svg v-else class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </template>
                  <template v-else>{{ row.business }}</template>
                </td>

                <!-- Pro -->
                <td class="px-5 py-3.5 text-[#6B7280] text-center">
                  <template v-if="isBoolean(row.pro)">
                    <svg v-if="row.pro" class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="#44BFAD" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <svg v-else class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </template>
                  <template v-else>{{ row.pro }}</template>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
