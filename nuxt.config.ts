// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    preload: true,
    prefetch: true,
    preconnect: true,
    families: {
      Cookie: [100, 300, 400, 700],
      Roboto: [100, 300, 400, 700],
    },
  },
});
