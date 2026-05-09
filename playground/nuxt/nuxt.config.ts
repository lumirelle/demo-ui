export default defineNuxtConfig({
  modules: ['demo-ui/nuxt'],

  vite: {
    optimizeDeps: {
      exclude: ['demo-ui'],
    },
  },
})
