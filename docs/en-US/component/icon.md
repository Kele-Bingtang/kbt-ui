---
title: Icon
lang: zh-CN
---

# Icon

Kbt UI provides a set of common icons.

## Icon Usage

- If you want to **use directly** like the example, you need to [globally register](https://v3.vuejs.org/guide/component-registration.html#global-registration) the components before using it.

- If you want to see all available SVG icons please check [@element-plus/icons-vue@1.x](https://unpkg.com/browse/@element-plus/icons-vue@1/dist/es/)[@element-plus/icons-vue@latest](https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/types/components/) and the source [kbt-ui-icons](https://github.com/kbt-ui/kbt-ui-icons) out or [Icon Collection](#icon-collection)

## Installation

### Using packaging manager

```shell
# Choose a package manager you like.

# NPM
$ npm install @element-plus/icons-vue
# Yarn
$ yarn add @element-plus/icons-vue
# pnpm
$ pnpm install @element-plus/icons-vue
```

### Register All Icons

You need import all icons from `@element-plus/icons-vue` and register them globally.

```ts
// main.ts

// if you're using CDN, please remove this line.
import * as KbtUIIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(KbtUIIconsVue)) {
  app.component(key, component)
}
```

You can also refer to [this template](https://codepen.io/sxzz/pen/xxpvdrg).

### Import in Browser

Import Kbt UI Icons through browser HTML tags directly, and use global variable `KbtUIIconsVue`.

According to different CDN providers, there are different introduction methods.
Here we use [unpkg](https://unpkg.com) and [jsDelivr](https://jsdelivr.com) as example.
You can also use other CDN providers.

#### unpkg

```html
<script src="//unpkg.com/@element-plus/icons-vue"></script>
```

#### jsDelivr

```html
<script src="//cdn.jsdelivr.net/npm/@element-plus/icons-vue"></script>
```

:::tip

We recommend using CDN to import Kbt UI users to lock the version
on the link address, so as not to be affected by incompatible updates when Kbt UI
is upgraded in the future. Please check [unpkg.com](https://unpkg.com) for
the method to lock the version.

:::

### Auto Import

Use [unplugin-icons](https://github.com/antfu/unplugin-icons) and [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
to automatically import any icon collections from iconify.
You can refer to [this template](https://github.com/sxzz/kbt-ui-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58).

## Simple Usage

:::warning

Because HTML standard has already defined a tag named [menu](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/menu),
so you need to use an alias in order to render the icon, if you register `Menu` directly it will not work.

:::

```vue
<!-- Use k-icon to provide attributes to SVG icon -->
<template>
  <div>
    <k-icon :size="size" :color="color">
      <Edit />
    </k-icon>
    <!-- Or use it independently without derive attributes from parent -->
    <Edit />
  </div>
</template>
```

<vp-script setup>
import { Edit, Share, Delete, Search, Loading } from '@element-plus/icons-vue'
</vp-script>

<KRow>
  <div>
    <KIcon :size="30">
      <Edit />
    </KIcon>
    <Edit />
  </div>
</KRow>

## Combined with k-icon

`k-icon` provides extra attributes for raw SVG icon, for more detail, please read to the end.

```vue
<template>
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <k-icon :size="20">
    <Edit />
  </k-icon>
  <k-icon color="#409efc" class="no-inherit">
    <Share />
  </k-icon>
  <k-icon>
    <Delete />
  </k-icon>
  <k-icon class="is-loading">
    <Loading />
  </k-icon>
  <k-button type="primary">
    <k-icon style="vertical-align: middle">
      <Search />
    </k-icon>
    <span style="vertical-align: middle"> Search </span>
  </k-button>
</template>
```

<KRow>
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
    <KIcon :size="20">
      <Edit />
    </KIcon>
    <KIcon color="#409efc" class="no-inherit">
      <Share />
    </KIcon>
    <KIcon>
      <Delete />
    </KIcon>
    <KIcon class="is-loading">
      <Loading />
    </KIcon>
    <KButton type="primary">
      <KIcon style="vertical-align: middle; color: #fff;">
        <Search />
      </KIcon>
      <span style="vertical-align: middle;"> Search </span>
    </KButton>
  </div>
</KRow>

## Using SVG icon directly

```vue
<template>
  <div style="font-size: 20px">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
    <Share style="width: 1em; height: 1em; margin-right: 8px" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px" />
    <Search style="width: 1em; height: 1em; margin-right: 8px" />
  </div>
</template>
```

<KRow>
  <div style="font-size: 20px;">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px;" />
    <Share style="width: 1em; height: 1em; margin-right: 8px;" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px;" />
    <Search style="width: 1em; height: 1em; margin-right: 8px;" />
  </div>
</KRow>

## Icon Collection{#icon-collection}

:::tip

**You can use SVG icon in any version** as long as you install it

**You can click the icon to copy it**

:::

<IconList />

## API

### Attributes

| Name  | Description                | Type                  | Default                |
| ----- | -------------------------- | --------------------- | ---------------------- |
| color | SVG tag's fill attribute   | ^[string]             | inherit from color     |
| size  | SVG icon size, size x size | ^[number] / ^[string] | inherit from font size |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
