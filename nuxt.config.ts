export default defineNuxtConfig({
  ssr: true,
  nitro: {
    compressPublicAssets: false,
  },
  devtools: { enabled: true },
  alias: {
    "@": "/<rootDir>",
  },
  css: ["~/assets/scss/main.css", "~/static/leaflet.css"],
  modules: [
    "nuxt3-leaflet",
    "@nuxt/image",
    "nuxt-purgecss",
    [
      "nuxt-mail",
      {
        message: {
          from: "lamazeguillaume@hotmail.fr",
          to: "krakounscth@yahoo.fr",
        },
        smtp: {
          host: "smtp-relay.brevo.com",
          port: 465,
          secure: true,
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
