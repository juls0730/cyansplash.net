export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cyan Splash | Official Website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Cyan Splash | Official Website' },
      { property: 'og:description', content: 'Cyan Splashs offical website' },
      { property: 'og:url', content: 'https://cyansplash.net' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 8000,
    host: '0.0.0.0'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/SASS/main.sass', 
    '~/assets/CSS/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8'
  ],

  googleAnalytics: {
    id: 'UA-183042760-2'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  gtm: {
    id: 'GTM-WCTKDML'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://cyansplash.net'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
  postcss: {
    // Add plugin names as key and arguments as value
    // Install them before as dependencies with npm or yarn
    plugins: {
      // Disable a plugin by passing false as value
      'postcss-url': false,
      'postcss-nested': {},
      'postcss-responsive-type': {},
      'postcss-hexrgba': {},
      'postcss-import': {},
      'tailwindcss': {},
      'autoprefixer': {}
    },
    preset: {
      // Change the postcss-preset-env settings
      autoprefixer: {
        grid: true
      }
    }
  },
}
