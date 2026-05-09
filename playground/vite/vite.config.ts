import Vue from '@vitejs/plugin-vue'
import DemoUi from 'demo-ui/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue(),
    DemoUi(),
  ],

  optimizeDeps: {
    exclude: ['demo-ui'],
  },
})
