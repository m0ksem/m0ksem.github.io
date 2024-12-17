// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  vite: {
    base: '',
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    },
  },

  build: {
    transpile: ['@m0ksem/vue-glsl'],
  },

  typescript: {
    tsConfig: {
      "include": [
        "node_modules/unplugin-object-3d"
      ]
    }
  },

  modules: ['@unocss/nuxt', '@nuxtjs/seo'],

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' },
      ]
    }
  },

  site: {
    url: 'https://m0ksem.github.io',
    name: 'm0ksem'
  }
})