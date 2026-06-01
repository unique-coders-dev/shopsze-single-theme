<script setup lang="ts">
import type { Translations, LocaleKey } from '~/composables/useLocale'

const props = defineProps<{
  locale: LocaleKey
  t: Translations
}>()

const activeFilter = ref(props.t.blogPage.filters[0].key)
const searchQuery = ref('')
</script>

<template>
  <div :dir="t.dir" class="overflow-x-hidden bg-white">
    <!-- Navbar -->
    <LayoutNavbarLight :locale="locale" :t="t" />

    <!-- Breadcrumb -->
    <div class="max-w-[1280px] mx-auto px-6 pt-6">
      <div class="flex items-center gap-2 text-[13px]">
        <NuxtLink :to="`/${locale}`" class="text-[#6B7280] hover:text-[#0F1B2D] transition-colors">
          {{ t.blogPage.breadcrumbHome }}
        </NuxtLink>
        <span class="text-[#9CA3AF]">/</span>
        <NuxtLink :to="`/${locale}/blog`" class="text-[#6B7280] hover:text-[#0F1B2D] transition-colors">
          {{ t.blogPage.breadcrumbBlog }}
        </NuxtLink>
        <span class="text-[#9CA3AF]">/</span>
        <span style="color: #0B9E89;">{{ t.blogPage.breadcrumbCurrent }}</span>
      </div>
    </div>

    <!-- Hero Heading -->
    <section class="w-full" style="background: linear-gradient(180deg, #F0FBF9 0%, #FFFFFF 100%);">
      <div class="max-w-[760px] mx-auto px-6 pt-12 pb-10 text-center">
        <h1 class="font-bold text-[#0F1B2D] leading-[1.25]" style="font-size: clamp(1.8rem, 3.4vw, 2.6rem);">
          {{ t.blogPage.heading }}
        </h1>
        <p class="mt-4 text-[#6B7280] text-[14.5px] leading-relaxed max-w-[560px] mx-auto">
          {{ t.blogPage.subtitle }}
        </p>

        <!-- Search bar -->
        <div class="mt-8 max-w-[460px] mx-auto relative">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="t.blogPage.searchPlaceholder"
            class="w-full px-5 py-3 text-[13.5px] text-[#0F1B2D] placeholder-[#9CA3AF] outline-none"
            style="border: 1px solid #E5E7EB; border-radius: 999px; background: #fff;"
          />
          <div
            class="absolute top-1/2 -translate-y-1/2 flex items-center justify-center text-[#9CA3AF]"
            :class="locale === 'ar' ? 'left-4' : 'right-4'"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Pills -->
    <section class="w-full bg-white">
      <div class="max-w-[1180px] mx-auto px-6 py-6">
        <div class="flex items-center gap-3">
          <button
            v-for="filter in t.blogPage.filters"
            :key="filter.key"
            class="flex flex-1 items-center justify-center gap-2 px-5 py-2.5 text-[13px] font-semibold transition-all"
            :style="activeFilter === filter.key
              ? 'background: #548CC9; color: #fff; border-radius: 999px; border: 1px solid transparent;'
              : 'background: #fff; color: #0F1B2D; border-radius: 999px; border: 1px solid #E5E7EB;'"
            @click="activeFilter = filter.key"
          >
            <span v-if="filter.icon">{{ filter.icon }}</span>
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Articles -->
    <section class="w-full bg-white">
      <div class="max-w-[1180px] mx-auto px-6 pt-4 pb-20">

        <!-- Section title -->
        <div class="flex items-center gap-2 mb-8" :class="locale === 'ar' ? 'justify-end' : 'justify-start'">
          <h2 class="font-bold text-[#0F1B2D]" style="font-size: clamp(1.3rem, 2vw, 1.6rem);">
            {{ t.blogPage.featuredTitle }}
          </h2>
          <span class="text-[20px]">⭐</span>
        </div>

        <!-- Cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(post, i) in t.blogPage.posts"
            :key="i"
            class="flex flex-col bg-white overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            style="border-radius: 8px; border: 1px solid #E7E7E7;"
          >
            <!-- Image -->
            <div class="relative overflow-hidden" style="height: 270px; border-radius: 8px 8px 0 0;">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover"
              />
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
              <!-- Date -->
              <p class="text-[11.5px] font-medium mb-2" style="color: #44BFAD;">{{ post.date }}</p>

              <!-- Title -->
              <h3 class="font-bold text-[#0F1B2D] text-[15px] leading-snug mb-2">
                {{ post.title }}
              </h3>

              <!-- Description -->
              <p class="text-[#6B7280] text-[12.5px] leading-relaxed mb-4 line-clamp-3">
                {{ post.desc }}
              </p>

              <!-- Read more -->
              <div class="mt-auto flex items-center gap-1.5" :class="locale === 'ar' ? 'justify-end flex-row-reverse' : 'justify-start'">
                <span class="text-[13px] font-semibold" style="color: #0F1B2D;">{{ t.blogPage.readMore }}</span>
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

    <!-- Latest Articles -->
    <section class="w-full" style="background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);">
      <div class="max-w-[1180px] mx-auto px-6 pt-14 pb-20">

        <!-- Section title -->
        <div class="mb-8" :class="locale === 'ar' ? 'text-right' : 'text-left'">
          <h2 class="font-bold text-[#0F1B2D]" style="font-size: clamp(1.3rem, 2vw, 1.6rem);">
            {{ t.blogPage.latestTitle }}
          </h2>
          <p class="text-[#6B7280] text-[13.5px] mt-1">{{ t.blogPage.latestSubtitle }}</p>
        </div>

        <!-- Cards grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(post, i) in t.blogPage.latestPosts"
            :key="i"
            class="flex flex-col bg-white overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            style="border-radius: 8px; border: 1px solid #E7E7E7;"
          >
            <!-- Image -->
            <div class="relative overflow-hidden" style="height: 270px; border-radius: 8px 8px 0 0;">
              <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
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
                <span class="text-[13px] font-semibold text-[#0F1B2D]">{{ t.blogPage.readMore }}</span>
                <svg class="w-4 h-4" :class="locale === 'ar' ? 'rotate-180' : ''" viewBox="0 0 24 24" fill="none" stroke="#0F1B2D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Load more button -->
        <div class="flex justify-center mt-10">
          <button
            class="px-8 py-3 text-white text-[13.5px] font-semibold hover:opacity-90 transition-opacity"
            style="background: #44BFAD; border-radius: 999px;"
          >
            {{ t.blogPage.loadMore }}
          </button>
        </div>
      </div>
    </section>

    <!-- Most Read Articles -->
    <section class="w-full bg-white">
      <div class="max-w-[1180px] mx-auto px-6 py-14">
        <div class="px-8 py-10" style="background: #EEF4FA; border-radius: 16px;">

          <!-- Section title -->
          <div class="flex items-center gap-2 mb-8">
            <!-- Trending up icon -->
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#44BFAD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 17 9 11 13 15 21 7"/>
              <polyline points="15 7 21 7 21 13"/>
            </svg>
            <h2 class="font-bold text-[#0F1B2D]" style="font-size: clamp(1.2rem, 1.8vw, 1.5rem);">
              {{ t.blogPage.mostReadTitle }}
            </h2>
          </div>

          <!-- 4 cards row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              v-for="post in t.blogPage.mostReadPosts"
              :key="post.rank"
              class="flex flex-col bg-white p-4 cursor-pointer hover:shadow-md transition-shadow"
              style="box-shadow: 0px 4px 20px 0px #64646426; border-radius: 12px;"
            >
              <!-- Rank + Title + Reads row -->
              <div class="flex items-center gap-2 mb-3">
                <!-- Rank badge -->
                <div
                  class="flex-shrink-0 flex items-center justify-center text-white font-bold text-[13px]"
                  style="width: 28px; height: 28px; border-radius: 8px; background: linear-gradient(135deg, #44BFAD 0%, #548CC9 100%);"
                >
                  {{ post.rank }}
                </div>
                <!-- Title -->
                <h3 class="font-bold text-[#0F1B2D] text-[13.5px] leading-snug flex-1">
                  {{ post.title }}
                </h3>
                <!-- Reads badge -->
                <span
                  class="flex-shrink-0 flex items-center justify-center px-2.5 py-1 text-[11px] font-medium whitespace-nowrap"
                  style="background: #F3F4F6; border-radius: 16px; color: #6F7B8B;"
                >
                  {{ post.reads }} {{ t.blogPage.readsLabel }}
                </span>
              </div>

              <!-- Date -->
              <p class="text-[11.5px] text-[#9CA3AF]">{{ post.date }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="w-full" style="background: #F3F4F6;">
      <div class="max-w-[680px] mx-auto px-6 py-16 text-center">

        <!-- Email icon -->
        <div class="flex justify-center mb-5">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>

        <!-- Heading -->
        <h2 class="font-bold text-[#0F1B2D] mb-3" style="font-size: clamp(1.6rem, 2.8vw, 2.1rem);">
          {{ t.blogPage.newsletter.heading }}
        </h2>
        <p class="text-[#6B7280] text-[14px] mb-8">
          {{ t.blogPage.newsletter.subtitle }}
        </p>

        <!-- Input + Button -->
        <div
          class="flex items-center bg-white overflow-hidden mx-auto"
          style="border-radius: 999px; border: 1px solid #E5E7EB; max-width: 480px;"
          :dir="t.dir"
        >
          <input
            type="email"
            :placeholder="t.blogPage.newsletter.placeholder"
            class="flex-1 px-5 py-3 text-[13.5px] text-[#0F1B2D] placeholder-[#9CA3AF] outline-none bg-transparent"
          />
          <button
            class="flex-shrink-0 px-5 py-3 text-white text-[13px] font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            style="background: #44BFAD; border-radius: 999px; margin: 3px;"
          >
            {{ t.blogPage.newsletter.btn }}
            <!-- Paper plane / send icon -->
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>

        <!-- Stats -->
        <div class="flex items-center justify-center gap-10 mt-10">
          <div v-for="stat in t.blogPage.newsletter.stats" :key="stat.label" class="text-center">
            <p class="font-bold text-[#0F1B2D] text-[1.3rem]">
              <template v-if="locale === 'ar'">
                {{ stat.value.replace('+', '') }}+
              </template>
              <template v-else>
                {{ stat.value }}
              </template>
            </p>
            <p class="text-[#6B7280] text-[12.5px] mt-0.5">{{ stat.label }}</p>
          </div>
        </div>

      </div>
    </section>

    <!-- Footer -->
    <HomeFooter :t="t" />
  </div>
</template>
