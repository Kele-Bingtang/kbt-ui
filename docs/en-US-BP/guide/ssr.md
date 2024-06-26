---
title: SSR
lang: zh-CN
---

# Server-Side Rendering (SSR)

When using Kbt UI for SSR development, you need to carry out special handling during SSR to avoid hydrate errors.

:::tip

For Nuxt users, we provide a [Nuxt module](https://github.com/kbt-ui/kbt-ui-nuxt) that contains these special processes. You only need to install it.

:::

## Provide an ID

The provided value is used to generate the unique ID in Kbt UI.
Because the different IDs are prone to hydrate errors in SSR, in order to ensure that the server side and client side generate the same ID, we need to inject the `ID_injection_key` into Vue.

```ts
// src/main.js (irrelevant code omitted)
import { createApp } from 'vue'
import { ID_INJECTION_KEY } from 'kbt-ui'
import App from './App.vue'

const app = createApp(App)
app.provide(ID_INJECTION_KEY, {
  prefix: 1024,
  current: 0,
})
```

## Provide ZIndex

When you using SSR for development, you may encounter hydration errors caused by `z-index`. In this case, we recommend injecting an initial value to avoid such errors.

```ts
// src/main.js (irrelevant code omitted)
import { createApp } from 'vue'
import { ZINDEX_INJECTION_KEY } from 'kbt-ui'
import App from './App.vue'

const app = createApp(App)
app.provide(ZINDEX_INJECTION_KEY, { current: 0 })
```

## Teleports

[Teleport](https://vuejs.org/guide/scaling-up/ssr.html#teleports) is used internally by multiple components in Kbt UI (eg. KDialog, KDrawer, KTooltip, KDropdown, KSelect, KDatePicker ...), so special handling is required during SSR.

### Render the Teleport on the mount

An easier solution is to conditionally render the Teleport on the mount.

For example, use the `ClientOnly` component in Nuxt.

```html
<client-only>
  <k-tooltip content="the tooltip content">
    <k-button>tooltip</k-button>
  </k-tooltip>
</client-only>
```

or

```vue
<script setup>
import { ref } from 'vue'

const isClient = ref(false)

onMounted(() => {
  isClient.value = true
})
</script>

<template>
  <k-tooltip v-if="isClient" content="the tooltip content">
    <k-button>tooltip</k-button>
  </k-tooltip>
</template>
```

### Inject the teleport markup

Another way is to inject the teleport markup into the correct location in your final page HTML.

:::warning

There may be some [SSR problems with teleport](https://github.com/vuejs/core/issues?q=is%3Aissue+is%3Aopen+ssr+teleport+), so you should pay attention to the following precautions.

1. The `teleported` attribute in all components based on KTooltip should be consistent, it is recommended to use the default value.
2. The `append-to-body` attribute value of KDialog and KDrawer should be consistent, it is recommended to enable the `append-to-body`.
3. When the KSubMenu component has a multi-layer popup, It is recommended to enable the `teleported`

:::

You need to inject the teleport markup close to the `<body>` tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Kbt UI</title>
    <!--preload-links-->
  </head>
  <body>
    <!--app-teleports-->
    <div id="app"><!--app-html--></div>
    <script type="module" src="/src/entry-client.js"></script>
  </body>
</html>
```

:::tip

If you modify the [Namespace](./namespace.md) or `append-to` attribute, you need to adjust the `#k-popper-container-` value.

:::

```js
// src/entry-server.js (irrelevant code omitted)
import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'

export async function render(url, manifest) {
  // ...
  const ctx = {}
  const html = await renderToString(app, ctx)
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest)
  const teleports = renderTeleports(ctx.teleports)

  return [html, preloadLinks, teleports]
}

function renderTeleports(teleports) {
  if (!teleports) return ''
  return Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith('#k-popper-container-')) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`
    }
    return all
  }, teleports.body || '')
}
```

```js
// server.js or prerender.js (irrelevant code omitted)
const [appHtml, preloadLinks, teleports] = await render(url, manifest)

const html = template
  .replace('<!--preload-links-->', preloadLinks)
  .replace('<!--app-html-->', appHtml)
  .replace(/(\n|\r\n)\s*<!--app-teleports-->/, teleports)
```
