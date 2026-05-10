import { addComponentsDir, addVitePlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import Style from './vite/style'

export interface ModuleOptions {
  /**
   * Component name prefix. For example, `prefix: 'Demo'` will register `DemoButton` for `button/index.js`.
   * @default 'Demo'
   */
  prefix?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'demo-ui-dist',
    configKey: 'demoUIDist',
  },
  defaults: {
    prefix: 'Demo',
  },
  setup(options) {
    const resolver = createResolver(import.meta.url)
    const distDir = resolver.resolve('.')
    addComponentsDir({
      path: distDir,
      pattern: '*/index.(js|ts)',
      prefix: options.prefix,
      pathPrefix: false,
    })
    addVitePlugin(Style())
  },
})
