---
title: Quick Start
lang: zh-CN
---

# Quick Start

This section describes how to use Kbt UI in your project.

## Usage

### Full Import

If you don’t care about the bundle size so much, it’s more convenient to use full import.

```typescript
// main.ts
import { createApp } from 'vue'
import KbtUI from 'kbt-ui'
import 'kbt-ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(KbtUI)
app.mount('#app')
```

#### Volar support

If you use volar, please add the global component type definition to `compilerOptions.types` in `tsconfig.json`.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["kbt-ui/global"]
  }
}
```

### On-demand Import

You need to use an additional plugin to import components you used.

#### Auto import <k-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">Recommend</k-tag>

First you need to install `unplugin-vue-components` and `unplugin-auto-import`.

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

Then add the code below into your `Vite` or `Webpack` config file.

##### Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { KbtUIResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [KbtUIResolver()],
    }),
    Components({
      resolvers: [KbtUIResolver()],
    }),
  ],
})
```

##### Webpack

```js
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { KbtUIResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [KbtUIResolver()],
    }),
    Components({
      resolvers: [KbtUIResolver()],
    }),
  ],
}
```

For more bundlers ([Rollup](https://rollupjs.org/), [Vue CLI](https://cli.vuejs.org/)) and configs please reference [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) and [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install).

#### Nuxt

For Nuxt users, you only need to install `@kbt-ui/nuxt`.

```shell
npm install -D @kbt-ui/nuxt
```

Then add the code below into your config file.

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@kbt-ui/nuxt'],
})
```

Refer to the [docs](https://github.com/kbt-ui/kbt-ui-nuxt#readme) for how to configure it.

### Manually import

Kbt UI provides out of box [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
functionalities based on ES Module.

But you need install [unplugin-element-plus](https://github.com/kbt-ui/unplugin-element-plus) for style import.
And refer to the [docs](https://github.com/kbt-ui/unplugin-element-plus#readme) for how to configure it.

> App.vue

```html
<template>
  <k-button>I am KButton</k-button>
</template>
<script>
  import { KButton } from 'kbt-ui'
  export default {
    components: { KButton },
  }
</script>
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import KbtUI from 'unplugin-element-plus/vite'

export default defineConfig({
  // ...
  plugins: [KbtUI()],
})
```

:::warning

You need to manually import the styles if you're using `unplugin-element-plus` and only used the component API.

Example:

```ts
import 'kbt-ui/es/components/message/style/css'
import { KMessage } from 'kbt-ui'
```

:::

## Starter Template

We provide a [Vite Template](https://github.com/kbt-ui/kbt-ui-vite-starter).

For Nuxt users we have a [Nuxt Template](https://github.com/kbt-ui/kbt-ui-nuxt-starter).

For Laravel users we have a [Laravel Template](https://github.com/kbt-ui/kbt-ui-in-laravel-starter).

## Global Configuration

When registering Kbt UI, you can pass a global config object with `size` and
`zIndex` to set the default `size` for form components, and `zIndex` for
popup components, the default value for `zIndex` is `2000`.

Full import:

```ts
import { createApp } from 'vue'
import KbtUI from 'kbt-ui'
import App from './App.vue'

const app = createApp(App)
app.use(KbtUI, { size: 'small', zIndex: 3000 })
```

On-demand:

```vue
<template>
  <k-config-provider :size="size" :z-index="zIndex">
    <app />
  </k-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { KConfigProvider } from 'kbt-ui'

export default defineComponent({
  components: {
    KConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
})
</script>
```

## Using Nuxt.js

We can also use [Nuxt.js](https://v3.nuxtjs.org/)：

<div class="glitch-embed-wrap" style="height: 420px; width: 100%;">
  <iframe src="https://glitch.com/edit/#!/nuxt-kbt-ui?path=components%2FExamples.vue%3A1%3A0" alt="nuxt-kbt-ui on glitch" style="height: 100%; width: 100%; border: 0;"></iframe>
</div>

## Let's Get Started

You can bootstrap your project from now on. For each components usage, please
refer to [the individual component documentation](https://kbt-ui.youngkbt.cn/zh-CN/component/button.html).
