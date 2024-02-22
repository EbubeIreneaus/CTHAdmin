// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/color-mode', 'nuxt-plotly','@nuxtjs/device'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classPrefix: '',
   
  },
  vite: {
    optimizeDeps: {
      include: ["plotly.js-dist-min"],
    },
  },

  css: [
    '~/assets/css/main.css', 
    'animate.css/animate.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
