<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

defineProps<{
  locale: LocaleKey
  t: Translations
}>()

const featureGradients = [
  'linear-gradient(135deg, #AD46FF 0%, #F6339A 100%)',
  'linear-gradient(135deg, #2B7FFF 0%, #00B8DB 100%)',
  'linear-gradient(135deg, #00C950 0%, #00BC7D 100%)',
  'linear-gradient(135deg, #F0B100 0%, #FF6900 100%)',
  'linear-gradient(135deg, #FF6900 0%, #FB2C36 100%)',
  'linear-gradient(135deg, #00BBA7 0%, #00C950 100%)',
  'linear-gradient(135deg, #FB2C36 0%, #FF2056 100%)',
  'linear-gradient(135deg, #615FFF 0%, #2B7FFF 100%)',
  'linear-gradient(135deg, #6A7282 0%, #62748E 100%)',
  'linear-gradient(135deg, #8E51FF 0%, #AD46FF 100%)',
  'linear-gradient(135deg, #F6339A 0%, #AD46FF 100%)',
  'linear-gradient(135deg, #00B8DB 0%, #2B7FFF 100%)',
]
</script>

<template>
  <div :dir="t.dir" class="overflow-x-hidden bg-white">
    <!-- Navbar -->
    <LayoutNavbarLight :locale="locale" :t="t" />

    <!-- Breadcrumb -->
    <div class="max-w-[1280px] mx-auto px-6 pt-6">
      <div class="flex items-center gap-2 text-[13px]">
        <NuxtLink :to="`/${locale}`" class="text-[#6B7280] hover:text-[#0F1B2D] transition-colors">
          {{ t.newsPage.breadcrumbHome }}
        </NuxtLink>
        <span class="text-[#9CA3AF]">/</span>
        <NuxtLink :to="`/${locale}/blog`" class="text-[#6B7280] hover:text-[#0F1B2D] transition-colors">
          {{ t.newsPage.breadcrumbBlog }}
        </NuxtLink>
        <span class="text-[#9CA3AF]">/</span>
        <span style="color: #0B9E89;">{{ t.newsPage.breadcrumbCurrent }}</span>
      </div>
    </div>

    <!-- Hero Banner -->
    <section
      class="w-full mt-6"
      style="background: linear-gradient(130.16deg, #44BFAD 27.12%, #548CC9 78.82%);"
    >
      <div class="max-w-[760px] mx-auto px-6 py-16 text-center text-white">
        <!-- Icon -->
        <div class="flex justify-center mb-5">
          <div
            class="flex items-center justify-center"
            style="width: 52px; height: 52px; border-radius: 50%; background: rgba(255,255,255,0.2);"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
        </div>

        <h1 class="font-bold leading-[1.25] mb-4" style="font-size: clamp(1.8rem, 3.4vw, 2.6rem);">
          {{ t.newsPage.heading }}
        </h1>
        <p class="text-white/85 text-[14px] leading-relaxed max-w-[560px] mx-auto">
          {{ t.newsPage.subtitle }}
        </p>
      </div>
    </section>

    <!-- Latest News -->
    <section class="w-full bg-white">
      <div class="max-w-[1180px] mx-auto px-6 py-16">

        <!-- Section title -->
        <div class="text-center mb-10">
          <h2 class="font-bold text-[#0F1B2D]" style="font-size: clamp(1.3rem, 2vw, 1.6rem);">
            {{ t.newsPage.latestTitle }}
          </h2>
          <p class="text-[#6B7280] text-[13.5px] mt-2">{{ t.newsPage.latestSubtitle }}</p>
        </div>

        <!-- Cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(post, i) in t.newsPage.posts"
            :key="i"
            class="flex flex-col bg-white overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            style="border-radius: 8px; border: 1px solid #E7E7E7;"
          >
            <!-- Image -->
            <div class="relative overflow-hidden" style="height: 270px; border-radius: 8px 8px 0 0;">
              <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
              <!-- Tag badge -->
              <span
                class="absolute top-3 text-white text-[11.5px] font-semibold px-3 py-1"
                :class="locale === 'ar' ? 'right-3' : 'left-3'"
                style="background: #44BFAD; border-radius: 8px;"
              >
                {{ post.tag }}
              </span>
            </div>

            <!-- Card body -->
            <div class="flex flex-col flex-1 p-4" :class="locale === 'ar' ? 'text-right' : 'text-left'">
              <p class="text-[11.5px] font-medium mb-2" style="color: #44BFAD;">{{ post.date }}</p>
              <h3 class="font-bold text-[#0F1B2D] text-[15px] leading-snug mb-2">{{ post.title }}</h3>
              <p class="text-[#6B7280] text-[12.5px] leading-relaxed mb-4 line-clamp-3">{{ post.desc }}</p>
              <div class="mt-auto flex items-center gap-1.5" :class="locale === 'ar' ? 'justify-end flex-row-reverse' : 'justify-start'">
                <span class="text-[13px] font-semibold text-[#0F1B2D]">{{ t.newsPage.readMore }}</span>
                <svg
                  class="w-4 h-4"
                  :class="locale === 'ar' ? 'rotate-180' : ''"
                  viewBox="0 0 24 24" fill="none" stroke="#0F1B2D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="w-full bg-white">
      <div class="max-w-[860px] mx-auto px-6 py-16">

        <!-- Section title -->
        <div class="text-center mb-14">
          <h2 class="font-bold text-[#0F1B2D]" style="font-size: clamp(1.3rem, 2vw, 1.7rem);">
            {{ t.newsPage.timelineTitle }}
          </h2>
          <p class="text-[#6B7280] text-[13.5px] mt-2">{{ t.newsPage.timelineSubtitle }}</p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Center vertical line -->
          <div
            class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]"
            style="background: linear-gradient(180deg, #44BFAD 0%, #548CC9 100%);"
          ></div>

          <div v-for="group in t.newsPage.timeline" :key="group.year" class="mb-4">
            <!-- Year badge -->
            <div class="flex justify-center mb-8 relative z-10">
              <span
                class="px-5 py-1.5 text-white text-[13px] font-bold"
                style="background: linear-gradient(90deg, #44BFAD 0%, #548CC9 100%); border-radius: 999px;"
              >
                {{ group.year }}
              </span>
            </div>

            <!-- Items -->
            <div v-for="(item, idx) in group.items" :key="idx" class="relative flex items-center mb-8">
              <!-- Dot on center line -->
              <div
                class="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 border-2 border-white"
                style="background: #44BFAD;"
              ></div>

              <!-- Left side card (side === 'left' for RTL means visually on the left) -->
              <div class="w-1/2 pr-8" :class="item.side === 'left' ? 'opacity-0 pointer-events-none' : ''">
                <div
                  v-if="item.side === 'right'"
                  class="p-4 rounded-xl"
                  style="background: #F9FAFB;"
                >
                  <div class="flex items-start gap-2" :class="locale === 'ar' ? 'flex-row-reverse text-right' : 'text-left'">
                    <svg class="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#44BFAD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <div>
                      <h4 class="font-bold text-[#0F1B2D] text-[13.5px]">{{ item.title }}</h4>
                      <p class="text-[#6B7280] text-[12px] mt-0.5">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right side card -->
              <div class="w-1/2 pl-8" :class="item.side === 'right' ? 'opacity-0 pointer-events-none' : ''">
                <div
                  v-if="item.side === 'left'"
                  class="p-4 rounded-xl"
                  style="background: #F9FAFB;"
                >
                  <div class="flex items-start gap-2" :class="locale === 'ar' ? 'flex-row-reverse text-right' : 'text-left'">
                    <svg class="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#44BFAD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <div>
                      <h4 class="font-bold text-[#0F1B2D] text-[13.5px]">{{ item.title }}</h4>
                      <p class="text-[#6B7280] text-[12px] mt-0.5">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- New Features Section -->
    <section class="w-full" style="background: #F3F4F6;">
      <div class="max-w-[1180px] mx-auto px-6 py-20">
        <!-- Heading -->
        <div class="text-center mb-12">
          <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.4vw, 2rem);">
            {{ t.newsPage.newFeaturesTitle }}
          </h2>
          <p class="mt-3 text-[#6B7280] text-[13.5px]">
            {{ t.newsPage.newFeaturesSubtitle }}
          </p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(card, i) in t.newsPage.newFeatures"
            :key="i"
            class="bg-white p-6 flex flex-col items-center text-center"
            style="border-radius: 16px; box-shadow: 0px 4px 20px 0px #64646426;"
          >
            <!-- Icon -->
            <span
              class="w-12 h-12 rounded-[12px] flex items-center justify-center mb-4"
              :style="`background: ${featureGradients[i]};`"
            >
              <!-- Different icon per index -->
              <svg v-if="i === 0" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
              <svg v-else-if="i === 1" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
              <svg v-else-if="i === 2" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <svg v-else-if="i === 3" class="w-5 h-5" viewBox="0 0 24 24" fill="#fff" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
              <svg v-else-if="i === 4" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
              <svg v-else-if="i === 5" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
              <svg v-else-if="i === 6" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              <svg v-else-if="i === 7" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <svg v-else-if="i === 8" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
              <svg v-else-if="i === 9" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <path d="M2 2l7.586 7.586"/>
                <circle cx="11" cy="11" r="2"/>
              </svg>
              <svg v-else-if="i === 10" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
            </span>

            <!-- Title -->
            <h3 class="font-bold text-[#0F1B2D] text-[15px] mb-1.5">{{ card.title }}</h3>

            <!-- Description -->
            <p class="text-[#6B7280] text-[12.5px] leading-relaxed">
              {{ card.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Press Releases Section -->
    <section class="w-full bg-white">
      <div class="max-w-[1080px] mx-auto px-6 py-20">
        <!-- Heading -->
        <div class="text-center mb-12">
          <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.4vw, 2rem);">
            {{ t.newsPage.pressTitle }}
          </h2>
          <p class="mt-3 text-[#6B7280] text-[13.5px]">
            {{ t.newsPage.pressSubtitle }}
          </p>
        </div>

        <!-- Items -->
        <div class="flex flex-col gap-10">
          <div
            v-for="(item, i) in t.newsPage.press"
            :key="i"
            class="flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
          >
            <!-- Image (first in DOM → right in RTL, left in LTR) -->
            <div class="shrink-0 w-full sm:w-[300px] h-[220px] overflow-hidden" style="border-radius: 16px;">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <!-- Text content -->
            <div class="flex-1 text-start">
              <p class="text-[#9CA3AF] text-[12.5px] mb-2">{{ item.date }}</p>
              <h3 class="font-bold text-[#0F1B2D] leading-snug mb-2" style="font-size: clamp(1.2rem, 1.8vw, 1.5rem);">
                {{ item.title }}
              </h3>
              <p class="text-[#6B7280] text-[13px] leading-relaxed mb-4">
                {{ item.desc }}
              </p>
              <button
                class="inline-flex items-center gap-1.5 px-4 py-2 text-[12.5px] font-semibold text-[#0F1B2D] bg-white hover:bg-[#F9FAFB] transition-colors"
                style="border: 1px solid #E5E7EB; border-radius: 8px;"
              >
                <span>{{ t.newsPage.pressReadMore }}</span>
                <svg
                  class="w-3.5 h-3.5"
                  :class="locale === 'ar' ? 'rotate-180' : ''"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="w-full" style="background: #F3F4F6;">
      <div class="max-w-[820px] mx-auto px-6 py-16 text-center">
        <!-- Icon -->
        <div class="flex justify-center mb-5">
          <span
            class="w-12 h-12 flex items-center justify-center bg-white"
            style="border-radius: 50%; color: #6B7280;"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </span>
        </div>

        <!-- Heading -->
        <h2 class="font-bold text-[#0F1B2D] leading-tight" style="font-size: clamp(1.5rem, 2.4vw, 2rem);">
          {{ t.newsPage.newsletter.heading }}
        </h2>
        <p class="mt-3 text-[#6B7280] text-[13.5px] max-w-[560px] mx-auto leading-relaxed">
          {{ t.newsPage.newsletter.subtitle }}
        </p>

        <!-- Input + Button (combined pill) -->
        <div
          class="mt-8 flex items-center bg-white overflow-hidden mx-auto"
          style="border-radius: 999px; border: 1px solid #E5E7EB; max-width: 520px;"
          :dir="t.dir"
        >
          <input
            type="email"
            :placeholder="t.newsPage.newsletter.placeholder"
            class="flex-1 px-5 py-3 text-[13.5px] text-[#0F1B2D] placeholder-[#9CA3AF] outline-none bg-transparent"
          />
          <button
            class="flex-shrink-0 px-5 py-3 text-white text-[13px] font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            style="background: #44BFAD; border-radius: 999px; margin: 3px;"
          >
            {{ t.newsPage.newsletter.btn }}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>

        <!-- Footer text -->
        <p class="mt-5 text-[#9CA3AF] text-[12px]">
          {{ t.newsPage.newsletter.footer }}
        </p>
      </div>
    </section>

    <!-- Footer -->
    <HomeFooter :t="t" />
  </div>
</template>
