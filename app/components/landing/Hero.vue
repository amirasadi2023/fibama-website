<template>
  <section
    class="relative overflow-hidden pb-12 max-md:pb-4 lg:pt-4 pt-10 md:pb-20"
  >
    <div class="site-container relative">
      <img
        :src="landingHeroContent.images.background.src"
        :alt="landingHeroContent.images.background.alt"
        aria-hidden="true"
        class="pointer-events-none absolute left-0 top-2 z-0 h-[620px] w-[440px] object-contain max-md:top-10 max-md:h-[430px] max-md:w-[330px] md:h-[760px] md:w-[540px] lg:-top-2 lg:h-[850px] lg:w-[610px]"
      />

      <div class="relative z-10 mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-extrabold text-base-black max-md:text-xl">
          {{ landingHeroContent.title }}
        </h1>
        <p
          class="mx-auto mt-5 font-bold text-2xl text-secondary max-md:mt-2 max-md:text-base"
        >
          {{ landingHeroContent.subtitle }}
        </p>
        <div
          class="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row max-md:hidden"
        >
          <BaseButton
            size="md"
            variant="outline"
            color="secondary"
            :href="landingHeroContent.contactButton.href"
            :target="landingHeroContent.contactButton.target"
            :aria-label="landingHeroContent.contactButton.ariaLabel"
          >
            {{ landingHeroContent.contactButton.label }}
          </BaseButton>
          <BaseButton
            :href="landingHeroContent.startButton.href"
            :target="landingHeroContent.startButton.target"
            :aria-label="landingHeroContent.startButton.ariaLabel"
            variant="soft-outline"
            size="md"
          >
            {{ landingHeroContent.startButton.label }}
          </BaseButton>
        </div>
      </div>

      <div
        class="relative z-10 mx-auto mt-6 flex w-full max-w-[700px] items-center justify-center gap-4 pb-4 sm:mt-16 sm:block sm:min-h-90 sm:pb-0"
      >
        <div
          class="relative mx-auto flex w-55 items-center justify-center after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-48 after:w-full after:bg-linear-to-t after:from-white after:from-30% after:to-transparent after:content-[''] sm:w-72"
        >
          <img
            :src="landingHeroContent.images.phoneMockup.src"
            :alt="landingHeroContent.images.phoneMockup.alt"
            class="block h-auto w-full"
          />
        </div>

        <p
          class="max-md:hidden bg-hero-note-left top-[74px] -left-35 absolute z-3 m-0 h-33 w-104 border-0 bg-transparent text-right font-extrabold text-secondary py-8 px-10 transition-all delay-160 duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:transition-none"
          :class="
            heroVisible
              ? 'translate-x-0 translate-y-0 scale-100 opacity-100 blur-0'
              : '-translate-x-5 translate-y-[18px] scale-[0.97] opacity-0 blur-sm'
          "
        >
          {{ landingHeroContent.notes.left }}
        </p>

        <p
          class="bg-hero-note-right text-base absolute z-3 m-0 py-3 px-6 w-[293px] h-[109px] border-0 bg-transparent text-right font-extrabold text-secondary transition-all delay-300 duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:transition-none md:-right-26 md:top-24 md:min-h-20 md:w-72 md:max-w-none max-md:bottom-8 max-md:-right-2 max-md:w-50 max-md:h-[74px] max-md:text-[12px]"
          :class="
            heroVisible
              ? 'translate-x-0 translate-y-0 scale-100 opacity-100 blur-0'
              : 'translate-x-5 translate-y-4 scale-[0.97] opacity-0 blur-sm'
          "
        >
          {{ landingHeroContent.notes.right }}
        </p>

        <p
          class="max-md:hidden bg-hero-note-bottom absolute top-76 right-1/2 z-3 m-0 min-h-46 w-96 pt-18 px-8 bg-transparent text-right font-extrabold text-white transition-all delay-450 duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:blur-none motion-reduce:transition-none"
          :class="
            heroVisible
              ? 'translate-y-0 scale-100 opacity-100 blur-0'
              : 'translate-y-7 scale-95 opacity-0 blur-sm'
          "
        >
          {{ landingHeroContent.notes.bottom }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { landingHeroContent } from "~/mocks/landing";

const heroVisible = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    heroVisible.value = true;
  });
});
</script>
