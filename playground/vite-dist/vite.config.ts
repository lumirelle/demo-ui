import Vue from '@vitejs/plugin-vue'
import DemoUiComponents from 'demo-ui-dist/vite/components'
import DemoUiStyle from 'demo-ui-dist/vite/style'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Vue(),
    DemoUiComponents(),
    DemoUiStyle(),
  ],

  optimizeDeps: {
    exclude: ['demo-ui'],
  },
})
