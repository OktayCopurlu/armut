export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "armut",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Whatever services you need are in Armut.com" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{}],
  },
  generate: { fallback: "404.html" },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api/module",
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/apollo", "lodash", "nuxt-socket-io"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["lodash-es", "@types/lodash"],
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://armut-server.herokuapp.com/",
      },
    },
  },
  io: {
    sockets: [
      {
        url: "https://socket-io-worker.herokuapp.com/",
      },
    ],
  },
};
