// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        },
      ],
      title: "Raghav's Portfolio",
      meta: [
        { name: "description", content: "I build software!" },
        { name: "keywords", content: "hi,coding,tech,portfolio" },
        { name: "robots", content: "index, follow" },
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "language", content: "English" },
        { name: "author", content: "Raghav" },
      ],
    },
  },
  css: ["~/styles/main.css"],
});
