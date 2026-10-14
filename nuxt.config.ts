export default defineNuxtConfig({
  compatibilityDate: '2026-10-12',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  // The custom domain egvolts.lv serves the site at /.
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'EGVolts — Elektroinstalācija un apkalpošana',
      htmlAttrs: { lang: 'lv' },
      meta: [{ name: 'description', content: 'Iepazīstiet EGVolts. Apskatiet elektroinstalācijas, apgaismojuma, apkopes un remonta projektu piemērus un sazinieties tieši.' }],
    },
  },
  nitro: { preset: 'static' },
})
