<script setup lang="ts">
const brands = [
  { src: "/images/b1.png", alt: "Samsung" },
  { src: "/images/b2.png", alt: "Apple" },
  { src: "/images/b3.png", alt: "Adidas" },
  { src: "/images/b4.png", alt: "Nike" },
  { src: "/images/b5.png", alt: "Sony" },
  { src: "/images/b6.png", alt: "LG" },
  { src: "/images/b7.png", alt: "Canon" },
  { src: "/images/b8.png", alt: "Nikon" },
  { src: "/images/b9.png", alt: "Asus" },
];
</script>

<template>
  <section class="w-full relative overflow-hidden" style="background: #1f1f1f">
    <div class="max-w-[1280px] mx-auto px-6 py-5">
      <ul class="flex items-center justify-between gap-6 flex-nowrap">
        <li
          v-for="(brand, i) in brands"
          :key="i"
          class="flex-1 flex items-center justify-center"
        >
          <img
            :src="brand.src"
            :alt="brand.alt"
            class="h-11 w-auto object-contain opacity-90"
            loading="lazy"
          />
        </li>
      </ul>
    </div>

    <!-- Right gradient fade -->
    <div
      class="pointer-events-none absolute top-0 right-0 h-full w-32"
      style="
        background: linear-gradient(
          to left,
          rgba(31, 31, 31, 0.95) 0%,
          rgba(31, 31, 31, 0) 100%
        );
      "
    ></div>
  </section>
</template>
