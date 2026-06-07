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

useHead({
  title: landingPageSeo.title,
  htmlAttrs: {
    lang: "fa-IR",
    dir: "rtl",
  },
  link: [
    {
      rel: "icon",
      type: landingPageSeo.favicon.type,
      sizes: landingPageSeo.favicon.sizes,
      href: landingPageSeo.favicon.href,
    },
    {
      rel: "canonical",
      href: landingPageSeo.canonicalPath,
    },
  ],
  meta: [
    {
      name: "description",
      content: landingPageSeo.description,
    },
    {
      name: "keywords",
      content: landingPageSeo.keywords.join(", "),
    },
    {
      name: "robots",
      content: landingPageSeo.robots,
    },
    {
      name: "theme-color",
      content: landingPageSeo.themeColor,
    },
    {
      property: "og:title",
      content: landingPageSeo.openGraph.title,
    },
    {
      property: "og:description",
      content: landingPageSeo.openGraph.description,
    },
    {
      property: "og:type",
      content: landingPageSeo.openGraph.type,
    },
    {
      property: "og:locale",
      content: landingPageSeo.openGraph.locale,
    },
    {
      property: "og:site_name",
      content: landingPageSeo.openGraph.siteName,
    },
    {
      property: "og:url",
      content: landingPageSeo.openGraph.url,
    },
    {
      property: "og:image",
      content: landingPageSeo.openGraph.image,
    },
    {
      property: "og:image:alt",
      content: landingPageSeo.openGraph.imageAlt,
    },
    {
      name: "twitter:card",
      content: landingPageSeo.twitter.card,
    },
    {
      name: "twitter:title",
      content: landingPageSeo.twitter.title,
    },
    {
      name: "twitter:description",
      content: landingPageSeo.twitter.description,
    },
    {
      name: "twitter:image",
      content: landingPageSeo.twitter.image,
    },
    {
      name: "twitter:image:alt",
      content: landingPageSeo.twitter.imageAlt,
    },
  ],
});
</script>
