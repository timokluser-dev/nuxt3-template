// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/style.scss'],
  routeRules: {
    '/**': { ssr: true },
    '/app/**': { ssr: false },
  },
});
