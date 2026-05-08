export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      exclude: ['demo-ui'],
    },
  },
})
