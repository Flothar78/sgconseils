export default defineNuxtConfig({
  ssr: true,
  nitro: {
    compressPublicAssets: false,
  },
  devtools: { enabled: true },
  alias: {
    "@": "/<rootDir>",
  },
  css: ["~/assets/scss/main.css"],
  modules: [
    "nuxt3-leaflet",
    "@nuxt/image",
    "nuxt-purgecss",
    [
      "nuxt-mail",
      {
        message: {
          to: "krakounscth@gmail.com",
        },
        smtp: {
          host: "smtp-relay.brevo.com",
          port: 465,
          auth: {
            user: "lamazeguillaume@hotmail.fr",
            pass: process.env.SMTP_KEY,
          },
        },
      },
    ],
  ],
  app: {
    head: {
      title: "SG Conseils",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ],
      htmlAttrs: {
        lang: "fr",
      },
    },
  },
});
