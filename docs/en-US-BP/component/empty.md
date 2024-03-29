---
title: Empty
lang: zh-CN
---

# Empty

Placeholder hints for empty states.

## Basic usage

:::demo

empty/basic-usage

:::

## Custom image

Use `image` prop to set image URL.

:::demo

empty/custom-image

:::

## Image size

Use `image-size` prop to control image size.

:::demo

empty/image-size

:::

## Bottom content

Use the default slot to insert content at the bottom.

:::demo

empty/bottom-content

:::

## Custom styles

Now you can set custom style for empty component.
Use `css/scss` language to change the global or local color. We set some global color variables: `--k-empty-fill-color-0`, `--k-empty-fill-color-1`, `--k-empty-fill-color-2`, ......, `--k-empty-fill-color-9`. You can use like: `:root { --k-empty-fill-color-0: red; --k-empty-fill-color-1: blue; }`.
But usually, if you want to change style, you need to change all color, because these colors are a combination.

### Default Variables

| Variable               | Color                |
| ---------------------- | -------------------- |
| --k-empty-fill-color-0 | var(--k-color-white) |
| --k-empty-fill-color-1 | #fcfcfd              |
| --k-empty-fill-color-2 | #f8f9fb              |
| --k-empty-fill-color-3 | #f7f8fc              |
| --k-empty-fill-color-4 | #eeeff3              |
| --k-empty-fill-color-5 | #edeef2              |
| --k-empty-fill-color-6 | #e9ebef              |
| --k-empty-fill-color-7 | #e5e7e9              |
| --k-empty-fill-color-8 | #e0e3e9              |
| --k-empty-fill-color-9 | #d5d7de              |

## API

### Attributes

| Name        | Description                 | Type      | Default |
| ----------- | --------------------------- | --------- | ------- |
| image       | image URL of empty          | ^[string] | ''      |
| image-size  | image size (width) of empty | ^[number] | —       |
| description | description of empty        | ^[string] | ''      |

### Slots

| Name        | Description               |
| ----------- | ------------------------- |
| default     | content as bottom content |
| image       | content as image          |
| description | content as description    |
