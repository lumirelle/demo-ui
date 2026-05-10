import { readdirSync } from 'node:fs'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Dts from 'vite-plugin-dts'

const componentDirs = readdirSync('./src', { withFileTypes: true })
  .filter(dir => dir.isDirectory())
const componentGroups = componentDirs.map(dir => ({
  name: `${dir.name}/index`,
  test: (id: string) => id.includes(`src/${dir.name}`),
}))

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        nuxt: 'src/nuxt.ts',
        vite: 'src/vite.ts',
      },
      name: 'DemoUI',
      formats: ['es'],
    },
    rolldownOptions: {
      external: ['vue', 'nuxt', '@nuxt/kit', 'unplugin-vue-components', /unplugin-vue-components\/.*/],
      output: {
        chunkFileNames: (chunk) => {
          if (chunk.name.endsWith('/index'))
            return '[name].js'
          return '[name]-[hash].js'
        },
        codeSplitting: {
          groups: [
            { name: 'vue', test: /plugin-vue/ },
            ...componentGroups,
          ],
        },
      },
    },
    emptyOutDir: true,
    cssCodeSplit: true,
  },

  plugins: [
    Vue(),
    Dts({
      tsconfigPath: './tsconfig.app.json',
      processor: 'vue',
      entryRoot: 'src',
    }),
  ],
})
