<script setup lang="ts">
import type { Translations } from '~/composables/useLocale'

defineProps<{
  t: Translations
}>()
</script>

<template>
  <section
    class="w-full"
    style="background: linear-gradient(91.21deg, #44BFAD 1.03%, #548CC9 99.29%);"
  >
    <div class="max-w-[1180px] mx-auto px-6 py-20 text-center">
      <!-- Heading -->
      <h2 class="font-bold text-white leading-tight" style="font-size: clamp(1.5rem, 2.4vw, 2rem);">
        {{ t.helpPage.contactTitle }}
      </h2>
      <p class="mt-3 text-white/85 text-[14px]">
        {{ t.helpPage.contactSubtitle }}
      </p>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
        <div
          v-for="(card, i) in t.helpPage.contactCards"
          :key="i"
          class="p-6 text-center text-white"
          style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); border-radius: 16px;"
        >
          <!-- Icon -->
          <div class="flex justify-center mb-4">
            <span
              class="w-12 h-12 rounded-[12px] flex items-center justify-center"
              style="background: rgba(255,255,255,0.18);"
            >
              <!-- Chat -->
              <svg v-if="i === 0" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <!-- Phone -->
              <svg v-else-if="i === 1" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
              </svg>
              <!-- Email -->
              <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </span>
          </div>

          <!-- Title -->
          <h3 class="font-bold text-white text-[15.5px] mb-2">{{ card.title }}</h3>

          <!-- Description -->
          <p class="text-white/85 text-[12.5px] leading-relaxed mb-3">
            {{ card.desc }}
          </p>

          <!-- Meta -->
          <p class="text-white/70 text-[11.5px]">{{ card.meta }}</p>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex items-center justify-center flex-wrap gap-3 mt-10">
        <button
          class="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold hover:opacity-90 transition-opacity"
          style="background: #fff; color: #2EA48F; border-radius: 999px;"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          {{ t.helpPage.contactStartChat }}
        </button>

        <button
          class="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-white/10 transition-colors"
          style="background: transparent; border: 1px solid rgba(255,255,255,0.6); border-radius: 999px;"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          {{ t.helpPage.contactOpenTicket }}
        </button>
      </div>

      <!-- Response time -->
      <p class="inline-flex items-center gap-2 mt-6 text-white/85 text-[12.5px]">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        <span>{{ t.helpPage.contactResponse }}</span>
      </p>
    </div>
  </section>
</template>
