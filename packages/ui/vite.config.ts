import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    Vue(),
    Dts({
      tsconfigPath: './tsconfig.app.json',
      processor: 'vue',
      entryRoot: 'src',
    }),
  ],

  build: {
    lib: {
      entry: {
        'index': 'src/index.ts',
        'button/index': 'src/button/index.ts',
        'input/index': 'src/input/index.ts',
        'nuxt': 'src/nuxt.ts',
        'vite': 'src/vite.ts',
      },
      name: 'DemoUI',
      formats: ['es'],
    },
    rolldownOptions: {
      external: ['vue', 'nuxt', '@nuxt/kit', 'unplugin-vue-components', /unplugin-vue-components\/.*/],
      // XXX(Lumirelle): Need check.
      output: {
        exports: 'named',
      },
    },
    emptyOutDir: true,
    cssCodeSplit: true,
    // XXX(Lumirelle): Test only.
    minify: false,
  },
})
