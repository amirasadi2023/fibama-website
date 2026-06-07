<template>
  <details
    class="group rounded-[10px] border border-line bg-white px-5 py-4 shadow-[0_18px_60px_rgb(15_23_42/0.06)] open:border-primary/30"
    :open="open"
  >
    <summary class="flex cursor-pointer list-none items-center gap-4">
      <span
        class="grid size-8 shrink-0 place-items-center rounded-full bg-primary-soft text-sm font-extrabold text-primary"
      >
        {{ toPersianDigits(number) }}
      </span>
      <span class="grow text-sm font-bold text-ink md:text-base">
        {{ question }}
      </span>
      <span
        class="grid size-8 shrink-0 place-items-center rounded-full text-muted transition group-open:rotate-180"
        aria-hidden="true"
      >
        <BaseIconChevronDown class="size-4" />
      </span>
    </summary>
    <p class="mt-4 border-t border-line pt-4 text-sm leading-8 text-accent">
      {{ answer }}
    </p>
  </details>
</template>

<script setup lang="ts">
import BaseIconChevronDown from "~/components/base/icon/ChevronDown.vue";
import { toPersianDigits } from "~/utils/persianDigits";

defineProps<{
  number: string;
  question: string;
  answer: string;
  open?: boolean;
}>();
</script>
