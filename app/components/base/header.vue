<template>
  <header
    class="site-container flex items-center justify-between pt-6 md:py-8 lg:pt-14"
  >
    <NuxtLink
      :to="headerContent.brand.href"
      class="inline-flex items-center"
      :aria-label="headerContent.brand.ariaLabel"
    >
      <img
        :src="headerContent.brand.logo.src"
        :alt="headerContent.brand.logo.alt"
        class="h-12 w-auto object-contain md:h-14"
        :width="headerContent.brand.logo.width"
        :height="headerContent.brand.logo.height"
      />
    </NuxtLink>

    <BaseButton
      size="md"
      variant="soft-outline"
      icon="user"
      :href="headerContent.actionLink.href"
      :target="headerContent.actionLink.target"
      :aria-label="headerContent.actionLink.ariaLabel"
    >
      {{ headerContent.actionLink.label }}
    </BaseButton>
  </header>
</template>

<script setup lang="ts">
import { headerContent } from "~/mocks/landing";
</script>
