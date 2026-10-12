export default defineNuxtConfig({
  compatibilityDate: '2026-10-12',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  // Set /egvolts/ during Pages builds; local development stays at /.
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'EGVolts — Electrical installation & service',
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'description', content: 'Meet EGVolts. Explore electrical installation, lighting, maintenance, and repair project examples, and get in touch directly.' }],
    },
  },
  nitro: { preset: 'static' },
})
