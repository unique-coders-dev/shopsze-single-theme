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
        <!-- Badge -->
        <div class="mb-6 flex justify-start">
          <span
            class="inline-flex items-center gap-2 px-4 py-1.5 text-[12.5px] font-semibold text-white"
            style="background: linear-gradient(90deg, #44BFAD 0%, #548CC9 100%); border-radius: 999px;"
          >
            <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {{ t.registerPage.promo.badge }}
          </span>
        </div>

        <!-- Heading -->
        <h1 class="font-bold text-[#0F1B2D] leading-[1.25] mb-4" style="font-size: clamp(1.6rem, 2.8vw, 2.2rem);">
          {{ t.registerPage.promo.heading1 }}
          <span style="color: #548CC9;"> {{ t.registerPage.promo.headingHighlight }}</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-[#6B7280] text-[13.5px] leading-relaxed mb-6 max-w-[480px]">
          {{ t.registerPage.promo.subtitle }}
        </p>

        <!-- Perks List -->
        <ul class="flex flex-col gap-2.5 mb-8 w-full">
          <li
            v-for="(perk, i) in t.registerPage.promo.perks"
            :key="i"
            class="flex items-center gap-3 text-[#0F1B2D] text-[13px]"
          >
            <span class="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style="background: #22C55E;">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span>{{ perk }}</span>
          </li>
        </ul>

        <!-- Join Card -->
        <div class="p-5 text-start w-full mt-4" style="background: #F3F4F6; border-radius: 16px;">
          <div class="flex items-center justify-between gap-3">
            <div>
              <p class="text-[#6B7280] text-[12.5px]">{{ t.registerPage.promo.joinPrefix }}</p>
              <p class="font-bold text-[14px]" style="color: #0B9E89;">{{ t.registerPage.promo.joinCount }}</p>
            </div>
            <div class="flex -space-x-2 rtl:space-x-reverse">
              <span class="relative z-[3] w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold border-2 border-white" style="background: #44BFAD;">أ</span>
              <span class="relative z-[2] w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold border-2 border-white" style="background: #C1B41C;">م</span>
              <span class="relative z-[1] w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold border-2 border-white" style="background: #548CC9;">س</span>
            </div>
          </div>
          <p class="text-[#6B7280] text-[12.5px] mt-3">{{ t.registerPage.promo.testimonial }}</p>
        </div>
      </div>

      <!-- Form Side -->
      <div
        class="bg-white p-6 sm:p-8 order-1 md:order-2"
        style="border-radius: 16px; box-shadow: 0px 4px 20px 0px #64646426;"
      >
        <!-- Header -->
        <div class="flex items-center gap-3.5 mb-6 text-start">
          <button
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
          </button>
          <div>
            <h2 class="font-bold text-[#0F1B2D] text-[22px] leading-tight">{{ t.registerPage.form.heading }}</h2>
            <p class="text-[#9CA3AF] text-[12.5px] mt-1">{{ t.registerPage.form.subheading }}</p>
          </div>
        </div>

        <form class="flex flex-col gap-4" @submit.prevent>
          <!-- Store name -->
          <div class="text-start">
            <label class="block text-[#0F1B2D] text-[12.5px] font-semibold mb-1.5">{{ t.registerPage.form.storeName }}</label>
            <div class="relative">
              <input
                type="text"
                :placeholder="t.registerPage.form.storeNamePlaceholder"
                class="w-full bg-[#F3F4F6] text-[#0F1B2D] text-[13px] placeholder-[#9CA3AF] outline-none ps-11 pe-4 py-3 rounded-full"
              />
              <svg
                class="w-4 h-4 absolute top-1/2 -translate-y-1/2 text-[#9CA3AF] start-4"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
              >
                <path d="M3 9l1-5h16l1 5"/>
                <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9"/>
              </svg>
            </div>
            <p class="text-[#9CA3AF] text-[11.5px] mt-1.5">{{ t.registerPage.form.storeUrl }}</p>
          </div>

          <!-- Full name -->
          <div class="text-start">
            <label class="block text-[#0F1B2D] text-[12.5px] font-semibold mb-1.5">{{ t.registerPage.form.fullName }}</label>
            <div class="relative">
              <input
                type="text"
                :placeholder="t.registerPage.form.fullNamePlaceholder"
                class="w-full bg-[#F3F4F6] text-[#0F1B2D] text-[13px] placeholder-[#9CA3AF] outline-none ps-11 pe-4 py-3 rounded-full"
              />
              <svg
                class="w-4 h-4 absolute top-1/2 -translate-y-1/2 text-[#9CA3AF] start-4"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
          </div>

          <!-- Email -->
          <div class="text-start">
            <label class="block text-[#0F1B2D] text-[12.5px] font-semibold mb-1.5">{{ t.registerPage.form.email }}</label>
            <div class="relative">
              <input
                type="email"
                :placeholder="t.registerPage.form.emailPlaceholder"
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

          <!-- Country + City -->
          <div class="grid grid-cols-2 gap-3">
            <div class="text-start">
              <label class="block text-[#0F1B2D] text-[12.5px] font-semibold mb-1.5">{{ t.registerPage.form.country }}</label>
              <div class="relative">
                <select
                  class="w-full bg-[#F3F4F6] text-[#9CA3AF] text-[13px] outline-none ps-4 pe-10 py-3 rounded-full appearance-none"
                >
                  <option>{{ t.registerPage.form.countryPlaceholder }}</option>
                </select>
                <svg
                  class="w-4 h-4 absolute top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none end-4"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
            </div>
            <div class="text-start">
              <label class="block text-[#0F1B2D] text-[12.5px] font-semibold mb-1.5">{{ t.registerPage.form.city }}</label>
              <div class="relative">
                <select
                  class="w-full bg-[#F3F4F6] text-[#9CA3AF] text-[13px] outline-none ps-4 pe-10 py-3 rounded-full appearance-none"
                >
                  <option>{{ t.registerPage.form.cityPlaceholder }}</option>
                </select>
                <svg
                  class="w-4 h-4 absolute top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none end-4"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Password -->
          <div class="text-start">
            <label class="block text-[#0F1B2D] text-[12.5px] font-semibold mb-1.5">{{ t.registerPage.form.password }}</label>
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
          </div>

          <!-- Confirm Password -->
          <div class="text-start">
            <label class="block text-[#0F1B2D] text-[12.5px] font-semibold mb-1.5">{{ t.registerPage.form.confirmPassword }}</label>
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
          </div>

          <!-- Terms link (No checkbox to match user desired layout) -->
          <div class="text-start mt-1">
            <p class="text-[#6B7280] text-[12.5px] leading-relaxed">
              {{ t.registerPage.form.agreePrefix }}
              <a href="#" class="font-semibold underline" style="color: #548CC9;">{{ t.registerPage.form.agreeTerms }}</a>
              {{ t.registerPage.form.agreeAnd }}
              <a href="#" class="font-semibold underline" style="color: #548CC9;">{{ t.registerPage.form.agreePrivacy }}</a>
            </p>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="w-full py-3 text-white text-[13.5px] font-semibold hover:opacity-90 transition-opacity"
            style="background: #44BFAD; border-radius: 999px;"
          >
            {{ t.registerPage.form.submit }}
          </button>

          <!-- Divider -->
          <div class="flex items-center gap-3 my-1">
            <div class="flex-1 h-px bg-[#E5E7EB]"></div>
            <span class="text-[#9CA3AF] text-[12px]">{{ t.registerPage.form.or }}</span>
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
            {{ t.registerPage.form.googleBtn }}
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
            {{ t.registerPage.form.facebookBtn }}
          </button>

          <!-- Have account -->
          <p class="text-center text-[#6B7280] text-[12.5px] mt-2">
            {{ t.registerPage.form.haveAccount }}
            <a href="#" class="font-semibold underline ms-1" style="color: #548CC9;">{{ t.registerPage.form.loginLink }}</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
