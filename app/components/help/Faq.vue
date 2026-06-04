<script setup lang="ts">
import type { Translations } from "~/composables/useLocale";

defineProps<{
  t: Translations;
}>();

const openIndex = ref<number | null>(null);

const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i;
};
</script>

<template>
  <section class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 py-20">
      <!-- Heading -->
      <div class="text-center mb-10">
        <h2
          class="font-bold text-[#0F1B2D] leading-tight"
          style="font-size: clamp(1.6rem, 2.6vw, 2.1rem)"
        >
          {{ t.helpPage.faqTitle }}
        </h2>
        <p class="mt-3 text-[#6B7280] text-[13.5px]">
          {{ t.helpPage.faqSubtitle }}
        </p>
      </div>

      <!-- Accordion wrapper -->
      <div class="p-6 sm:p-8" style="background: #f3f4f6; border-radius: 16px">
        <div class="flex flex-col gap-3">
          <div
            v-for="(faq, i) in t.helpPage.faqs"
            :key="i"
            class="bg-white overflow-hidden"
            style="border-radius: 20px"
          >
            <button
              class="w-full flex items-center justify-between gap-3 px-6 py-4 text-start"
              @click="toggle(i)"
            >
              <span class="text-[#0F1B2D] text-[13.5px] font-semibold">{{
                faq.q
              }}</span>
              <svg
                class="w-4 h-4 shrink-0 text-[#9CA3AF] transition-transform duration-200"
                :class="openIndex === i ? 'rotate-180' : ''"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div v-if="openIndex === i" class="px-6 pb-5 text-start">
              <p class="text-[#6B7280] text-[13px] leading-relaxed">
                {{ faq.a }}
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-8">
          <p class="text-[#6B7280] text-[13px] mb-2">
            {{ t.helpPage.faqBottomText }}
          </p>
          <a
            href="#"
            class="text-[13px] font-semibold underline"
            style="color: #2563eb; text-decoration: underline"
          >
            {{ t.helpPage.faqBottomLink }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
