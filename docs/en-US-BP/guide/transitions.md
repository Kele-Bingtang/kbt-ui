---
title: Built-in Transitions
lang: zh-CN
---

# Built-in Transition

You can use Element's built-in transitions directly.
Before that, please read the [transition docs](https://vuejs.org/guide/built-ins/transition.html).

## Fade

:::demo We have two fading effects: `k-fade-in-linear` and `k-fade-in`.

transitions/fade

:::

## Zoom

:::demo `k-zoom-in-center`, `k-zoom-in-top` and `k-zoom-in-bottom` are provided.

transitions/zoom

:::

## Collapse

For collapse effect, use the `k-collapse-transition` component.

:::demo

transitions/collapse

:::

## On-demand import

```ts
// collapse
import { KCollapseTransition } from 'kbt-ui'
// fade/zoom
import 'kbt-ui/lib/theme-chalk/base.css'
import App from './App.vue'

const app = createApp(App)
app.component(KCollapseTransition.name, KCollapseTransition)
```
