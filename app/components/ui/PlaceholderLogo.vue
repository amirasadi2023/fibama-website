<template>
  <div class="flex items-center justify-center gap-3 text-[#c9ced6]">
    <span
      class="grid size-9 place-items-center rounded-full border-4 border-current/40"
      aria-hidden="true"
    >
      <span class="size-3 rounded-full bg-current/50" />
    </span>
    <span class="text-lg font-extrabold tracking-normal">
      {{ label }}
    </span>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label?: string;
  }>(),
  {
    label: "logoipsum",
  },
);
</script>
