<template>
  <section id="faq" class="py-10 md:py-16">
    <div class="site-container">
      <h2 class="mb-5 text-center text-3xl font-extrabold max-md:text-xl">
        سوالات متداول
      </h2>
      <BaseAccordion :items="resolvedItems" class="mx-auto" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { landingFaqItems } from "~/mocks/landing";
import type { AccordionItem } from "~/types/accordion.types";

const props = withDefaults(
  defineProps<{
    items?: AccordionItem[];
  }>(),
  {
    items: undefined,
  },
);

const resolvedItems = computed(() =>
  props.items?.length ? props.items : landingFaqItems,
);
</script>
