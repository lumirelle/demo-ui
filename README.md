# pkg-placeholder

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [!Note]
>
> `main` branch of this starter is currently migrate to [bun](https://bun.com/), if you want to use `nodejs` version, please check out the [`nodejs` branch](https://github.com/lumirelle/starter-ts/tree/nodejs).
>
> Why? Because Bun has much better performance than Node.js, see some simple benchmark results under [the `/benchmark` folder](./benchmark), or just visit [Bun's official documentation](https://bun.com/docs).

> [!Note]
>
> This is a personal fork of [antfu/starter-ts](https://github.com/antfu/starter-ts) with some customizations.

_description_

## Note for Developers

This starter recommends using [NPM Trusted Publisher](https://github.com/e18e/ecosystem-issues/issues/201), where the release is done on CI to ensure the security of the packages.

To do so, you need to run `bun run build && bun pm pack --filename <your-package-name>.tgz && bunx npm publish <your-package-name>.tgz` manually for the very first time to create the package on npm, and then go to `https://www.npmjs.com/package/<your-package-name>/access` to set the connection to your GitHub repo.

Then for the future releases, you can run `bun run release` to do the release and the GitHub Actions will take care of the release process.

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/lumirelle/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/lumirelle/static/sponsors.svg' alt='Sponsors'/>
  </a>
</p>

## License

[MIT](./LICENSE.md) License © [Lumirelle](https://github.com/Lumirelle)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/pkg-placeholder?style=flat&colorA=18181B&colorB=F0DB4F
[npm-version-href]: https://npmjs.com/package/pkg-placeholder
[npm-downloads-src]: https://img.shields.io/npm/dm/pkg-placeholder?style=flat&colorA=18181B&colorB=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/pkg-placeholder
[bundle-src]: https://img.shields.io/bundlephobia/minzip/pkg-placeholder?style=flat&colorA=18181B&colorB=F0DB4F&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=pkg-placeholder
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=18181B&colorB=F0DB4F
[jsdocs-href]: https://www.jsdocs.io/package/pkg-placeholder
[codecov-src]: https://img.shields.io/codecov/c/gh/lumirelle/pkg-placeholder/main?style=flat&colorA=18181B&colorB=F0DB4F
[codecov-href]: https://codecov.io/gh/lumirelle/pkg-placeholder
[license-src]: https://img.shields.io/github/license/lumirelle/pkg-placeholder.svg?style=flat&colorA=18181B&colorB=F0DB4F
[license-href]: https://github.com/lumirelle/pkg-placeholder/blob/main/LICENSE.md
