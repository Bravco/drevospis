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
        { name: "description", content: "Kvalitné, suché palivové drevo zo Spiša za výhodné ceny. Ponúkame výhrevné drevo na paletách s možnosťou dovozu v Spišskej Novej Vsi a okolí. Objednajte ešte dnes!" },
        { name: "keywords", content: "palivové drevo, drevo Spiš, palivové drevo Spišská Nová Ves, suché drevo, drevo na paletách, predaj dreva, dovoz dreva, Drevo Spiš" }
      ]
    }
  }
})
