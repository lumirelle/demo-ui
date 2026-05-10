export default defineNuxtConfig({
  modules: ['demo-ui-dist/nuxt'],

  vite: {
    optimizeDeps: {
      exclude: ['demo-ui-dist'],
    },
    build: {
      cssCodeSplit: true,
    },
  },
})
