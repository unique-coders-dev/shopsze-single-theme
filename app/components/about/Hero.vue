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

    <!-- Hero Banner with breadcrumb -->
    <section
      class="w-full relative"
      style="background: linear-gradient(130.16deg, #44BFAD 27.12%, #548CC9 78.82%);"
    >
      <!-- Breadcrumb -->
      <div class="max-w-[1280px] mx-auto px-6 pt-6">
        <div class="flex items-center gap-2 text-[12.5px] text-start" style="color: #E7E7E7;">
          <NuxtLink :to="`/${locale}`" class="hover:opacity-80 transition-opacity" style="color: #E7E7E7;">
            {{ t.aboutPage.breadcrumbHome }}
          </NuxtLink>
          <span style="color: #E7E7E7;">/</span>
          <span style="color: #E7E7E7;">{{ t.aboutPage.breadcrumbResources }}</span>
          <span style="color: #E7E7E7;">/</span>
          <span style="color: #fff;">{{ t.aboutPage.breadcrumbCurrent }}</span>
        </div>
      </div>

      <!-- Banner content -->
      <div class="max-w-[920px] mx-auto px-6 pt-10 pb-20 text-center text-white">
        <!-- Badge -->
        <div class="flex justify-center mb-6">
          <span
            class="inline-flex items-center gap-2 px-4 py-1.5 text-[12.5px] font-medium"
            style="background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.25); border-radius: 999px;"
          >
            <svg class="w-4 h-4 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            {{ t.aboutPage.badge }}
          </span>
        </div>

        <!-- Heading -->
        <h1 class="font-bold leading-[1.25] mb-5" style="font-size: clamp(1.8rem, 3.4vw, 2.7rem);">
          {{ t.aboutPage.heading }}
        </h1>

        <!-- Subtitle -->
        <p class="text-white/85 text-[14px] leading-relaxed max-w-[720px] mx-auto">
          {{ t.aboutPage.subtitle }}
        </p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="w-full bg-white">
      <div class="max-w-[1180px] mx-auto px-6 py-20">
        <div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <!-- Text content (first in DOM → right in RTL, left in LTR) -->
          <div class="w-full lg:w-1/2 text-start">
            <h2 class="font-bold text-[#0F1B2D] leading-tight mb-6" style="font-size: clamp(1.6rem, 2.6vw, 2.1rem);">
              {{ t.aboutPage.storyTitle }}
            </h2>
            <div class="flex flex-col gap-4">
              <p
                v-for="(para, i) in t.aboutPage.storyParagraphs"
                :key="i"
                class="text-[#6B7280] text-[13.5px] leading-[1.9]"
              >
                {{ para }}
              </p>
            </div>
          </div>

          <!-- Image (second in DOM → left in RTL, right in LTR) -->
          <div class="w-full lg:w-1/2">
            <div class="w-full overflow-hidden" style="border-radius: 20px;">
              <img
                src="/images/banner1.png"
                :alt="t.aboutPage.storyTitle"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission Section -->
    <section class="w-full" style="background: #F3F4F6;">
      <div class="max-w-[1180px] mx-auto px-6 py-20">
        <!-- Heading -->
        <div class="text-center mb-12">
          <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.6rem, 2.6vw, 2.1rem);">
            {{ t.aboutPage.visionMissionTitle }}
          </h2>
          <p class="mt-3 text-[#6B7280] text-[13.5px]">
            {{ t.aboutPage.visionMissionSubtitle }}
          </p>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(card, i) in [t.aboutPage.vision, t.aboutPage.mission]"
            :key="i"
            class="bg-white flex flex-col text-start p-8"
            style="border-radius: 16px;"
          >
            <h3 class="font-bold text-[#0F1B2D] text-[20px] mb-3">{{ card.title }}</h3>
            <p class="text-[#6B7280] text-[13.5px] leading-[1.9] mb-8">
              {{ card.desc }}
            </p>
            <div class="flex justify-center mt-auto">
              <img
                :src="card.image"
                :alt="card.title"
                class="h-32 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="w-full bg-white">
      <div class="max-w-[1180px] mx-auto px-6 py-20">
        <!-- Heading -->
        <div class="text-center mb-12">
          <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.4vw, 2rem);">
            {{ t.aboutPage.statsTitle }}
          </h2>
          <p class="mt-3 text-[#6B7280] text-[13.5px]">
            {{ t.aboutPage.statsSubtitle }}
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6" dir="ltr">
          <div
            v-for="(stat, i) in t.aboutPage.stats"
            :key="i"
            class="bg-white p-6 flex flex-col items-center text-center"
            style="border-radius: 16px; box-shadow: 0px 4px 20px 0px #64646426;"
          >
            <!-- Icon -->
            <span
              class="w-11 h-11 rounded-[12px] flex items-center justify-center mb-4"
              :style="
                i === 0 ? 'background: #FFF8E5;' :
                i === 1 ? 'background: #E3FFFB;' :
                i === 2 ? 'background: #ECFDF3;' :
                          'background: #EEF4FA;'
              "
            >
              <!-- Customer satisfaction (chart up) -->
              <svg v-if="i === 0" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#C1B41C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
              <!-- Countries (globe) -->
              <svg v-else-if="i === 1" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#44BFAD" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <!-- Sales (SAR / currency) -->
              <svg v-else-if="i === 2" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#32B828" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 4l-4 14"/>
                <path d="M18 8l-4 14"/>
                <path d="M3 11l16-3"/>
                <path d="M3 15l16-3"/>
              </svg>
              <!-- Stores (storefront) -->
              <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#2774CC" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l1-5h16l1 5"/>
                <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9"/>
                <path d="M3 9c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3"/>
              </svg>
            </span>

            <!-- Value -->
            <p class="font-bold text-[#0F1B2D]" style="font-size: 26px;" dir="ltr">{{ stat.value }}</p>

            <!-- Label -->
            <p class="text-[#9CA3AF] text-[12.5px] mt-2">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="w-full" style="background: #F3F4F6;">
      <div class="max-w-[1180px] mx-auto px-6 py-20">
        <!-- Heading -->
        <div class="text-center mb-12">
          <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.4vw, 2rem);">
            {{ t.aboutPage.valuesTitle }}
          </h2>
          <p class="mt-3 text-[#6B7280] text-[13.5px]">
            {{ t.aboutPage.valuesSubtitle }}
          </p>
        </div>

        <!-- Cards Grid (positions fixed in LTR for both directions) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" dir="ltr">
          <div
            v-for="(card, i) in t.aboutPage.values"
            :key="i"
            class="bg-white p-7 flex flex-col text-start"
            style="border-radius: 16px;"
            :dir="t.dir"
          >
            <!-- Icon (on start side, top) -->
            <span
              class="w-11 h-11 rounded-[10px] flex items-center justify-center self-start mb-5"
              :style="
                i === 0 ? 'background: #ECFDF3;' :
                i === 1 ? 'background: #EEF4FA;' :
                i === 2 ? 'background: #FFF8E5;' :
                i === 3 ? 'background: #FFEDD4;' :
                i === 4 ? 'background: #E3FFFB;' :
                          'background: #FCF3F2;'
              "
            >
              <!-- Headphones (customer support) -->
              <svg v-if="i === 0" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#32B828" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
                <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
              </svg>
              <!-- Lightbulb (innovation) -->
              <svg v-else-if="i === 1" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#2774CC" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18h6"/>
                <path d="M10 22h4"/>
                <path d="M2 9a10 10 0 0 1 20 0c0 4-3 6-3 9H5c0-3-3-5-3-9z"/>
              </svg>
              <!-- Lightning (simplicity) -->
              <svg v-else-if="i === 2" class="w-5 h-5" viewBox="0 0 24 24" fill="#C1B41C" stroke="#C1B41C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              <!-- Rocket (growth) -->
              <svg v-else-if="i === 3" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#F54900" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
              <!-- People (collaboration) -->
              <svg v-else-if="i === 4" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#44BFAD" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <!-- Shield (security) -->
              <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#D4342A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </span>

            <!-- Title -->
            <h3 class="font-bold text-[#0F1B2D] text-[17px] mb-2">{{ card.title }}</h3>

            <!-- Description -->
            <p class="text-[#6B7280] text-[13px] leading-relaxed">
              {{ card.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="w-full bg-white">
      <div class="max-w-[1180px] mx-auto px-6 py-20">
        <!-- Heading -->
        <div class="text-center mb-12">
          <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.4vw, 2rem);">
            {{ t.aboutPage.teamTitle }}
          </h2>
          <p class="mt-3 text-[#6B7280] text-[13.5px]">
            {{ t.aboutPage.teamSubtitle }}
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(member, i) in t.aboutPage.team"
            :key="i"
            class="bg-white overflow-hidden flex flex-col items-center text-center"
            style="border-radius: 16px; box-shadow: 0px 8px 14px 0px #7B7B7B26;"
          >
            <!-- Image area with gradient background -->
            <div
              class="w-full flex items-end justify-center"
              style="background: linear-gradient(180deg, rgba(68, 191, 173, 0.2) 0%, rgba(84, 140, 201, 0.2) 100%); height: 260px;"
            >
              <img
                :src="member.image"
                :alt="member.name"
                class="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>

            <!-- Content -->
            <div class="w-full p-5 flex flex-col items-center text-center">
              <h3 class="font-bold text-[#0F1B2D] text-[16px] mb-1">{{ member.name }}</h3>
              <p class="text-[#6B7280] text-[12.5px] mb-4">{{ member.role }}</p>

              <!-- Social Icons -->
              <div class="flex items-center gap-2">
                <a
                  href="#"
                  class="w-8 h-8 flex items-center justify-center text-[#6B7280] hover:opacity-80 transition-opacity"
                  style="background: #F3F4F6; border-radius: 50%;"
                  aria-label="Twitter"
                >
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  class="w-8 h-8 flex items-center justify-center text-[#6B7280] hover:opacity-80 transition-opacity"
                  style="background: #F3F4F6; border-radius: 50%;"
                  aria-label="LinkedIn"
                >
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="w-full" style="background: #F3F4F6;">
      <div class="max-w-[1180px] mx-auto px-6 py-20">
        <div
          class="bg-white px-6 py-14 sm:px-12 sm:py-16 text-center"
          style="border-radius: 24px;"
        >
          <!-- Heading -->
          <h2 class="font-bold text-[#0F1B2D] leading-[1.25] mx-auto" style="font-size: clamp(1.6rem, 3vw, 2.3rem); max-width: 520px;">
            {{ t.aboutPage.ctaTitle }}
          </h2>

          <!-- Subtitle -->
          <p class="mt-5 text-[#6B7280] text-[13.5px] max-w-[620px] mx-auto leading-relaxed">
            {{ t.aboutPage.ctaSubtitle }}
          </p>

          <!-- Buttons -->
          <div class="flex items-center justify-center flex-wrap gap-3 mt-7">
            <button
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-[13px] hover:opacity-90 transition-opacity"
              style="background: #44BFAD;"
            >
              <span>{{ t.aboutPage.ctaPrimary }}</span>
              <svg
                class="w-4 h-4"
                :class="locale === 'ar' ? 'rotate-180' : ''"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <button
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-[13px] hover:opacity-90 transition-opacity"
              style="background: #548CC9;"
            >
              {{ t.aboutPage.ctaSecondary }}
            </button>
          </div>

          <!-- Perks Row -->
          <div class="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 mt-8">
            <div
              v-for="(perk, i) in t.aboutPage.ctaPerks"
              :key="i"
              class="inline-flex items-center gap-2 text-[#6B7280] text-[13px]"
            >
              <span class="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style="background: #22C55E;">
                <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span>{{ perk }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <HomeFooter :t="t" />
  </div>
</template>
