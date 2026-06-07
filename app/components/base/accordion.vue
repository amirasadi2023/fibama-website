<template>
  <div class="space-y-3 md:space-y-4">
    <article
      v-for="(item, index) in items"
      :key="item.id"
      :class="[
        'overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-[0_12px_34px_rgb(15_23_42/0.05)] transition-colors duration-200',
        item.disabled ? 'opacity-60' : '',
      ]"
    >
      <button
        type="button"
        class="flex min-h-[54px] w-full items-center gap-3 px-2 py-4 max-md:py-2 text-right transition-colors duration-200 disabled:cursor-not-allowed sm:min-h-[62px] sm:gap-4 sm:px-5"
        :aria-expanded="isOpen(item)"
        :aria-controls="panelId(item)"
        :id="triggerId(item)"
        :disabled="item.disabled"
        @click="toggleItem(item)"
      >
        <slot name="leading" :item="item" :index="index">
          <span
            v-if="item.badge"
            class="grid size-10 max-md:size-8 max-md:text-xl shrink-0 place-items-center rounded-full bg-[#F2F3ED] text-[26px] font-extrabold text-accent"
          >
            {{ toPersianDigits(item.badge) }}
          </span>
        </slot>

        <span
          :class="[
            'grow text-2xl max-md:text-base font-bold text-secondary  transition-colors duration-200',
            // isOpen(item) ? 'text-ink' : 'text-muted',
          ]"
        >
          <slot name="title" :item="item" :index="index">
            {{ item.title }}
          </slot>
        </span>

        <span
          :class="[
            'hidden size-10 shrink-0 place-items-center self-center text-[#cfd2d6] transition-transform duration-300 md:grid',
            isOpen(item) ? 'rotate-180' : 'rotate-0',
          ]"
          aria-hidden="true"
        >
          <BaseIconChevronDown class="size-8" :stroke-width="1.7" />
        </span>
      </button>

      <div
        :id="panelId(item)"
        role="region"
        :aria-labelledby="triggerId(item)"
        :aria-hidden="!isOpen(item)"
        :class="[
          'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
          isOpen(item)
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0',
        ]"
      >
        <div class="overflow-hidden">
          <div
            class="pb-4 pl-3 pr-17 max-md:pr-12 text-right text-xl font-bold text-accent max-md:text-sm"
          >
            <slot name="content" :item="item" :index="index">
              {{ item.content }}
            </slot>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import BaseIconChevronDown from "~/components/base/icon/ChevronDown.vue";
import type { AccordionItem, AccordionItemId } from "~/types/accordion.types";
import { toPersianDigits } from "~/utils/persianDigits";

const props = defineProps<{
  items: AccordionItem[];
  openId?: AccordionItemId | null;
  defaultOpenId?: AccordionItemId | null;
}>();

const emit = defineEmits<{
  "update:openId": [value: AccordionItemId | null];
  change: [value: AccordionItemId | null];
}>();

const internalOpenId = ref<AccordionItemId | null>(getInitialOpenId());

const activeOpenId = computed(() =>
  props.openId !== undefined ? props.openId : internalOpenId.value,
);

watch(
  () => [props.items, props.defaultOpenId] as const,
  () => {
    if (props.openId !== undefined) {
      return;
    }

    const hasActiveItem = props.items.some(
      (item) => item.id === activeOpenId.value,
    );

    if (!hasActiveItem) {
      internalOpenId.value = getInitialOpenId();
    }
  },
  { immediate: true },
);

function getInitialOpenId() {
  if (props.defaultOpenId !== undefined) {
    return props.defaultOpenId;
  }

  return (
    props.items.find((item) => item.defaultOpen)?.id ??
    props.items[0]?.id ??
    null
  );
}

function isOpen(item: AccordionItem) {
  return activeOpenId.value === item.id;
}

function toggleItem(item: AccordionItem) {
  if (item.disabled) {
    return;
  }

  const nextOpenId = isOpen(item) ? null : item.id;

  if (props.openId === undefined) {
    internalOpenId.value = nextOpenId;
  }

  emit("update:openId", nextOpenId);
  emit("change", nextOpenId);
}

function panelId(item: AccordionItem) {
  return `accordion-panel-${item.id}`;
}

function triggerId(item: AccordionItem) {
  return `accordion-trigger-${item.id}`;
}
</script>
