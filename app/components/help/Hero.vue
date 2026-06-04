<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

defineProps<{
  locale: LocaleKey
  t: Translations
}>()
</script>

<template>
  <div :dir="t.dir" class="overflow-x-hidden bg-white">
    <!-- Navbar -->
    <LayoutNavbarLight :locale="locale" :t="t" />

    <!-- Breadcrumb -->
    <div class="max-w-[1280px] mx-auto px-6 pt-6">
      <div class="flex items-center gap-2 text-[13px] text-start">
        <NuxtLink :to="`/${locale}`" class="text-[#6B7280] hover:text-[#0F1B2D] transition-colors">
          {{ t.helpPage.breadcrumbHome }}
        </NuxtLink>
        <span class="text-[#9CA3AF]">/</span>
        <span class="text-[#6B7280]">{{ t.helpPage.breadcrumbResources }}</span>
        <span class="text-[#9CA3AF]">/</span>
        <span style="color: #0B9E89;">{{ t.helpPage.breadcrumbCurrent }}</span>
      </div>
    </div>

    <!-- Hero Banner -->
    <section
      class="w-full mt-6"
      style="background: linear-gradient(130.16deg, #44BFAD 27.12%, #548CC9 78.82%);"
    >
      <div class="max-w-[820px] mx-auto px-6 py-16 text-center text-white">
        <h1 class="font-bold leading-tight mb-4" style="font-size: clamp(1.8rem, 3.4vw, 2.6rem);">
          {{ t.helpPage.heading }}
        </h1>
        <p class="text-white/85 text-[14px] leading-relaxed max-w-[560px] mx-auto mb-8">
          {{ t.helpPage.subtitle }}
        </p>

        <!-- Search Input -->
        <div
          class="flex items-center overflow-hidden mx-auto"
          style="background: rgba(255, 255, 255, 0.2); border-radius: 999px; max-width: 580px;"
          :dir="t.dir"
        >
          <input
            type="text"
            :placeholder="t.helpPage.searchPlaceholder"
            class="flex-1 px-5 py-3 text-[13.5px] text-white placeholder-white/80 outline-none bg-transparent"
          />
          <button
            class="flex-shrink-0 w-10 h-10 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
            style="background: #44BFAD; border-radius: 999px; margin: 3px;"
            aria-label="search"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
        </div>

        <!-- Suggestions -->
        <div class="flex items-center justify-center flex-wrap gap-2 mt-6">
          <span class="text-white/85 text-[12.5px] px-3 py-1.5">{{ t.helpPage.suggestionsLabel }}</span>
          <button
            v-for="(suggestion, i) in t.helpPage.suggestions"
            :key="i"
            class="text-white text-[12.5px] px-4 py-1.5 transition-colors hover:bg-white/20"
            style="background: rgba(255,255,255,0.12); border-radius: 999px; border: 1px solid rgba(255,255,255,0.3);"
          >
            {{ suggestion }}
          </button>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <HelpCategories :locale="locale" :t="t" />

    <!-- Popular Articles Section -->
    <HelpPopular :locale="locale" :t="t" />

    <!-- Contact / Support CTA -->
    <HelpContact :t="t" />

    <!-- FAQ Section -->
    <HelpFaq :t="t" />

    <!-- Footer -->
    <HomeFooter :t="t" />
  </div>
</template>
