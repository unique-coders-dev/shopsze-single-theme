<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

const props = defineProps<{
  locale: LocaleKey
  t: Translations
}>()

const activeFilter = ref(props.t.templatesPage.filters[0])
</script>

<template>
  <div :dir="t.dir" class="overflow-x-hidden bg-white">
    <!-- Light Navbar -->
    <LayoutNavbarLight :locale="locale" :t="t" />

    <!-- Breadcrumb -->
    <div class="max-w-[1280px] mx-auto px-6 pt-6">
      <div class="flex items-center gap-2 text-[13px] text-start">
        <NuxtLink :to="`/${locale}`" class="text-[#6B7280] hover:text-[#0F1B2D] transition-colors">
          {{ t.templatesPage.breadcrumbHome }}
        </NuxtLink>
        <span class="text-[#9CA3AF]">/</span>
        <span style="color: #0B9E89;">{{ t.templatesPage.breadcrumbCurrent }}</span>
      </div>
    </div>

    <!-- Heading -->
    <section class="w-full">
      <div class="max-w-[920px] mx-auto px-6 pt-12 pb-10 text-center">
        <h1 class="font-bold text-[#0F1B2D] leading-[1.25]" style="font-size: clamp(1.8rem, 3.4vw, 2.6rem);">
          {{ t.templatesPage.heading1 }}
          <span style="color: #0B9E89;"> {{ t.templatesPage.headingHighlight }}</span>
        </h1>
        <p class="mt-5 text-[#6B7280] text-[14.5px] leading-relaxed max-w-[640px] mx-auto">
          {{ t.templatesPage.subtitle }}
        </p>
      </div>
    </section>

    <!-- Filter Pills -->
    <section class="w-full">
      <div class="max-w-[1180px] mx-auto px-6 pb-2">
        <div class="flex items-center justify-center flex-wrap gap-3">
          <button
            v-for="(filter, i) in t.templatesPage.filters"
            :key="i"
            class="px-6 py-2.5 text-[13px] font-semibold transition-colors"
            :style="activeFilter === filter
              ? 'background: #548CC9; color: #fff; border-radius: 999px; border: 1px solid transparent;'
              : 'background: #fff; color: #0F1B2D; border-radius: 999px; border: 1px solid #E5E7EB;'"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
      </div>
    </section>

    <!-- Templates Cards -->
    <HomeTemplates :t="t" hide-header hide-view-more show-downloads background="#ffffff" />

    <!-- Footer -->
    <HomeFooter :t="t" />
  </div>
</template>
