export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": "/<rootDir>",
  },
  css: ["~/assets/scss/main.scss"],
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
    },
  },
});
