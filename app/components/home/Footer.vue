<script setup lang="ts">
import type { Translations } from "~/composables/useLocale";

defineProps<{
  t: Translations;
}>();

const socials = [
  { src: "/images/Linkedin.svg", alt: "LinkedIn" },
  { src: "/images/Instagram.svg", alt: "Instagram" },
  { src: "/images/Twitter.svg", alt: "Twitter" },
  { src: "/images/Facebook.svg", alt: "Facebook" },
];
</script>

<template>
  <footer class="w-full bg-white">
    <div class="max-w-[1180px] mx-auto px-6 py-12">
      <div
        class="bg-white p-8 sm:p-10"
        style="border-radius: 20px; box-shadow: 0px 4px 20px 0px #64646426"
      >
        <!-- Top row: logo + socials -->
        <div class="flex items-start justify-between gap-6 mb-10">
          <!-- Brand + description (first in DOM → right in RTL, left in LTR) -->
          <div class="flex-1 text-start">
            <img src="/images/logo2.png" alt="Shopze" class="h-7 w-auto" />
            <p
              class="text-[#6B7280] text-[13px] leading-relaxed mt-4 max-w-[640px]"
            >
              {{ t.footer.desc }}
            </p>
          </div>

          <!-- Social icons -->
          <div class="flex items-center gap-2 shrink-0">
            <a
              v-for="s in socials"
              :key="s.alt"
              href="#"
              :aria-label="s.alt"
              class="w-9 h-9 rounded-[10px] flex items-center justify-center hover:opacity-90 transition-opacity"
              style="background: #0f1115"
            >
              <img :src="s.src" :alt="s.alt" class="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>

        <!-- 3 Cards Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <!-- Quick links card -->
          <div
            class="rounded-[16px] p-6 text-white text-start"
            style="background: #ad996f; min-height: 170px"
          >
            <h4 class="font-bold text-[17px] mb-4">
              {{ t.footer.quickLinks.title }}
            </h4>
            <div class="grid grid-cols-2 gap-x-4 gap-y-2">
              <a
                v-for="link in t.footer.quickLinks.colA"
                :key="link"
                href="#"
                class="text-white/75 text-[13px] hover:text-white transition-colors"
              >
                {{ link }}
              </a>
              <a
                v-for="link in t.footer.quickLinks.colB"
                :key="link"
                href="#"
                class="text-white/75 text-[13px] hover:text-white transition-colors"
              >
                {{ link }}
              </a>
            </div>
          </div>

          <!-- Phone card -->
          <div
            class="rounded-[16px] p-6 text-white text-start flex flex-col"
            style="background: #071d39; min-height: 170px"
          >
            <div class="flex items-center justify-between gap-3">
              <h4 class="font-bold text-[17px]">
                {{ t.footer.phoneCard.title }}
              </h4>
              <span
                class="w-9 h-9 rounded-[10px] bg-white/15 flex items-center justify-center"
              >
                <svg
                  class="w-[18px] h-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
                  />
                </svg>
              </span>
            </div>
            <p class="text-white/80 text-[13px] mt-4">
              {{ t.footer.phoneCard.subtitle }}
            </p>
            <p class="text-white text-[14px] font-medium mt-2">
              {{ t.footer.phoneCard.value }}
            </p>
          </div>

          <!-- Email card -->
          <div
            class="rounded-[16px] p-6 text-white text-start flex flex-col"
            style="background: #1a1f26; min-height: 170px"
          >
            <div class="flex items-center justify-between gap-3">
              <h4 class="font-bold text-[17px]">
                {{ t.footer.emailCard.title }}
              </h4>
              <span
                class="w-9 h-9 rounded-[10px] bg-white/15 flex items-center justify-center"
              >
                <svg
                  class="w-[18px] h-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
            </div>
            <p class="text-white/80 text-[13px] mt-4">
              {{ t.footer.emailCard.subtitle }}
            </p>
            <p class="text-white text-[14px] font-medium mt-2">
              {{ t.footer.emailCard.value }}
            </p>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-10 pt-6 border-t border-[#EFEFEF] text-center">
          <p class="text-[#9CA3AF] text-[12.5px]">{{ t.footer.copyright }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
