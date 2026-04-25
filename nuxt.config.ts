// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/i18n'],
  css: ['~/assets/css/fonts.css'],
  i18n: {
    locales: [
      { code: 'th', language: 'th-TH', name: 'ภาษาไทย', file: 'th.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'th',
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
  },
})
