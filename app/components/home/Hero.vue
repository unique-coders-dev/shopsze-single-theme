<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

defineProps<{
  locale: LocaleKey
  t: Translations
}>()
</script>

<template>
  <div :dir="t.dir" class="overflow-x-hidden">
    <div class="page-bg min-h-screen w-full pt-6 flex flex-col">

      <!-- Navbar (pill, 70px wrapper / 60px pill inside) -->
      <LayoutNavbar :locale="locale" :t="t" />

      <!-- Hero Content - directly on the gradient background -->
      <div class="flex-1 flex flex-col items-center justify-center text-center px-6 py-10 w-full max-w-[920px] mx-auto">

      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 px-4 py-[7px] rounded-full border text-[13px] font-medium mb-8"
        style="background: #083A33; border-color: rgba(11,158,137,0.25); color: rgba(255,255,255,0.8);"
      >
        <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#80EADB" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <span>{{ t.hero.badge }}</span>
      </div>

      <!-- Heading -->
      <h1 class="font-bold text-white leading-[1.15] mb-5" style="font-size: clamp(2.2rem, 4.6vw, 3.5rem);">
        <span class="block">{{ t.hero.heading1 }}</span>
        <span class="block mt-1">{{ t.hero.heading2 }}</span>
      </h1>

      <!-- Small Line -->
      <div class="h-[2px] w-[200px] mx-auto mb-6 rounded-full" style="background: linear-gradient(90deg, #0B9E89 0%, #80EADB 50%, #46679B 100%);"></div>

      <!-- Subtitle -->
      <p class="text-white/55 leading-relaxed mb-9 max-w-[560px]" style="font-size: clamp(0.85rem, 1.05vw, 0.95rem);">
        {{ t.hero.subtitle }}
      </p>

      <!-- AI Prompt Card (Combined Box + CTA) -->
      <div
        class="w-full max-w-[680px] rounded-2xl p-5 sm:p-6 mb-12 flex flex-col gap-6 relative z-10"
        style="background: #111111; border: 1px solid rgba(255,255,255,0.05); box-shadow: 0 20px 40px rgba(0,0,0,0.4);"
      >
        <div class="absolute -inset-10 bg-[#0B9E89] opacity-20 blur-[80px] rounded-full z-[-1] pointer-events-none"></div>

        <!-- Prompt Section -->
        <div class="flex items-start justify-between gap-4">
          <p class="flex-1 text-white/40 text-sm leading-relaxed text-start">
            {{ t.hero.placeholder }}
          </p>
          <div
            class="shrink-0 w-8 h-8 rounded-[8px] flex items-center justify-center text-white"
            style="background: #0B9E89;"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
        </div>

        <!-- CTA Row -->
        <div class="flex items-center justify-between gap-4 flex-wrap mt-2">
          <span class="inline-flex items-center gap-2 text-white/45 text-[13px]">
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2"/>
              <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/>
            </svg>
            {{ t.hero.enterHint }}
          </span>

          <button
            class="inline-flex items-center gap-2 px-5 py-[10px] rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            style="background: #0B9E89;"
          >
            <svg class="w-[15px] h-[15px] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z"/>
              <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z"/>
            </svg>
            {{ t.hero.cta }}
          </button>
        </div>
      </div>

      <!-- Feature Chips -->
      <div class="flex items-center flex-wrap justify-center gap-3">
        <!-- Design -->
        <div class="inline-flex items-center gap-2 px-[14px] py-[7px] rounded-full text-white/65 text-xs font-medium" style="background: #FFFFFF0D; border-top: 1px solid #FFFFFF1A;">
          <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#80EADB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
          {{ t.hero.features[0].label }}
        </div>
        <!-- Payment -->
        <div class="inline-flex items-center gap-2 px-[14px] py-[7px] rounded-full text-white/65 text-xs font-medium" style="background: #FFFFFF0D; border-top: 1px solid #FFFFFF1A;">
          <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#80EADB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
          </svg>
          {{ t.hero.features[1].label }}
        </div>
        <!-- AI -->
        <div class="inline-flex items-center gap-2 px-[14px] py-[7px] rounded-full text-white/65 text-xs font-medium" style="background: #FFFFFF0D; border-top: 1px solid #FFFFFF1A;">
          <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#80EADB">
            <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z"/>
          </svg>
          {{ t.hero.features[2].label }}
        </div>
        <!-- Analytics -->
        <div class="inline-flex items-center gap-2 px-[14px] py-[7px] rounded-full text-white/65 text-xs font-medium" style="background: #FFFFFF0D; border-top: 1px solid #FFFFFF1A;">
          <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#80EADB" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          {{ t.hero.features[3].label }}
        </div>
      </div>

      </div>
    </div>

    <!-- Brands strip -->
    <HomeBrands />

    <!-- Features Section -->
    <HomeFeatures :t="t" />

    <!-- Templates Section -->
    <HomeTemplates :t="t" />

    <!-- Sectors Section -->
    <HomeSectors :t="t" />

    <!-- Stores Section -->
    <HomeStores :t="t" />

    <!-- Stats Section -->
    <HomeStats :t="t" />

    <!-- Partners Section -->
    <HomePartners :t="t" />

    <!-- Integrations Section -->
    <HomeIntegrations :t="t" />

    <!-- Reviews Section -->
    <HomeReviews :t="t" />

    <!-- CTA Banner Section -->
    <HomeCtaBanner :t="t" />

    <!-- Footer Section -->
    <HomeFooter :t="t" />
  </div>
</template>
