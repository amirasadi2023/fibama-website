<template>
  <section class="pb-12 pt-4 md:pb-16 md:pt-16">
    <div class="site-container">
      <div
        class="relative rounded-xl max-md:rounded-2xl bg-secondary/10 px-5 py-8 max-md:pb-0 shadow-[0_18px_60px_rgb(15_23_42/0.06)] sm:px-8 md:min-h-[270px] md:pl-[290px] lg:min-h-[240px] lg:px-10 lg:py-8 lg:pl-[360px] xl:pl-[410px]"
      >
        <div class="relative z-10 text-center lg:text-right">
          <div
            class="flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-start lg:gap-4"
          >
            <h2 class="text-2xl font-extrabold text-accent max-md:text-base">
              مشکلی یا سوالی داری؟ با ما در ارتباط باش
            </h2>
            <span class="hidden h-5 w-px bg-accent lg:block" />
            <div class="flex items-baseline justify-center gap-2 max-md:hidden">
              <span class="font-extrabold text-secondary text-2xl"
                >پشتیبانی:</span
              >
              <a
                class="font-extrabold text-4xl text-primary"
                :href="supportContactInfo.phone.href"
                :aria-label="supportContactInfo.phone.ariaLabel"
                :dir="supportContactInfo.phone.dir"
              >
                {{ supportContactInfo.phone.label }}
              </a>
            </div>
          </div>
          <p
            class="mt-5 text-xl font-bold leading-11 text-secondary lg:max-w-2xl max-md:text-sm max-md:leading-7 max-md:mt-3"
          >
            ما اینجا هستیم تا به شما کمک کنیم. لطفاً مشکل یا سوال خود را به طور
            کامل شرح دهید تا بتوانیم در اسرع وقت به شما پاسخ دهیم. تیم پشتیبانی
            ما در ساعات کاری آماده پاسخگویی است.
          </p>
          <div class="flex items-baseline justify-center gap-2 lg:hidden">
            <span class="font-extrabold text-secondary text-2xl max-md:text-xl"
              >پشتیبانی:</span
            >
            <a
              class="font-extrabold text-4xl text-primary max-md:text-2xl"
              :href="supportContactInfo.phone.href"
              :aria-label="supportContactInfo.phone.ariaLabel"
              :dir="supportContactInfo.phone.dir"
            >
              {{ supportContactInfo.phone.label }}
            </a>
          </div>

          <form
            class="mt-6 grid gap-3 md:grid-cols-[1fr_1fr_150px] lg:max-w-2xl grid-cols-2"
          >
            <label class="block text-right text-base text-secondary font-bold">
              نام و نام خانوادگی
              <input
                class="mt-2 min-h-12 w-full rounded-lg border border-line bg-white px-4 text-sm text-ink outline-none transition focus:border-primary"
                type="text"
              />
            </label>
            <label class="block text-right text-base text-secondary font-bold">
              شماره تماس شما
              <input
                class="mt-2 min-h-12 w-full rounded-lg border border-line bg-white px-4 text-sm text-ink outline-none transition focus:border-primary"
                type="tel"
              />
            </label>
            <BaseButton
              class="min-w-36 self-end max-md:col-span-2"
              variant="soft-outline"
              size="md"
            >
              ثبت درخواست
            </BaseButton>
          </form>
        </div>
        <img
          class="pointer-events-none mx-auto mt-6 h-64 w-auto object-contain object-bottom sm:h-72 md:absolute md:bottom-0 md:left-8 md:h-96 md:w-96"
          src="/images/user/support-user.png"
          alt="پشتیبان فی باما"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { supportContactInfo } from "~/mocks/landing";
</script>
