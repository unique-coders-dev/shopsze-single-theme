<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()
</script>

<template>
  <section class="w-full bg-white">
    <div class="max-w-[1280px] mx-auto px-6 pb-20">
      <div
        class="bg-white p-6 sm:p-8 lg:p-10"
        style="
          border-radius: 30px;
          box-shadow: 0px 4px 20px 0px #64646426;
          min-height: 500px;
        "
      >
        <div class="flex flex-col lg:flex-row items-stretch gap-12 h-full">
          <!-- Right content (first in DOM → right in RTL, left in LTR) -->
          <div class="w-full lg:w-1/2 flex flex-col justify-center text-start">
            <h2
              class="font-bold text-[#0F1B2D] leading-tight"
              style="font-size: clamp(1.6rem, 2.8vw, 2.1rem)"
            >
              {{ t.featuresPage.shipping.title }}
            </h2>
            <p class="mt-3 text-[#6B7280] text-[14px]">
              {{ t.featuresPage.shipping.subtitle }}
            </p>

            <div class="mt-6">
              <ul class="flex flex-col gap-3">
                <li
                  v-for="(item, i) in t.featuresPage.shipping.items"
                  :key="i"
                  class="flex items-center justify-start gap-3 px-5 py-3.5"
                  style="
                    background: #FCF3F2;
                    border: 1px solid rgba(212, 52, 42, 0.5);
                    border-radius: 16px;
                  "
                >
                  <span
                    class="shrink-0 w-8 h-8 rounded-[8px] flex items-center justify-center"
                    style="background: #fff"
                  >
                    <!-- Different icon per item -->
                    <svg
                      v-if="i === 0"
                      class="w-[16px] h-[16px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D4342A"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect x="1" y="3" width="15" height="13"/>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                      <circle cx="5.5" cy="18.5" r="2.5"/>
                      <circle cx="18.5" cy="18.5" r="2.5"/>
                    </svg>
                    <svg
                      v-else-if="i === 1"
                      class="w-[16px] h-[16px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D4342A"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <svg
                      v-else-if="i === 2"
                      class="w-[16px] h-[16px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D4342A"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="8" y1="6" x2="21" y2="6"/>
                      <line x1="8" y1="12" x2="21" y2="12"/>
                      <line x1="8" y1="18" x2="21" y2="18"/>
                      <line x1="3" y1="6" x2="3.01" y2="6"/>
                      <line x1="3" y1="12" x2="3.01" y2="12"/>
                      <line x1="3" y1="18" x2="3.01" y2="18"/>
                    </svg>
                    <svg
                      v-else-if="i === 3"
                      class="w-[16px] h-[16px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D4342A"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <svg
                      v-else
                      class="w-[16px] h-[16px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D4342A"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="18" y1="20" x2="18" y2="10"/>
                      <line x1="12" y1="20" x2="12" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  </span>
                  <span class="text-[#0F1B2D] text-[13.5px] font-medium">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Left image (second in DOM → left in RTL, right in LTR) -->
          <div class="w-full lg:w-1/2 relative">
            <div
              class="w-full h-full overflow-hidden"
              style="border-radius: 24px; min-height: 380px"
            >
              <img
                src="/images/banner5.png"
                :alt="t.featuresPage.shipping.title"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <!-- Floating badge: Delivery rate (top end) -->
            <div
              class="absolute px-3 py-2 flex items-center gap-2 bg-white"
              style="
                border-radius: 12px;
                box-shadow: 0px 4px 14px rgba(15, 27, 45, 0.08);
                top: -15px;
                inset-inline-end: -20px;
              "
            >
              <span
                class="w-7 h-7 rounded-[8px] flex items-center justify-center"
                style="background: #548CC9"
              >
                <svg
                  class="w-[14px] h-[14px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </span>
              <div class="flex flex-col text-start">
                <span class="font-bold text-[#0F1B2D] text-[13px] leading-none">97.5%</span>
                <span class="text-[#6B7280] text-[10.5px] mt-1">{{ t.featuresPage.shipping.stats.deliveryRate }}</span>
              </div>
            </div>

            <!-- Floating badge: Daily shipments (top start) -->
            <div
              class="absolute px-3 py-2 flex items-center gap-2 bg-white"
              style="
                border-radius: 12px;
                box-shadow: 0px 4px 14px rgba(15, 27, 45, 0.08);
                top: 60px;
                inset-inline-start: -20px;
              "
            >
              <span
                class="w-7 h-7 rounded-[8px] flex items-center justify-center"
                style="background: #22C55E"
              >
                <svg
                  class="w-[14px] h-[14px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="1" y="3" width="15" height="13"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </span>
              <div class="flex flex-col text-start">
                <span class="font-bold text-[#0F1B2D] text-[13px] leading-none">1,234</span>
                <span class="text-[#6B7280] text-[10.5px] mt-1">{{ t.featuresPage.shipping.stats.dailyShipments }}</span>
              </div>
            </div>

            <!-- Floating badge: On the way (bottom end) -->
            <div
              class="absolute px-3 py-2 flex items-center gap-2 bg-white"
              style="
                border-radius: 12px;
                box-shadow: 0px 4px 14px rgba(15, 27, 45, 0.08);
                bottom: 15px;
                inset-inline-end: -20px;
              "
            >
              <span
                class="w-7 h-7 rounded-[8px] flex items-center justify-center"
                style="background: #C1B41C"
              >
                <svg
                  class="w-[14px] h-[14px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </span>
              <div class="flex flex-col text-start">
                <span class="font-bold text-[#0F1B2D] text-[13px] leading-none">456</span>
                <span class="text-[#6B7280] text-[10.5px] mt-1">{{ t.featuresPage.shipping.stats.onTheWay }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
