<template>
  <k-only-child
    v-if="!virtualTriggering"
    v-bind="$attrs"
    :aria-controls="ariaControls"
    :aria-describedby="ariaDescribedby"
    :aria-expanded="ariaExpanded"
    :aria-haspopup="ariaHaspopup"
  >
    <slot />
  </k-only-child>
</template>

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, onMounted, watch } from 'vue'
import { isNil } from 'lodash-unified'
import { unrefElement } from '@vueuse/core'
import { KOnlyChild } from '@kbt-ui/components/slot'
import { useForwardRef } from '@kbt-ui/hooks'
import { isElement } from '@kbt-ui/utils'
import { POPPER_INJECTION_KEY } from './constants'
import { popperTriggerProps } from './trigger'

import type { WatchStopHandle } from 'vue'

defineOptions({
  name: 'KPopperTrigger',
  inheritAttrs: false,
})

const props = defineProps(popperTriggerProps)

const { role, triggerRef } = inject(POPPER_INJECTION_KEY, undefined)!

useForwardRef(triggerRef)

const ariaControls = computed<string | undefined>(() => {
  return ariaHaspopup.value ? props.id : undefined
})

const ariaDescribedby = computed<string | undefined>(() => {
  if (role && role.value === 'tooltip') {
    return props.open && props.id ? props.id : undefined
  }
  return undefined
})

const ariaHaspopup = computed<string | undefined>(() => {
  if (role && role.value !== 'tooltip') {
    return role.value
  }
  return undefined
})

const ariaExpanded = computed<string | undefined>(() => {
  return ariaHaspopup.value ? `${props.open}` : undefined
})

let virtualTriggerAriaStopWatch: WatchStopHandle | undefined = undefined

onMounted(() => {
  watch(
    () => props.virtualRef,
    (virtualK) => {
      if (virtualK) {
        triggerRef.value = unrefElement(virtualK as HTMLElement)
      }
    },
    {
      immediate: true,
    }
  )

  watch(
    triggerRef,
    (el, prevK) => {
      virtualTriggerAriaStopWatch?.()
      virtualTriggerAriaStopWatch = undefined
      if (isElement(el)) {
        ;(
          [
            'onMouseenter',
            'onMouseleave',
            'onClick',
            'onKeydown',
            'onFocus',
            'onBlur',
            'onContextmenu',
          ] as const
        ).forEach((eventName) => {
          const handler = props[eventName]
          if (handler) {
            ;(el as HTMLElement).addEventListener(
              eventName.slice(2).toLowerCase(),
              handler
            )
            ;(prevK as HTMLElement)?.removeEventListener?.(
              eventName.slice(2).toLowerCase(),
              handler
            )
          }
        })
        virtualTriggerAriaStopWatch = watch(
          [ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded],
          (watches) => {
            ;[
              'aria-controls',
              'aria-describedby',
              'aria-haspopup',
              'aria-expanded',
            ].forEach((key, idx) => {
              isNil(watches[idx])
                ? el.removeAttribute(key)
                : el.setAttribute(key, watches[idx]!)
            })
          },
          { immediate: true }
        )
      }
      if (isElement(prevK)) {
        ;[
          'aria-controls',
          'aria-describedby',
          'aria-haspopup',
          'aria-expanded',
        ].forEach((key) => prevK.removeAttribute(key))
      }
    },
    {
      immediate: true,
    }
  )
})

onBeforeUnmount(() => {
  virtualTriggerAriaStopWatch?.()
  virtualTriggerAriaStopWatch = undefined
})

defineExpose({
  /**
   * @description trigger element
   */
  triggerRef,
})
</script>
