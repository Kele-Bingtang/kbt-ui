---
title: Container
lang: zh-CN
---

# Container

Container components for scaffolding basic structure of the page:

`<k-container>`: wrapper container. When nested with a `<k-header>` or `<k-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<k-header>`: container for headers.

`<k-aside>`: container for side sections (usually a side nav).

`<k-main>`: container for main sections.

`<k-footer>`: container for footers.

:::tip

These components use flex for layout, so please make sure your browser supports it. Besides, `<k-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<k-container>`.

:::

## Common layouts

<style lang="scss">
@use '../../examples/container/common-layout.scss';
</style>

:::demo

container/layout-hm

:::

:::demo

container/layout-hmf

:::

:::demo

container/layout-am

:::

:::demo

container/layout-ham

:::

:::demo

container/layout-hamf

:::

:::demo

container/layout-ahm

:::

:::demo

container/layout-ahmf

:::

## Example

:::demo

container/example

:::

## Container API

### Container Attributes

| Name      | Description                         | Type                                | Default                                                                  |
| --------- | ----------------------------------- | ----------------------------------- | ------------------------------------------------------------------------ |
| direction | layout direction for child elements | ^[enum]`'horizontal' \| 'vertical'` | vertical when nested with `k-header` or `k-footer`; horizontal otherwise |

### Container Slots

| Name    | Description               | Subtags                                    |
| ------- | ------------------------- | ------------------------------------------ |
| default | customize default content | Container / Header / Aside / Main / Footer |

## Header API

### Header Attributes

| Name   | Description          | Type      | Default |
| ------ | -------------------- | --------- | ------- |
| height | height of the header | ^[string] | 60px    |

### Header Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Aside API

### Aside Attributes

| Name  | Description               | Type      | Default |
| ----- | ------------------------- | --------- | ------- |
| width | width of the side section | ^[string] | 300px   |

### Aside Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Main API

### Main Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Footer API

### Footer Attributes

| Name   | Description          | Type      | Default |
| ------ | -------------------- | --------- | ------- |
| height | height of the footer | ^[string] | 60px    |

### Footer Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
