<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

defineProps<{
  locale: LocaleKey
  t: Translations
}>()
</script>

<template>
  <div :dir="t.dir" class="overflow-x-hidden bg-white min-h-screen flex items-center justify-center px-4 py-10">
    <div class="w-full max-w-[1180px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start md:items-center" :dir="t.dir">
      <!-- Promo / Marketing Side -->
      <div class="text-start order-2 md:order-1 flex flex-col">
        <!-- Heading -->
        <h1 class="font-bold text-[#0F1B2D] leading-[1.25] mb-2" style="font-size: clamp(1.6rem, 2.8vw, 2.2rem);">
          {{ t.loginPage.promo.heading }}
        </h1>

        <!-- Subtitle -->
        <p class="text-[#6B7280] text-[13.5px] leading-relaxed mb-6 max-w-[480px]">
          {{ t.loginPage.promo.subtitle }}
        </p>

        <!-- Features List -->
        <div class="flex flex-col gap-4 w-full">
          <div
            v-for="(feature, idx) in t.loginPage.promo.features"
            :key="idx"
            class="flex items-center gap-4 p-4 border border-[#E5E7EB] bg-white rounded-xl transition-all hover:shadow-sm"
          >
            <div class="w-10 h-10 flex items-center justify-center shrink-0 rounded-[8px] bg-[#DBEAFE] text-[#155DFC]">
              <!-- Icon SVGs based on index -->
              <!-- index 0: Box/Product -->
              <svg v-if="idx === 0" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <!-- index 1: Shopping Cart -->
              <svg v-else-if="idx === 1" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <!-- index 2: Reports -->
              <svg v-else-if="idx === 2" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
              <!-- index 3: Support -->
              <svg v-else-if="idx === 3" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
              </svg>
            </div>
            <div class="text-start">
              <h3 class="font-bold text-[#0F1B2D] text-[14.5px]">{{ feature.title }}</h3>
              <p class="text-[#6B7280] text-[12.5px] mt-1">{{ feature.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Join Card -->
        <div class="p-5 w-full border border-[#E5E7EB] bg-white rounded-xl mt-6">
          <h3 class="font-bold text-[#0F1B2D] text-[15px] mb-4 text-start">
            {{ t.loginPage.promo.joinHeading }}
          </h3>
          <div class="grid grid-cols-3 gap-4 items-center">
            <div v-for="(stat, idx) in t.loginPage.promo.stats" :key="idx" class="text-center">
              <p class="text-[20px] sm:text-[22px] font-normal" style="color: #548CC9;">
                {{ stat.value }}
              </p>
              <p class="text-[#6B7280] text-[12px] mt-1">
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Side -->
      <div
        class="bg-white p-6 sm:p-8 order-1 md:order-2"
        style="border-radius: 16px; box-shadow: 0px 4px 20px 0px #64646426;"
      >
        <!-- Header -->
        <div class="flex items-center gap-3.5 mb-6 text-start">
          <NuxtLink
            :to="locale === 'ar' ? '/ar' : '/en'"
            class="w-9 h-9 flex items-center justify-center text-[#0F1B2D] hover:bg-[#F3F4F6] transition-colors shrink-0"
            style="border-radius: 10px;"
            aria-label="back"
          >
            <svg
              class="w-4 h-4 transition-transform duration-200"
              :class="locale === 'ar' ? 'rotate-180' : ''"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
          </NuxtLink>
          <div>
            <h2 class="font-bold text-[#0F1B2D] text-[22px] leading-tight">{{ t.loginPage.form.heading }}</h2>
            <p class="text-[#9CA3AF] text-[12.5px] mt-1">{{ t.loginPage.form.subheading }}</p>
          </div>
        </div>

        <form class="flex flex-col gap-4" @submit.prevent>
          <!-- Email -->
          <div class="text-start">
            <label class="block text-[#0F1B2D] text-[12.5px] font-semibold mb-1.5">{{ t.loginPage.form.email }}</label>
            <div class="relative">
              <input
                type="email"
                :placeholder="t.loginPage.form.emailPlaceholder"
                class="w-full bg-[#F3F4F6] text-[#0F1B2D] text-[13px] placeholder-[#9CA3AF] outline-none ps-11 pe-4 py-3 rounded-full"
              />
              <svg
                class="w-4 h-4 absolute top-1/2 -translate-y-1/2 text-[#9CA3AF] start-4"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
          </div>

          <!-- Password -->
          <div class="text-start">
            <label class="block text-[#0F1B2D] text-[12.5px] font-semibold mb-1.5">{{ t.loginPage.form.password }}</label>
            <div class="relative">
              <input
                type="password"
                placeholder="••••••••"
                class="w-full bg-[#F3F4F6] text-[#0F1B2D] text-[13px] placeholder-[#9CA3AF] outline-none ps-11 pe-4 py-3 rounded-full"
              />
              <svg
                class="w-4 h-4 absolute top-1/2 -translate-y-1/2 text-[#9CA3AF] start-4"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <!-- Forgot Password -->
            <div class="text-start mt-1.5">
              <a href="#" class="text-[12px] font-medium hover:underline" style="color: #548CC9;">
                {{ t.loginPage.form.forgotPassword }}
              </a>
            </div>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full py-3 text-white text-[13.5px] font-semibold hover:opacity-90 transition-opacity mt-2"
            style="background: #44BFAD; border-radius: 999px;"
          >
            {{ t.loginPage.form.submit }}
          </button>

          <!-- Divider -->
          <div class="flex items-center gap-3 my-1">
            <div class="flex-1 h-px bg-[#E5E7EB]"></div>
            <span class="text-[#9CA3AF] text-[12px]">{{ t.loginPage.form.or }}</span>
            <div class="flex-1 h-px bg-[#E5E7EB]"></div>
          </div>

          <!-- Google -->
          <button
            type="button"
            class="w-full py-2.5 text-[#0F1B2D] text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-[#F9FAFB] transition-colors"
            style="background: #fff; border: 1px solid #E5E7EB; border-radius: 999px;"
          >
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {{ t.loginPage.form.googleBtn }}
          </button>

          <!-- Facebook -->
          <button
            type="button"
            class="w-full py-2.5 text-[#0F1B2D] text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-[#F9FAFB] transition-colors"
            style="background: #fff; border: 1px solid #E5E7EB; border-radius: 999px;"
          >
            <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
            </svg>
            {{ t.loginPage.form.facebookBtn }}
          </button>

          <!-- Register Link -->
          <p class="text-center text-[#6B7280] text-[12.5px] mt-2">
            {{ t.loginPage.form.noAccount }}
            <NuxtLink :to="locale === 'ar' ? '/ar/register' : '/en/register'" class="font-semibold underline ms-1" style="color: #44BFAD;">
              {{ t.loginPage.form.registerLink }}
            </NuxtLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
