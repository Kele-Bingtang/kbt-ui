---
title: Installation
lang: zh-CN
---

# Installation

## Compatibility ^(2.5.0)

Kbt UI can run on browsers that support last 2 versions.

If you really need to support outdated browsers, please add [Babel](https://babeljs.io/) and Polyfill yourself.

Since Vue 3 no longer supports IE11, Kbt UI does not support IE either.

| version | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) <br> Chrome | ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) <br> Edge | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) <br> Firefox | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) <br> Safari |
| ------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| < 2.5.0 | Chrome ≥ 64                                                                                | Edge ≥ 79                                                                        | Firefox ≥ 78                                                                                   | Safari ≥ 12                                                                                |
| 2.5.0 + | Chrome ≥ 85                                                                                | Edge ≥ 85                                                                        | Firefox ≥ 79                                                                                   | Safari ≥ 14.1                                                                              |

### Version

Kbt UI is currently in a rapid development iteration.

[![KbtUI version badge](https://img.shields.io/npm/v/kbt-ui.svg?style=flat-square)](https://www.npmjs.org/package/kbt-ui)

## Using Package Manager

**We recommend using the package manager (NPM, [Yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/)) to install Kbt UI**,
so that you can utilize bundlers like [Vite](https://vitejs.dev) and
[webpack](https://webpack.js.org/).

```shell
# Choose a package manager you like.

# NPM
$ npm install kbt-ui --save

# Yarn
$ yarn add kbt-ui

# pnpm
$ pnpm install kbt-ui
```

If your network environment is not good, it is recommended to use a mirror registry [cnpm](https://github.com/cnpm/cnpm) or [Alibaba](https://registry.npmmirror.com/).

## Import in Browser

Import Kbt UI through browser HTML tags directly, and use global variable `KbtUI`.

According to different CDN providers, there are different introduction methods.
Here we use [unpkg](https://unpkg.com) and [jsDelivr](https://jsdelivr.com) as example.
You can also use other CDN providers.

### unpkg

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/kbt-ui/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/kbt-ui"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/kbt-ui/dist/index.css" />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/kbt-ui"></script>
</head>
```

:::tip

We recommend using CDN to import Kbt UI users to lock the version
on the link address, so as not to be affected by incompatible updates when Kbt UI
is upgraded in the future. Please check [unpkg.com](https://unpkg.com) for
the method to lock the version.

:::

## Hello World

With CDN, we can easily use Kbt UI to
write a Hello World page. [Online Demo](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

If you are installing via package manager and want to use it with
a packaging tool, please read the
next section: [Quick Start](/zh-CN/guide/quickstart).
