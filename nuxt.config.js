export default {
  target: 'static',

  server: {
    host: '0' // default: localhost
  },

// Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Format Digital – Web Design and Development Agency in Christchurch',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/global.scss'],

  build: {
    transpile: ["THREE"],
    postcss: {
      plugins: {
        'postcss-custom-properties': false,
        'postcss-preset-env': {
          features: {
            'custom-properties': false
          }
        } 
      }
    }
  },

  generate: {
    minify: { 
      removeRedundantAttributes: false
    }
  },

  buildModules: ['nuxt-gsap-module'],

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },
}