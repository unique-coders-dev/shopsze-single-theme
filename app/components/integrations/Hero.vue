<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

defineProps<{
  locale: LocaleKey
  t: Translations
}>()
</script>

<template>
  <div :dir="t.dir" class="overflow-x-hidden bg-white">
    <!-- Light Navbar -->
    <LayoutNavbarLight :locale="locale" :t="t" />

    <!-- Breadcrumb -->
    <div class="max-w-[1280px] mx-auto px-6 pt-6">
      <div class="flex items-center gap-2 text-[13px] text-start">
        <NuxtLink :to="`/${locale}`" class="text-[#6B7280] hover:text-[#0F1B2D] transition-colors">
          {{ t.integrationsPage.breadcrumbHome }}
        </NuxtLink>
        <span class="text-[#9CA3AF]">/</span>
        <span style="color: #0B9E89;">{{ t.integrationsPage.breadcrumbCurrent }}</span>
      </div>
    </div>

    <!-- Heading -->
    <section class="w-full">
      <div class="max-w-[920px] mx-auto px-6 pt-12 pb-10 text-center">
        <h1 class="font-bold text-[#0F1B2D] leading-[1.25]" style="font-size: clamp(1.8rem, 3.4vw, 2.6rem);">
          {{ t.integrationsPage.heading1 }}
          <span style="color: #0B9E89;"> {{ t.integrationsPage.headingHighlight }}</span>
        </h1>
        <p class="mt-5 text-[#6B7280] text-[14.5px] leading-relaxed max-w-[640px] mx-auto">
          {{ t.integrationsPage.subtitle }}
        </p>
      </div>
    </section>

    <!-- Stat Cards -->
    <section class="w-full">
      <div class="max-w-[1180px] mx-auto px-6 pb-16">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Card 1 -->
          <div
            class="flex flex-col items-center justify-center py-8 px-4 text-center"
            style="background: #FEF2F2; border-radius: 16px;"
          >
            <span class="font-bold text-[2rem] leading-tight" style="color: #EF4444;">
              {{ t.integrationsPage.stats[0].value }}
            </span>
            <span class="mt-2 text-[13px] text-[#6B7280]">{{ t.integrationsPage.stats[0].label }}</span>
          </div>

          <!-- Card 2 -->
          <div
            class="flex flex-col items-center justify-center py-8 px-4 text-center"
            style="background: #EEF4FA; border-radius: 16px;"
          >
            <span class="font-bold text-[2rem] leading-tight" style="color: #2774CC;">
              {{ t.integrationsPage.stats[1].value }}
            </span>
            <span class="mt-2 text-[13px] text-[#6B7280]">{{ t.integrationsPage.stats[1].label }}</span>
          </div>

          <!-- Card 3 -->
          <div
            class="flex flex-col items-center justify-center py-8 px-4 text-center"
            style="background: #ECFDF3; border-radius: 16px;"
          >
            <span class="font-bold text-[2rem] leading-tight" style="color: #32B828;">
              {{ t.integrationsPage.stats[2].value }}
            </span>
            <span class="mt-2 text-[13px] text-[#6B7280]">{{ t.integrationsPage.stats[2].label }}</span>
          </div>

          <!-- Card 4 -->
          <div
            class="flex flex-col items-center justify-center py-8 px-4 text-center"
            style="background: #EDE9FE; border-radius: 16px;"
          >
            <span class="font-bold text-[2rem] leading-tight" style="color: #7F22FE;">
              {{ t.integrationsPage.stats[3].value }}
            </span>
            <span class="mt-2 text-[13px] text-[#6B7280]">{{ t.integrationsPage.stats[3].label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Payment Gateways Section -->
    <IntegrationsPaymentGateways :locale="locale" :t="t" />

    <!-- Shipping Companies Section -->
    <IntegrationsShippingCompanies :locale="locale" :t="t" />

    <!-- Marketing & Ads Section -->
    <IntegrationsMarketing :locale="locale" :t="t" />

    <!-- Email Section -->
    <IntegrationsEmail :locale="locale" :t="t" />

    <!-- Security Section -->
    <IntegrationsSecurity :locale="locale" :t="t" />

    <!-- API & Dev Section -->
    <IntegrationsApi :locale="locale" :t="t" />

    <!-- Footer -->
    <HomeFooter :t="t" />
  </div>
</template>
