<template>
  <div
    v-show="ready"
    ref="carouselItemRef"
    :class="itemKls"
    :style="itemStyle"
    @click="handleItemClick"
  >
    <div v-if="isCardType" v-show="!active" :class="ns.e('mask')" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, unref } from 'vue'
import { useNamespace } from '@kbt-ui/hooks'
import { carouselItemProps } from './carousel-item'
import { useCarouselItem } from './use-carousel-item'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'KCarouselItem',
})

const props = defineProps(carouselItemProps)
const ns = useNamespace('carousel')
const COMPONENT_NAME = 'KCarouselItem'
// inject
const {
  carouselItemRef,
  active,
  animating,
  hover,
  inStage,
  isVertical,
  translate,
  isCardType,
  scale,
  ready,
  handleItemClick,
} = useCarouselItem(props, COMPONENT_NAME)

const itemKls = computed(() => [
  ns.e('item'),
  ns.is('active', active.value),
  ns.is('in-stage', inStage.value),
  ns.is('hover', hover.value),
  ns.is('animating', animating.value),
  {
    [ns.em('item', 'card')]: isCardType.value,
    [ns.em('item', 'card-vertical')]: isCardType.value && isVertical.value,
  },
])

const itemStyle = computed<CSSProperties>(() => {
  const translateType = `translate${unref(isVertical) ? 'Y' : 'X'}`
  const _translate = `${translateType}(${unref(translate)}px)`
  const _scale = `scale(${unref(scale)})`
  const transform = [_translate, _scale].join(' ')

  return {
    transform,
  }
})
</script>
