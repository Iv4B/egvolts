export default defineNuxtConfig({
  compatibilityDate: '2026-10-12',
  devtools: { enabled: true },
  // Set /egvolts/ during Pages builds; local development stays at /.
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'EG Volts',
      htmlAttrs: { lang: 'en' },
      meta: [{ name: 'description', content: 'Welcome to EG Volts.' }],
    },
  },
  nitro: { preset: 'static' },
})
