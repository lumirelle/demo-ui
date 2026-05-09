import type { ComponentResolver } from 'unplugin-vue-components'
import Components from 'unplugin-vue-components/vite'
import { name as packageName } from '../package.json'

// #region Resolver

export interface ResolverOptions {
  /**
   * Component name prefix. For example, `prefix: 'Demo'` will register `DemoButton` for `button/index.js`.
   * @default 'Demo'
   */
  prefix?: string
}

/**
 * Used when the project already has `unplugin-vue-components` configured.
 *
 * @example
 *
 * ```ts
 * import { DemoUIResolver } from 'demo-ui/vite'
 * import Components from 'unplugin-vue-components/vite'
 * import { defineConfig } from 'vite'
 *
 * export default defineConfig({
 *   plugins: [
 *     Components({
 *       // ...
 *       resolvers: [
 *         // ...
 *         DemoUIResolver({ prefix: 'Demo' })
 *       ],
 *     }),
 *   ],
 * })
 * ```
 */
export function DemoUIResolver(options: ResolverOptions = {}): ComponentResolver {
  const { prefix = 'Demo' } = options
  return {
    type: 'component',
    resolve(name: string) {
      if (!name.startsWith(prefix))
        return
      const slug = restToSlug(name.slice(prefix.length))
      if (!slug)
        return
      return {
        name,
        from: `${packageName}/${slug}`,
        sideEffects: `${packageName}/${slug}.css`,
      }
    },
  }
}

function restToSlug(rest: string): string {
  if (!rest)
    return ''
  return rest
    .replace(/([\da-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

// #endregion

// #region Vite plugin

export interface PluginOptions extends ResolverOptions {
  /**
   * Type declaration file of components to be generated.
   * @default 'components.d.ts'
   */
  dts?: boolean | string
}

export default function ViteComponentsPlugin(options: PluginOptions = {}): ReturnType<typeof Components> {
  const { prefix = 'Demo', dts = 'components.d.ts' } = options

  return Components({
    dirs: [],
    directives: false,
    resolvers: [DemoUIResolver({ prefix })],
    dts,
  })
}

// #endregion
