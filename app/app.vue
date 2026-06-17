<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { landingPageSeo } from "~/mocks/landing";

const siteUrl = "https://fibama.ir";
const homepageUrl = new URL(landingPageSeo.canonicalPath, siteUrl).toString();
const ogUrl = new URL(landingPageSeo.openGraph.url, siteUrl).toString();
const ogImageUrl = new URL(landingPageSeo.openGraph.image, siteUrl).toString();
const twitterImageUrl = new URL(landingPageSeo.twitter.image, siteUrl).toString();

useSeoMeta({
  title: landingPageSeo.title,
  description: landingPageSeo.description,
  keywords: landingPageSeo.keywords.join(", "),
  robots: landingPageSeo.robots,
  themeColor: landingPageSeo.themeColor,
  ogTitle: landingPageSeo.openGraph.title,
  ogDescription: landingPageSeo.openGraph.description,
  ogType: landingPageSeo.openGraph.type,
  ogLocale: landingPageSeo.openGraph.locale,
  ogSiteName: landingPageSeo.openGraph.siteName,
  ogUrl,
  ogImage: ogImageUrl,
  ogImageAlt: landingPageSeo.openGraph.imageAlt,
  twitterCard: landingPageSeo.twitter.card,
  twitterTitle: landingPageSeo.twitter.title,
  twitterDescription: landingPageSeo.twitter.description,
  twitterImage: twitterImageUrl,
  twitterImageAlt: landingPageSeo.twitter.imageAlt,
});

useHead({
  htmlAttrs: {
    lang: "fa",
    dir: "rtl",
  },
  link: [
    {
      rel: "canonical",
      href: homepageUrl,
    },
    {
      rel: "icon",
      type: landingPageSeo.favicon.type,
      sizes: landingPageSeo.favicon.sizes,
      href: landingPageSeo.favicon.href,
    },
  ],
});
</script>
