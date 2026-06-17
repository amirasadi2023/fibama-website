<template>
  <main>
    <LandingHero />
    <LandingLogoStrip />
    <LandingPlatformFeatures />
    <LandingCommunityCta />
    <LandingFaqSection />
    <LandingSupportContact />
    <LandingFooter />
  </main>
</template>

<script setup lang="ts">
import { landingPageSeo } from "~/mocks/landing";

useSeoMeta({
  title: landingPageSeo.title,
  description: landingPageSeo.description,
  ogTitle: landingPageSeo.openGraph.title,
  ogDescription: landingPageSeo.openGraph.description,
});
</script>
