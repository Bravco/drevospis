// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/main.css"],
  runtimeConfig: {
    public: {
      WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "sk"
      },
      title: "Drevo Spiš",
      meta: [
        { name: "title", content: "Drevo Spiš" },
        { name: "description", content: "Suché, poctivo pripravené palivové drevo priamo od nás – kvalitné, výhrevné a dovezené až k vám." },
        { name: "keywords", content: "palivové drevo, drevo Spiš, palivové drevo Spišská Nová Ves, suché drevo, drevo na paletách, predaj dreva, dovoz dreva, Drevo Spiš" }
      ]
    }
  }
})
