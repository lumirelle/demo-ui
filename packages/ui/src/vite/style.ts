import type { Plugin } from 'vite'

export default function DemoUiStyle(): Plugin {
  return {
    name: 'demo-ui-style',
    enforce: 'post',

    transform: {
      filter: {
        id: {
          include: [
            /demo-ui\/dist\/[^/]*\/index\.js$/,
            // Used for local dev
            /demo-ui\/.*\/dist\/[^/]*\/index\.js$/,
          ],
        },
      },
      handler(code) {
        return `import './index.css'\n${code}`
      },
    },
  }
}
