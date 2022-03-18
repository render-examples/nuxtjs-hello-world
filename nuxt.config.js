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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
    script: [
      // Schema.org definitions
      // { hid: 'threejs', src: '/scripts/three.min.js', async: true, defer: true },
      {
        type: 'application/ld+json', json: 
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Format Digital Limited",
          "image": "https://www.formatdigital.co.nz/og-image.png",
          "@id": "",
          "url": "https://www.formatdigital.co.nz",
          "telephone": "+64212110659",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "153 Waltham Road",
            "addressLocality": "Christchurch",
            "postalCode": "8011",
            "addressCountry": "NZ"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -43.5467512,
            "longitude": 172.6463053
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "08:30",
            "closes": "16:30"
          } 
        }
      },

      // Recaptcha
      // {
      //   hid: 'recaptcha',
      //   src: 'https://www.google.com/recaptcha/api.js',
      //   async: true, defer: true
      // }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/global.scss'],

  plugins: [
    "~/plugins/vee-validate.js",
  ],

  build: {
    transpile: [
      "vee-validate/dist/rules",
      // "THREE"
    ],

    // This stops PostCSS freaking out about CSS custom properties
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

  // Nuxt Modules
  modules: [
    '@nuxtjs/sitemap',
    'nuxt-speedkit'
  ],

  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/google-analytics'
  ],

  // Google Tag Manager Config
  googleAnalytics: {
    id: 'UA-221030139-1',
  },

  sitemap: {
    hostname: 'https://www.formatdigital.co.nz',
    gzip: true,
    routes: [
      {
        url: '/',
      }
    ]
  },

  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    },
    extraEases: {
      expoScaleEase: true
    }
  },

  speedkit: {
    detection: {
      performance: true,
      browserSupport: true
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 }
      },
      timing: {
        fcp: 800,
        dcl: 1200
      },
      lighthouseDetectionByUserAgent: false
    },
    
    componentAutoImport: false,
    componentPrefix: undefined,
    disableNuxtImage: true,
    /**
     * IntersectionObserver rootMargin for Components and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  }
}