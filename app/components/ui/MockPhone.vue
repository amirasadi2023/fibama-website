<template>
  <div class="relative">
    <img
      :src="mockupSrc"
      alt=""
      class="block h-auto w-full select-none"
      draggable="false"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "hero" | "list" | "login";
  }>(),
  {
    variant: "list",
  },
);

const { variant } = toRefs(props);

const mockupSrc = computed(() =>
  variant.value === "login"
    ? "/images/hero/mockup-img-login.png"
    : "/images/hero/mockup-img-mobile-2.png",
);
</script>
