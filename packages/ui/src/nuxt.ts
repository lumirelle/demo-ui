import type { Plugin } from 'vite'
import { addComponentsDir, addVitePlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import { name as packageName } from '../package.json'

export interface ModuleOptions {
  /**
   * Component name prefix. For example, `prefix: 'Demo'` will register `DemoButton` for `button/index.js`.
   * @default 'Demo'
   */
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'demo-ui',
    configKey: 'demoUI',
  },
  defaults: {
    prefix: 'Demo',
  },
  setup(options) {
    const resolver = createResolver(import.meta.url)
    const distDir = resolver.resolve('.')
    addComponentsDir({
      path: distDir,
      pattern: '*/index.js',
      prefix: options.prefix,
      pathPrefix: false,
    })
    addVitePlugin(
      ComponentCssInjectPlugin({ distDir }),
    )
  },
})

interface ComponentCssInjectPluginOptions {
  distDir: string
}

/** Replace backslashes with forward slashes and remove trailing slash */
function normalizePath(path: string): string {
  return path.replace(/\\/g, '/').replace(/\/$/, '')
}

/** When Vite transforms component entry points, inject the corresponding CSS import */
function ComponentCssInjectPlugin(options: ComponentCssInjectPluginOptions): Plugin {
  const distDirNorm = normalizePath(options.distDir)

  return {
    name: `${packageName}:component-css`,
    enforce: 'pre',
    transform(code, id) {
      const idNorm = normalizePath(id)
      if (!idNorm.startsWith(distDirNorm))
        return null

      const rel = idNorm.slice(distDirNorm.length).replace(/^\//, '')
      const matched = rel.match(/^([^/]+)\/index\.js$/)
      if (!matched)
        return null

      const slug = matched[1]
      const specifier = `${packageName}/${slug}.css`
      if (code.includes(specifier))
        return null

      return {
        code: `import '${specifier}';\n${code}`,
        map: null,
      }
    },
  }
}
