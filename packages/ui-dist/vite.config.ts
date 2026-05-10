import { existsSync, readdirSync } from 'node:fs'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Dts from 'vite-plugin-dts'

const componentDirs = readdirSync('./src', { withFileTypes: true })
  .filter(dir => dir.isDirectory() && existsSync(`./src/${dir.name}/index.ts`))
const componentEntries = Object.fromEntries(componentDirs.map(dir => [`${dir.name}/index`, `src/${dir.name}/index.ts`]))
const componentGroups = componentDirs.map(dir => ({
  name: `${dir.name}/index`,
  test: (id: string) => id.includes(`src/${dir.name}`),
}))

export default defineConfig({
  build: {
    lib: {
      entry: {
        'index': 'src/index.ts',
        'nuxt': 'src/nuxt.ts',
        'vite/components': 'src/vite/components.ts',
        'vite/style': 'src/vite/style.ts',
        ...componentEntries,
      },
      name: 'DemoUI',
      formats: ['es'],
    },
    rolldownOptions: {
      external: ['vue', 'nuxt', '@nuxt/kit', 'unplugin-vue-components', /unplugin-vue-components\/.*/],
      output: {
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
