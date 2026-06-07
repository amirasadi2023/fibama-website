<template>
  <footer id="site-footer" class="mt-10 border-t border-accent bg-white">
    <div class="site-container">
      <div class="pt-8 pb-4 md:pt-9 lg:pb-4">
        <div
          dir="ltr"
          class="grid relative items-center gap-6 lg:grid-cols-[minmax(0,1fr)_208px] lg:gap-7"
        >
          <p
            dir="rtl"
            class="order-2 relative mx-auto text-sm font-bold leading-8 text-secondary lg:order-0 lg:mx-0 lg:pt-1 lg:text-base lg:leading-6"
          >
            {{ footerContent.intro }}

            <span
              class="absolute w-px hidden lg:block h-full bg-secondary/40 -right-3 top-0"
              aria-hidden="true"
            ></span>
          </p>

          <NuxtLink
            :to="footerBrandLink.href"
            class="order-1 flex items-center justify-end lg:order-none lg:justify-start"
            :aria-label="footerBrandLink.ariaLabel"
          >
            <img
              :src="footerBrandLink.logo.src"
              :alt="footerBrandLink.logo.alt"
              class="h-[68px] w-auto shrink-0 object-contain md:h-[72px]"
              :width="footerBrandLink.logo.width"
              :height="footerBrandLink.logo.height"
            />
          </NuxtLink>
        </div>

        <div
          class="relative mt-7 hidden h-px bg-secondary/25 before:absolute before:-right-0.5 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-secondary/40 after:absolute after:-left-0.5 after:top-1/2 after:size-1 after:-translate-y-1/2 after:rounded-full after:bg-secondary/40 lg:block"
          aria-hidden="true"
        />
      </div>

      <div class="pb-7 md:pb-6">
        <section class="pt-5 lg:pt-5">
          <div
            class="flex items-center justify-start gap-2 text-base font-extrabold text-accent md:text-lg"
          >
            <span
              class="grid size-8 place-items-center rounded-[8px] bg-accent/15 text-accent md:size-9"
              aria-hidden="true"
            >
              <BaseIconPhone class="size-5" />
            </span>
            <h3>{{ footerContent.sectionTitles.contact }}</h3>
          </div>

          <ul
            class="mt-7 flex flex-col gap-5 text-sm font-bold leading-6 text-secondary sm:grid-cols-2 lg:mt-9 lg:flex-row lg:items-center lg:justify-between lg:gap-7 lg:text-sm"
          >
            <li
              v-for="item in footerContactItems"
              :key="item.icon"
              class="flex min-w-0 items-center justify-start gap-2 text-right"
              :class="footerContactOrderClasses[item.icon]"
            >
              <component
                :is="footerContactIconComponents[item.icon]"
                class="size-4 shrink-0 text-base-black"
              />

              <div
                v-if="item.links?.length"
                class="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1"
                dir="ltr"
              >
                <template
                  v-for="(link, linkIndex) in item.links"
                  :key="link.href"
                >
                  <a
                    class="transition hover:text-accent"
                    :href="link.href"
                    :aria-label="link.ariaLabel"
                    :dir="link.dir"
                  >
                    {{ link.label }}
                  </a>
                  <span
                    v-if="linkIndex < item.links.length - 1"
                    class="text-base-black"
                    aria-hidden="true"
                  >
                    |
                  </span>
                </template>
              </div>

              <a
                v-else-if="item.href"
                class="min-w-0 transition hover:text-accent"
                :href="item.href"
                :dir="item.dir"
              >
                {{ item.label }}
              </a>
              <span v-else class="min-w-0" :dir="item.dir">
                {{ item.label }}
              </span>
            </li>
          </ul>
        </section>

        <div
          class="mt-7 grid gap-9 lg:mt-7 lg:grid-cols-2 lg:items-start lg:gap-8"
        >
          <section>
            <div
              class="flex items-center justify-start gap-2 text-base font-extrabold text-accent md:text-lg"
            >
              <span
                class="grid size-8 place-items-center rounded-[8px] bg-accent/15 text-accent md:size-9"
                aria-hidden="true"
              >
                <BaseIconLink class="size-5" />
              </span>
              <h3>{{ footerContent.sectionTitles.downloads }}</h3>
            </div>

            <ul
              class="mt-7 flex flex-wrap items-center justify-center gap-4 lg:justify-start lg:gap-10"
            >
              <li v-for="link in footerDownloadLinks" :key="link.label">
                <a
                  :href="link.href"
                  :target="link.target"
                  :rel="link.rel"
                  class="block rounded-[8px] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  :aria-label="link.ariaLabel"
                >
                  <img
                    :src="link.image"
                    :alt="link.imageAlt"
                    class="w-full h-auto"
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </section>
          <section class="grid gap-7 lg:flex lg:flex-col lg:gap-x-8 lg:gap-y-0">
            <div
              class="flex justify-start gap-2 text-base font-extrabold text-accent md:text-lg"
            >
              <span
                class="grid size-8 place-items-center rounded-[8px] bg-accent/15 text-accent md:size-9"
                aria-hidden="true"
              >
                <BaseIconShieldCheck class="size-5" />
              </span>
              <h3>{{ footerContent.sectionTitles.trustSeals }}</h3>
            </div>

            <ul
              class="flex flex-wrap items-start justify-end gap-4 sm:gap-8 lg:col-start-1 lg:row-start-2 lg:justify-end lg:gap-9"
            >
              <li v-for="seal in resolvedFooterTrustSeals" :key="seal.label">
                <a
                  :href="seal.href"
                  :target="seal.target"
                  :rel="seal.rel"
                  :aria-label="seal.ariaLabel"
                  class="block transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <img
                    :src="seal.image"
                    :alt="seal.imageAlt"
                    :width="seal.imageWidth"
                    :height="seal.imageHeight"
                    class="h-24 w-auto object-contain md:h-20 lg:h-[94px]"
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>

    <div class="bg-accent py-4 text-white">
      <div class="site-container flex items-center justify-between gap-4">
        <p
          class="max-w-[250px] text-right text-sm font-extrabold leading-7 sm:max-w-none sm:text-base"
        >
          {{ footerContent.copyright }}
        </p>

        <div class="flex shrink-0 items-center gap-2" dir="ltr">
          <a
            v-for="link in footerSocialLinks"
            :key="link.icon"
            :href="link.href"
            :target="link.target"
            class="grid size-10 place-items-center rounded-lg border border-secondary text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            :aria-label="link.ariaLabel"
          >
            <component
              :is="footerSocialIconComponents[link.icon]"
              class="size-4"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { Component } from "vue";

import BaseIconClock from "~/components/base/icon/Clock.vue";
import BaseIconEmail from "~/components/base/icon/Email.vue";
import BaseIconInstagram from "~/components/base/icon/Instagram.vue";
import BaseIconLink from "~/components/base/icon/Link.vue";
import BaseIconLocation from "~/components/base/icon/Location.vue";
import BaseIconPhone from "~/components/base/icon/Phone.vue";
import BaseIconShieldCheck from "~/components/base/icon/ShieldCheck.vue";
import BaseIconTelegram from "~/components/base/icon/Telegram.vue";
import BaseIconWhatsapp from "~/components/base/icon/Whatsapp.vue";
import type {
  FooterContactItem,
  FooterSocialLink,
  FooterTrustSeal,
} from "~/mocks/landing";
import {
  footerBrandLink,
  footerContactItems,
  footerContent,
  footerDownloadLinks,
  footerSocialLinks,
  footerTrustSeals,
} from "~/mocks/landing";

const footerContactIconComponents: Record<
  FooterContactItem["icon"],
  Component
> = {
  phone: BaseIconPhone,
  email: BaseIconEmail,
  location: BaseIconLocation,
  clock: BaseIconClock,
};

const footerContactOrderClasses: Record<FooterContactItem["icon"], string> = {
  phone: "lg:order-1",
  email: "lg:order-2",
  clock: "lg:order-3",
  location: "lg:order-4",
};

const footerSocialIconComponents: Record<FooterSocialLink["icon"], Component> =
  {
    instagram: BaseIconInstagram,
    whatsapp: BaseIconWhatsapp,
    telegram: BaseIconTelegram,
  };

const getTagAttribute = (
  tag: FooterTrustSeal["tag"],
  elementName: "a" | "img",
  attributeName: string,
) => {
  if (!tag) {
    return undefined;
  }

  const elementMatch = tag.match(new RegExp(`<${elementName}\\b[^>]*>`, "i"));

  if (!elementMatch) {
    return undefined;
  }

  const attributeMatch = elementMatch[0].match(
    new RegExp(
      `\\b${attributeName}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
      "i",
    ),
  );

  return attributeMatch?.[1] ?? attributeMatch?.[2] ?? attributeMatch?.[3];
};

const resolvedFooterTrustSeals = computed(() =>
  footerTrustSeals.map((seal) => {
    const href = seal.href ?? getTagAttribute(seal.tag, "a", "href") ?? "/";
    const target = seal.target ?? getTagAttribute(seal.tag, "a", "target");
    const referrerPolicy =
      seal.referrerPolicy ??
      getTagAttribute(seal.tag, "a", "referrerpolicy") ??
      getTagAttribute(seal.tag, "img", "referrerpolicy");
    const image = seal.image ?? getTagAttribute(seal.tag, "img", "src") ?? "";
    const imageAlt =
      seal.imageAlt ?? getTagAttribute(seal.tag, "img", "alt") ?? seal.label;

    return {
      ...seal,
      href,
      target,
      referrerPolicy,
      image,
      imageAlt,
    };
  }),
);
</script>
