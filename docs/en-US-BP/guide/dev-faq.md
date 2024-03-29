---
title: Development FAQ
lang: zh-CN
---

# Development FAQ

Here are the problems that are easy to encounter in development.

## If you encounter dependency related issues

```shell
rm -rf node_modules
pnpm i
```

## Link local dependencies

```shell
# get dist
pnpm build
cd dist/kbt-ui
# set cur kbt-ui to global `node_modules`
pnpm link --global
# for esm we also need link kbt-ui for dist
pnpm link --global kbt-ui

# go to your project, link to `kbt-ui`
cd your-project
pnpm link --global kbt-ui
```

> More info see [pnpm link](https://pnpm.io/cli/link).

## Theme

We should not write Chinese comments in scss files.

It will generate warning `@charset "UTF-8";` in the header of css file when built with vite.

> More info see [#3219](https://github.com/kbt-ui/kbt-ui/issues/3219).
