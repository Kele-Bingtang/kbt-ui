---
title: Config Provider
lang: zh-CN
---

# Config Provider

Config Provider is used for providing global configurations, which enables your entire application to access these configurations everywhere.

## i18n Configurations

Configure i18n related properties via Config Provider, to get language switching feature.

:::demo Use two attributes to provide i18n related config

config-provider/usage

:::

## Button Configurations

:::demo

config-provider/button

:::

## Message Configurations

:::demo

config-provider/message

:::

## Experimental features

In this section, you can learn how to use Config Provider to provide experimental features. For now, we haven't added any experimental features, but in the feature roadmap, we will add some experimental features. You can use this config to manage the features you want or not.

 <!-- TODO -->

## API

### Config Provider Attributes

| Name                  | Description                                                                                                                                                | Type                                                                                                                                                                                                                                   | Default                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| locale                | Locale Object                                                                                                                                              | ^[object]`{name: string, el: TranslatePair}`[](https://github.com/kbt-ui/kbt-ui/blob/a98ff9b40c0c3d2b9959f99919bd8363e3e3c25a/packages/locale/index.ts#L5) [languages](https://github.com/kbt-ui/kbt-ui/tree/dev/packages/locale/lang) | [en](https://github.com/kbt-ui/kbt-ui/blob/dev/packages/locale/lang/en.ts) |
| size                  | global component size                                                                                                                                      | ^[enum]`'large' \| 'default' \| 'small'`                                                                                                                                                                                               | default                                                                    |
| zIndex                | global Initial zIndex                                                                                                                                      | ^[number]                                                                                                                                                                                                                              | —                                                                          |
| namespace             | global component className prefix (cooperated with [$namespace](https://github.com/kbt-ui/kbt-ui/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1)) | ^[string]                                                                                                                                                                                                                              | el                                                                         |
| button                | button related configuration, [see the following table](#button-attribute)                                                                                 | ^[object]`{autoInsertSpace?: boolean}`                                                                                                                                                                                                 | see the following table                                                    |
| message               | message related configuration, [see the following table](#message-attribute)                                                                               | ^[object]`{max?: number}`                                                                                                                                                                                                              | see the following table                                                    |
| experimental-features | features at experimental stage to be added, all features are default to be set to false                                                                    | ^[object]                                                                                                                                                                                                                              | —                                                                          |

### Button Attribute

| Attribute       | Description                                                 | Type       | Default |
| --------------- | ----------------------------------------------------------- | ---------- | ------- |
| autoInsertSpace | automatically insert a space between two chinese characters | ^[boolean] | false   |

### Message Attribute

| Attribute | Description                                                           | Type      | Default |
| --------- | --------------------------------------------------------------------- | --------- | ------- |
| max       | the maximum number of messages that can be displayed at the same time | ^[number] | —       |

### Config Provider Slots

| Name    | Description               | Scope                                                   |
| ------- | ------------------------- | ------------------------------------------------------- |
| default | customize default content | config: provided global config (inherited from the top) |
