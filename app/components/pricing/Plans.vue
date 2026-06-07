<script setup lang="ts">
import type { Translations, LocaleKey } from "~/composables/useLocale";

defineProps<{
  t: Translations;
  locale?: LocaleKey;
}>();

const route = useRoute();
const currentLocale = computed<LocaleKey>(() =>
  route.path.startsWith("/en") ? "en" : "ar"
);
</script>

<template>
  <section class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 pb-24">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(plan, i) in t.pricingPage.plans"
          :key="i"
          class="bg-white relative flex flex-col text-start"
          :class="i === 1 ? 'overflow-hidden' : 'p-8 md:my-8'"
          :style="
            i === 1
              ? 'border-radius: 24px; border: 2px solid #44BFAD; box-shadow: 0px 4px 20px 0px #64646426;'
              : 'border-radius: 24px; box-shadow: 0px 4px 20px 0px #64646426;'
          "
        >
          <!-- Popular badge bar (only for middle card) -->
          <div
            v-if="i === 1"
            class="w-full text-center py-2 text-white text-[13px] font-semibold"
            style="background: #44bfad"
          >
            {{ t.pricingPage.popular }}
          </div>

          <div :class="i === 1 ? 'p-8' : ''" class="flex flex-col flex-1">
            <!-- Plan name + subtitle -->
            <div class="text-center pb-6 border-b border-[#EFEFEF]">
              <h3 class="font-bold text-[#0F1B2D] text-[20px]">
                {{ plan.name }}
              </h3>
              <p class="text-[#9CA3AF] text-[12.5px] mt-1">
                {{ plan.subtitle }}
              </p>
            </div>

            <!-- Price -->
            <div class="text-center py-6 flex items-center justify-center gap-1.5">
              <span class="font-bold text-[#548CC9]" style="font-size: 32px">{{
                plan.price
              }}</span>
              <!-- Saudi Riyal symbol (new SAMA 2025 symbol) -->
              <svg
                v-if="currentLocale === 'ar'"
                class="w-5 h-5"
                viewBox="0 0 1124.14 1256.39"
                fill="#548CC9"
                aria-label="SAR"
              >
                <path d="M699.62 1113.02c-20.06 44.48-33.32 92.75-38.4 143.37l424.51-90.24c20.06-44.47 33.31-92.75 38.4-143.37l-424.51 90.24z"/>
                <path d="M1085.73 895.8c20.06-44.47 33.32-92.75 38.4-143.37l-330.68 70.33v-135.2l292.27-62.11c20.06-44.47 33.33-92.75 38.42-143.37l-330.68 70.27V66.13c-50.67 28.45-95.67 66.32-132.25 110.99v403.35l-132.25 28.11V0c-50.67 28.44-95.67 66.32-132.25 110.99v525.69l-295.91 62.88c-20.06 44.47-33.33 92.75-38.42 143.37l334.33-71.05v170.26l-358.3 76.14c-20.06 44.47-33.32 92.75-38.4 143.37l375.04-79.7c30.53-6.35 56.77-24.4 73.83-49.24l68.78-101.97c7.14-10.55 11.3-23.27 11.3-36.97v-149.98l132.25-28.11v270.4l424.53-90.28z"/>
              </svg>
              <span class="text-[#9CA3AF] text-[12.5px] ms-2">{{
                t.pricingPage.perMonth
              }}</span>
            </div>

            <!-- CTA Button -->
            <button
              class="w-full py-3 text-[13px] font-semibold transition-colors mb-6"
              :class="
                i === 1 ? 'text-white hover:opacity-90' : 'hover:bg-[#E5E7EB]'
              "
              :style="
                i === 1
                  ? 'background: #44BFAD; border-radius: 10px;'
                  : 'background: #F3F4F6; color: #0F1B2D; border-radius: 10px;'
              "
            >
              {{ t.pricingPage.trialBtn }}
            </button>

            <!-- Features list -->
            <ul class="flex flex-col gap-3">
              <li
                v-for="(feature, j) in plan.features"
                :key="j"
                class="flex items-center gap-3 text-[13px] text-[#0F1B2D]"
              >
                <svg
                  class="w-4 h-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#44BFAD"
                  stroke-width="2.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
