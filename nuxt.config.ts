// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

const sourcemapPluginWarning = "Sourcemap is likely to be incorrect";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  sourcemap: {
    client: false,
    server: false,
  },
  css: ["~/assets/main.css"],

  vite: {
    build: {
      sourcemap: false,
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.message?.includes(sourcemapPluginWarning)) {
            return;
          }

          warn(warning);
        },
      },
    },
    css: {
      devSourcemap: false,
    },
    plugins: [tailwindcss()],
  },
});
