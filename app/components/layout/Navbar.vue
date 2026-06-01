<script setup lang="ts">
import type { Translations, LocaleKey } from "~/composables/useLocale";

const props = defineProps<{
  locale: LocaleKey;
  t: Translations;
}>();

const route = useRoute();
const isMenuOpen = ref(false);
const resourcesOpen = ref(false);
const resourcesRef = ref<HTMLElement | null>(null);

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

const isResourcesActive = computed(() =>
  props.t.nav.resourcesDropdown.some(
    (item) => route.path === `/${props.locale}${item.path}` || route.path === `/${props.locale}${item.path}/`
  )
);

const isDropdownItemActive = (itemPath: string) =>
  route.path === `/${props.locale}${itemPath}` || route.path === `/${props.locale}${itemPath}/`;

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleOutsideClick = (e: MouseEvent) => {
  if (resourcesRef.value && !resourcesRef.value.contains(e.target as Node)) {
    resourcesOpen.value = false;
  }
};

onMounted(() => document.addEventListener("click", handleOutsideClick));
onUnmounted(() => document.removeEventListener("click", handleOutsideClick));
</script>

<template>
  <!-- 70px total height; the #083A33 pill inside is 60px, vertically centered -->
  <div class="h-[70px] flex items-center px-3 sm:px-4 w-full relative">
    <nav
      class="flex-1 h-[60px] flex items-center justify-between px-4 sm:px-7 relative"
      style="background: #083a33; border-radius: 100px"
      :dir="t.dir"
    >
      <!-- ── Logo ── -->
      <NuxtLink :to="`/${locale}`" class="shrink-0 flex items-center">
        <img
          src="/images/logo.png"
          alt="ShopsZe"
          class="h-[26px] sm:h-[30px] w-auto"
        />
      </NuxtLink>

      <!-- ── Nav Items (desktop only) ── -->
      <ul class="hidden lg:flex items-center gap-1">
        <li
          v-for="item in navItems"
          :key="item.key"
          class="relative flex flex-col items-center"
          :ref="item.dropdown ? (el) => { resourcesRef = el as HTMLElement } : undefined"
        >
          <!-- Active dot above item -->
          <span
            v-if="isActive(item.path) || (item.dropdown && isResourcesActive)"
            class="absolute -top-[8px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full"
            style="background: linear-gradient(180deg, #0b9e89 0%, #80eadb 100%);"
          />

          <!-- Linked nav item -->
          <NuxtLink
            v-if="item.path"
            :to="item.path"
            class="flex items-center gap-1 px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-200 hover:opacity-80"
            :style="
              isActive(item.path)
                ? 'background: linear-gradient(180deg, #0B9E89 0%, #80EADB 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: transparent;'
                : 'color: white;'
            "
          >
            {{ item.label }}
          </NuxtLink>

          <!-- Dropdown trigger -->
          <button
            v-else
            class="flex items-center gap-1 px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-200 hover:opacity-80"
            :style="isResourcesActive
              ? 'background: linear-gradient(180deg, #0B9E89 0%, #80EADB 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; color: transparent;'
              : 'color: white;'"
            @click.stop="resourcesOpen = !resourcesOpen"
          >
            {{ item.label }}
            <svg
              class="w-3 h-3 opacity-60 mt-px transition-transform duration-200"
              :class="resourcesOpen ? 'rotate-180' : ''"
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

          <!-- Resources Dropdown -->
          <div
            v-if="item.dropdown && resourcesOpen"
            class="absolute top-full mt-3 z-50 bg-white py-2 min-w-[180px]"
            style="border-radius: 14px; box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2); border: 1px solid #F0F0F0;"
            :class="locale === 'ar' ? 'right-0' : 'left-0'"
          >
            <NuxtLink
              v-for="(item2, i) in t.nav.resourcesDropdown"
              :key="i"
              :to="`/${locale}${item2.path}`"
              class="flex items-center px-4 py-2.5 text-[13.5px] font-medium transition-colors"
              :style="isDropdownItemActive(item2.path)
                ? 'color: #0B9E89; background: #F0FBF8;'
                : 'color: #0F1B2D;'"
              :class="isDropdownItemActive(item2.path) ? '' : 'hover:bg-[#F8FAFC] hover:text-[#0B9E89]'"
            >
              {{ item2.label }}
            </NuxtLink>
          </div>
        </li>
      </ul>

      <!-- ── Desktop Actions ── -->
      <div class="hidden md:flex items-center gap-3">
        <NuxtLink
          :to="`/${t.otherLocale}`"
          class="text-[13px] font-semibold text-white/70 hover:text-white transition-colors duration-200"
        >
          {{ t.lang }}
        </NuxtLink>

        <button
          class="text-[13px] font-semibold px-[18px] py-[8px] bg-white text-[#083A33] hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
          style="border-radius: 20px"
        >
          {{ t.nav.login }}
        </button>

        <button
          class="text-[13px] font-semibold px-[18px] py-[8px] text-white hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
          style="background: #44bfad; border-radius: 20px"
        >
          {{ t.nav.startNow }}
        </button>
      </div>

      <!-- ── Mobile: language + hamburger ── -->
      <div class="flex md:hidden items-center gap-3">
        <NuxtLink
          :to="`/${t.otherLocale}`"
          class="text-[13px] font-semibold text-white/70 hover:text-white transition-colors"
        >
          {{ t.lang }}
        </NuxtLink>

        <button
          class="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          style="background: rgba(255, 255, 255, 0.1)"
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
      class="md:hidden absolute top-[78px] left-3 right-3 z-50 p-5 flex flex-col gap-2"
      style="background: #083a33; border-radius: 20px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);"
      :dir="t.dir"
    >
      <NuxtLink
        v-for="item in navItems.filter(i => !i.dropdown)"
        :key="item.key"
        :to="item.path || '#'"
        class="block px-3 py-2.5 text-[14px] font-medium rounded-lg transition-colors text-start"
        :style="isActive(item.path) ? 'color: #80EADB; background: rgba(11,158,137,0.18);' : 'color: white;'"
        @click="closeMenu"
      >
        {{ item.label }}
      </NuxtLink>

      <!-- Resources items inline in mobile -->
      <div class="h-px my-1" style="background: rgba(255,255,255,0.08)"></div>
      <p class="px-3 text-[11px] font-semibold text-white/40 uppercase tracking-wide">{{ t.nav.resources }}</p>
      <NuxtLink
        v-for="(item2, i) in t.nav.resourcesDropdown"
        :key="i"
        :to="`/${locale}${item2.path}`"
        class="block px-3 py-2.5 text-[14px] font-medium rounded-lg transition-colors text-start text-white/80 hover:text-white"
        @click="closeMenu"
      >
        {{ item2.label }}
      </NuxtLink>

      <div class="h-px my-2" style="background: rgba(255, 255, 255, 0.08)"></div>

      <button
        class="w-full text-[13px] font-semibold py-2.5 bg-white text-[#083A33] hover:bg-white/90 transition-colors"
        style="border-radius: 20px"
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
