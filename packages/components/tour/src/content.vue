<template>
  <div
    ref="contentRef"
    :style="contentStyle"
    :class="ns.e('content')"
    :data-side="side"
    tabindex="-1"
  >
    <k-focus-trap
      loop
      trapped
      focus-start-el="container"
      :focus-trap-el="contentRef || undefined"
      @release-requested="onCloseRequested"
      @focusout-prevented="onFocusoutPrevented"
    >
      <slot />
    </k-focus-trap>
    <span
      v-if="showArrow"
      ref="arrowRef"
      :style="arrowStyle"
      :class="ns.e('arrow')"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, inject, ref, toRef, watch } from 'vue'
import KFocusTrap from '@kbt-ui/components/focus-trap'
import { tourContentEmits, tourContentProps } from './content'
import { tourKey, useFloating } from './helper'

defineOptions({
  name: 'KTourContent',
})

const props = defineProps(tourContentProps)
const emit = defineEmits(tourContentEmits)

const placement = ref(props.placement)
const strategy = ref(props.strategy)
const contentRef = ref<HTMLElement | null>(null)
const arrowRef = ref<HTMLElement | null>(null)

watch(
  () => props.placement,
  () => {
    placement.value = props.placement
  }
)

const { contentStyle, arrowStyle } = useFloating(
  toRef(props, 'reference'),
  contentRef,
  arrowRef,
  placement,
  strategy,
  toRef(props, 'offset'),
  toRef(props, 'zIndex'),
  toRef(props, 'showArrow')
)

const side = computed(() => {
  return placement.value.split('-')[0]
})

const { ns } = inject(tourKey)!

const onCloseRequested = () => {
  emit('close')
}

const onFocusoutPrevented = (event: CustomEvent) => {
  if (event.detail.focusReason === 'pointer') {
    event.preventDefault()
  }
}
</script>
