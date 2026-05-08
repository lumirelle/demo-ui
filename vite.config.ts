import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [Vue()],

  build: {
    lib: {
      entry: {
        'index': 'src/index.ts',
        'src/button': 'src/button/index.ts',
        'src/input': 'src/input/index.ts',
      },
      name: 'DemoUI',
    },
    rolldownOptions: {
      external: ['vue'],
      // XXX(Lumirelle): Need check.
      output: {
        exports: 'named',
      },
    },
    emptyOutDir: true,
    // XXX(Lumirelle): Test only.
    minify: false,
  },
})
