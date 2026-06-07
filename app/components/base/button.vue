<template>
  <component
    :is="tagName"
    :type="href ? undefined : type"
    :href="href && !isDisabled ? href : undefined"
    :target="href ? target : undefined"
    :class="className"
    :disabled="href ? undefined : isDisabled"
    :aria-disabled="href && isDisabled ? 'true' : undefined"
    :aria-busy="loading || undefined"
    :tabindex="href && isDisabled ? -1 : undefined"
  >
    <span v-if="icon === 'user'" :class="iconClassName" aria-hidden="true">
      <BaseIconUser class="size-full" />
    </span>
    <slot />
  </component>
</template>

<script setup lang="ts">
import BaseIconUser from "~/components/base/icon/User.vue";

type ButtonVariant = "primary" | "solid" | "outline" | "soft-outline";
type ButtonColor = "primary" | "secondary" | "accent";
type ButtonSize = "sm" | "md";
type ButtonIcon = "user";
type ButtonStyleVariant = Exclude<ButtonVariant, "primary">;

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    icon?: ButtonIcon;
    iconOnly?: boolean;
    loading?: boolean;
    disabled?: boolean;
    href?: string;
    target?: string;
    type?: "button" | "submit" | "reset";
  }>(),
  {
    variant: "outline",
    color: "primary",
    size: "md",
    icon: undefined,
    iconOnly: false,
    loading: false,
    disabled: false,
    href: undefined,
    target: undefined,
    type: "button",
  },
);

const isDisabled = computed(() => props.disabled || props.loading);
const tagName = computed(() => (props.href ? "a" : "button"));

const className = computed(() => {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] border font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:shadow-none";
  const disabledClass = isDisabled.value
    ? "pointer-events-none shadow-none"
    : "";

  const sizes: Record<ButtonSize, string> = {
    sm: "min-h-10 px-4 text-sm",
    md: "min-h-12 max-md:min-h-10 px-6 max-md:px-4 text-base",
  };

  const iconSizes: Record<ButtonSize, string> = {
    sm: "size-10 p-0",
    md: "size-12 p-0",
  };

  const variants: Record<ButtonColor, Record<ButtonStyleVariant, string>> = {
    primary: {
      solid:
        "border-primary bg-primary text-white shadow-[0_12px_26px_rgba(85,170,53,0.18)] hover:border-primary-dark hover:bg-primary-dark focus-visible:outline-primary disabled:border-primary/35 disabled:bg-primary/35 disabled:text-white",
      outline:
        "border-primary bg-white text-primary hover:bg-primary-soft focus-visible:outline-primary disabled:border-primary/35 disabled:text-primary/45",
      "soft-outline":
        "border-primary bg-primary/10 text-primary hover:bg-white focus-visible:outline-primary disabled:border-primary/30 disabled:bg-primary-soft/70 disabled:text-primary/45",
    },
    secondary: {
      solid:
        "border-secondary bg-secondary text-white shadow-[0_14px_32px_rgba(8,120,155,0.22)] hover:border-secondary-dark hover:bg-secondary-dark focus-visible:outline-secondary disabled:border-secondary/35 disabled:bg-secondary/35 disabled:text-white",
      outline:
        "border-secondary bg-white text-secondary hover:bg-secondary-soft focus-visible:outline-secondary disabled:border-secondary/35 disabled:text-secondary/45",
      "soft-outline":
        "border-secondary bg-secondary-soft text-secondary hover:bg-white focus-visible:outline-secondary disabled:border-secondary/30 disabled:bg-secondary-soft/70 disabled:text-secondary/45",
    },
    accent: {
      solid:
        "border-accent bg-accent text-white shadow-[0_14px_32px_rgba(8,120,155,0.22)] hover:border-accent-dark hover:bg-accent-dark focus-visible:outline-accent disabled:border-accent/35 disabled:bg-accent/35 disabled:text-white",
      outline:
        "border-accent bg-white text-accent hover:bg-secondary-soft focus-visible:outline-accent disabled:border-accent/35 disabled:text-accent/45",
      "soft-outline":
        "border-accent bg-secondary-soft text-accent hover:bg-white focus-visible:outline-accent disabled:border-accent/30 disabled:bg-secondary-soft/70 disabled:text-accent/45",
    },
  };
  const variant = props.variant === "primary" ? "solid" : props.variant;

  return [
    base,
    disabledClass,
    props.iconOnly ? iconSizes[props.size] : sizes[props.size],
    variants[props.color][variant],
  ].join(" ");
});

const iconClassName = computed(() => {
  const sizes: Record<ButtonSize, string> = {
    sm: "size-5",
    md: "size-6",
  };

  return ["grid shrink-0 place-items-center", sizes[props.size]].join(" ");
});
</script>
