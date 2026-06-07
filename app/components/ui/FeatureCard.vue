<template>
  <article
    class="relative min-h-48 w-full max-md:min-h-32 min-w-0 overflow-hidden rounded-2xl border border-[#F2F2F2] bg-white px-4 py-4 max-md:px-2 max-md:py-2 shadow-[0_2px_2px_rgb(15_23_42/0.04)]"
  >
    <div class="mb-4 flex items-center justify-start gap-2">
      <span
        class="text-5xl max-md:text-3xl font-extrabold leading-none text-primary/25"
        aria-hidden="true"
      >
        {{ toPersianDigits(number) }}
      </span>
      <h3
        class="min-w-0 pt-2 text-xl font-extrabold text-primary max-md:text-base"
      >
        {{ title }}
      </h3>
    </div>
    <p
      class="relative z-10 min-w-0 text-xl font-bold text-secondary max-md:text-sm"
    >
      {{ description }}
    </p>
  </article>
</template>

<script setup lang="ts">
import { toPersianDigits } from "~/utils/persianDigits";

defineProps<{
  number: string;
  title: string;
  description: string;
}>();
</script>
