<template>
  <section class="overflow-hidden py-12 md:py-16 lg:py-20">
    <div class="site-container">
      <div
        class="grid min-w-0 items-center gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14"
      >
        <div class="min-w-0">
          <div class="mb-10 text-right">
            <h2 class="text-3xl font-extrabold text-base-black">
              چرا پلتفرم ما؟
            </h2>
            <p class="mt-4 text-secondary font-bold text-2xl">
              تجربه‌ای فراتر از جستجو
            </p>
          </div>

          <div class="mx-auto grid w-full min-w-0 gap-4 grid-cols-2 lg:gap-4">
            <UiFeatureCard
              v-for="feature in features"
              :key="feature.number"
              v-bind="feature"
            />
          </div>
        </div>

        <div
          class="relative mx-auto min-h-[390px] w-full max-w-[430px] max-lg:order-last md:min-h-[440px] max-md:mt-8 max-md:flex max-md:min-h-0 max-md:max-w-[390px] max-md:flex-row-reverse max-md:items-end max-md:justify-center max-md:gap-3"
          aria-label="نمایی از اپلیکیشن فی باما"
        >
          <div
            class="absolute h-[360px] w-[220px] lg:right-6 lg:h-[380px] lg:w-[235px] max-md:relative max-md:h-auto max-md:w-[calc(50%_-_6px)] max-md:max-w-[180px] max-md:shrink-0"
          >
            <UiMockPhone variant="login" />
          </div>

          <div
            class="absolute left-1/2 top-8 w-[220px] -translate-x-1/2 md:left-10 md:top-12 md:w-[225px] md:translate-x-0 lg:left-0 max-md:relative max-md:left-auto max-md:top-auto max-md:w-[calc(50%_-_6px)] max-md:max-w-[180px] max-md:shrink-0 max-md:translate-x-0"
          >
            <UiMockPhone class="max-md:hidden" variant="list" />
            <UiMockPhone class="md:hidden" variant="list" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { toPersianDigits } from "~/utils/persianDigits";

const features = [
  {
    number: toPersianDigits(1),
    title: "دسترسی آسان:",
    description: "دسترسی بدون وقفه به قیمت تمام برندها در هر زمان و مکان.",
  },
  {
    number: toPersianDigits(2),
    title: "جستجوی هوشمند:",
    description:
      "با فیلترهای دقیق، محصول مورد نظرتان را سریع‌تر از همیشه پیدا کنید.",
  },
  {
    number: toPersianDigits(3),
    title: "بروزرسانی خودکار:",
    description:
      "خداحافظی با لیست‌قیمت‌های قدیمی، آخرین تغییرات همیشه در دسترس شماست.",
  },
  {
    number: toPersianDigits(4),
    title: "نظم و یکپارچگی:",
    description: "تمامی کاتالوگ‌های پراکنده در یک فضای منظم و متمرکز.",
  },
];
</script>
