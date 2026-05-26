<script setup lang="ts">
import type { Translations, LocaleKey } from "~/composables/useLocale";

const props = defineProps<{
  locale: LocaleKey;
  t: Translations;
}>();

const route = useRoute();
const isMenuOpen = ref(false);

const navItems = computed(() => [
  {
    key: "home",
    label: props.t.nav.home,
    path: `/${props.locale}`,
    dropdown: false,
  },
  {
    key: "features",
    label: props.t.nav.features,
    path: `/${props.locale}/features`,
    dropdown: false,
  },
  {
    key: "pricing",
    label: props.t.nav.pricing,
    path: `/${props.locale}/pricing`,
    dropdown: false,
  },
  {
    key: "templates",
    label: props.t.nav.templates,
    path: `/${props.locale}/templates`,
    dropdown: false,
  },
  {
    key: "integrations",
    label: props.t.nav.integrations,
    path: `/${props.locale}/integrations`,
    dropdown: false,
  },
  {
    key: "resources",
    label: props.t.nav.resources,
    path: null as string | null,
    dropdown: true,
  },
]);

const isActive = (path: string | null) => {
  if (!path) return false;
  return route.path === path || route.path === `${path}/`;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div
    class="w-full bg-white relative"
    style="box-shadow: 0 1px 0 rgba(15, 27, 45, 0.06)"
  >
    <nav
      class="max-w-[1280px] mx-auto h-[70px] flex items-center justify-between px-4 sm:px-8"
      :dir="t.dir"
    >
      <!-- ── Logo ── -->
      <NuxtLink :to="`/${locale}`" class="shrink-0 flex items-center">
        <img
          src="/images/logo2.png"
          alt="ShopsZe"
          class="h-[28px] sm:h-[32px] w-auto"
        />
      </NuxtLink>

      <!-- ── Nav Items (desktop only) ── -->
      <ul class="hidden lg:flex items-center gap-1">
        <li
          v-for="item in navItems"
          :key="item.key"
          class="relative flex flex-col items-center"
        >
          <!-- Active dot above item -->
          <span
            v-if="isActive(item.path)"
            class="absolute -top-[8px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full"
            style="
              background: linear-gradient(180deg, #0b9e89 0%, #80eadb 100%);
            "
          />

          <!-- Linked nav item -->
          <NuxtLink
            v-if="item.path"
            :to="item.path"
            class="flex items-center gap-1 px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-200 hover:opacity-80"
            :style="isActive(item.path) ? 'color: #0B9E89;' : 'color: #0F1B2D;'"
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Dropdown trigger -->
          <button
            v-else
            class="flex items-center gap-1 px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-200 hover:opacity-80"
            style="color: #0f1b2d"
          >
            {{ item.label }}
            <svg
              class="w-3 h-3 opacity-60 mt-px"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>

      <!-- ── Desktop Actions ── -->
      <div class="hidden md:flex items-center gap-3">
        <NuxtLink
          :to="`/${t.otherLocale}`"
          class="text-[13px] font-semibold text-[#6B7280] hover:text-[#0F1B2D] transition-colors"
        >
          {{ t.lang }}
        </NuxtLink>

        <button
          class="text-[13px] font-semibold px-[18px] py-[8px] transition-colors whitespace-nowrap"
          style="border: 1px solid #e5e7eb; color: #0f1b2d; border-radius: 20px"
        >
          {{ t.nav.login }}
        </button>

        <button
          class="text-[13px] font-semibold px-[18px] py-[8px] text-white hover:opacity-90 transition-opacity whitespace-nowrap"
          style="background: #44bfad; border-radius: 20px"
        >
          {{ t.nav.startNow }}
        </button>
      </div>

      <!-- ── Mobile: language + hamburger ── -->
      <div class="flex md:hidden items-center gap-3">
        <NuxtLink
          :to="`/${t.otherLocale}`"
          class="text-[13px] font-semibold text-[#6B7280] hover:text-[#0F1B2D] transition-colors"
        >
          {{ t.lang }}
        </NuxtLink>

        <button
          class="w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
          style="background: #f3f4f6; color: #0f1b2d"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            v-if="!isMenuOpen"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            v-else
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- ── Mobile Menu Drawer ── -->
    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-[74px] left-3 right-3 z-50 bg-white p-5 flex flex-col gap-2"
      style="
        border-radius: 16px;
        box-shadow: 0px 12px 30px rgba(15, 27, 45, 0.12);
        border: 1px solid #efefef;
      "
      :dir="t.dir"
    >
      <NuxtLink
        v-for="item in navItems"
        :key="item.key"
        :to="item.path || '#'"
        class="block px-3 py-2.5 text-[14px] font-medium rounded-lg transition-colors text-start"
        :style="
          isActive(item.path)
            ? 'color: #0B9E89; background: #F0FBF8;'
            : 'color: #0F1B2D;'
        "
        @click="closeMenu"
      >
        {{ item.label }}
      </NuxtLink>

      <div class="h-px my-2 bg-[#EFEFEF]"></div>

      <button
        class="w-full text-[13px] font-semibold py-2.5 transition-colors"
        style="border: 1px solid #e5e7eb; color: #0f1b2d; border-radius: 20px"
        @click="closeMenu"
      >
        {{ t.nav.login }}
      </button>

      <button
        class="w-full text-[13px] font-semibold py-2.5 text-white hover:opacity-90 transition-opacity"
        style="background: #44bfad; border-radius: 20px"
        @click="closeMenu"
      >
        {{ t.nav.startNow }}
      </button>
    </div>
  </div>
</template>
