// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  css: ["~/assets/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "sk"
      },
      title: "Drevo Spiš",
      meta: [
        { name: "title", content: "Drevo Spiš" },
        { name: "description", content: "" },
        { name: "keywords", content: "drevo, drevo Spišská Nová Ves, drevo spiš, palivove drevo" }
      ]
    }
  }
})
