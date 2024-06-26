<template>
  <div
    ref="contentRef"
    v-bind="contentAttrs"
    :style="contentStyle"
    :class="contentClass"
    tabindex="-1"
    @mouseenter="(e) => $emit('mouseenter', e)"
    @mouseleave="(e) => $emit('mouseleave', e)"
  >
    <k-focus-trap
      :trapped="trapped"
      :trap-on-focus-in="true"
      :focus-trap-el="contentRef"
      :focus-start-el="focusStartRef"
      @focus-after-trapped="onFocusAfterTrapped"
      @focus-after-released="onFocusAfterReleased"
      @focusin="onFocusInTrap"
      @focusout-prevented="onFocusoutPrevented"
      @release-requested="onReleaseRequested"
    >
      <slot />
    </k-focus-trap>
  </div>
</template>

<script lang="ts" setup>
import {
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  unref,
  watch,
} from 'vue'
import { NOOP } from '@vue/shared'
import { isNil } from 'lodash-unified'
import KFocusTrap from '@kbt-ui/components/focus-trap'
import { formItemContextKey } from '@kbt-ui/components/form'
import { isElement } from '@kbt-ui/utils'
import { POPPER_CONTENT_INJECTION_KEY } from './constants'
import { popperContentEmits, popperContentProps } from './content'
import {
  usePopperContent,
  usePopperContentDOM,
  usePopperContentFocusTrap,
} from './composables'

import type { WatchStopHandle } from 'vue'

defineOptions({
  name: 'KPopperContent',
})

const emit = defineEmits(popperContentEmits)

const props = defineProps(popperContentProps)

const {
  focusStartRef,
  trapped,

  onFocusAfterReleased,
  onFocusAfterTrapped,
  onFocusInTrap,
  onFocusoutPrevented,
  onReleaseRequested,
} = usePopperContentFocusTrap(props, emit)

const { attributes, arrowRef, contentRef, styles, instanceRef, role, update } =
  usePopperContent(props)

const {
  ariaModal,
  arrowStyle,
  contentAttrs,
  contentClass,
  contentStyle,
  updateZIndex,
} = usePopperContentDOM(props, {
  styles,
  attributes,
  role,
})

const formItemContext = inject(formItemContextKey, undefined)
const arrowOffset = ref<number>()

provide(POPPER_CONTENT_INJECTION_KEY, {
  arrowStyle,
  arrowRef,
  arrowOffset,
})

if (
  formItemContext &&
  (formItemContext.addInputId || formItemContext.removeInputId)
) {
  // disallow auto-id from inside popper content
  provide(formItemContextKey, {
    ...formItemContext,
    addInputId: NOOP,
    removeInputId: NOOP,
  })
}

let triggerTargetAriaStopWatch: WatchStopHandle | undefined = undefined

const updatePopper = (shouldUpdateZIndex = true) => {
  update()
  shouldUpdateZIndex && updateZIndex()
}

const togglePopperAlive = () => {
  updatePopper(false)
  if (props.visible && props.focusOnShow) {
    trapped.value = true
  } else if (props.visible === false) {
    trapped.value = false
  }
}

onMounted(() => {
  watch(
    () => props.triggerTargetK,
    (triggerTargetK, prevTriggerTargetK) => {
      triggerTargetAriaStopWatch?.()
      triggerTargetAriaStopWatch = undefined

      const el = unref(triggerTargetK || contentRef.value)
      const prevK = unref(prevTriggerTargetK || contentRef.value)

      if (isElement(el)) {
        triggerTargetAriaStopWatch = watch(
          [role, () => props.ariaLabel, ariaModal, () => props.id],
          (watches) => {
            ;['role', 'aria-label', 'aria-modal', 'id'].forEach((key, idx) => {
              isNil(watches[idx])
                ? el.removeAttribute(key)
                : el.setAttribute(key, watches[idx]!)
            })
          },
          { immediate: true }
        )
      }
      if (prevK !== el && isElement(prevK)) {
        ;['role', 'aria-label', 'aria-modal', 'id'].forEach((key) => {
          prevK.removeAttribute(key)
        })
      }
    },
    { immediate: true }
  )

  watch(() => props.visible, togglePopperAlive, { immediate: true })
})

onBeforeUnmount(() => {
  triggerTargetAriaStopWatch?.()
  triggerTargetAriaStopWatch = undefined
})

defineExpose({
  /**
   * @description popper content element
   */
  popperContentRef: contentRef,
  /**
   * @description popperjs instance
   */
  popperInstanceRef: instanceRef,
  /**
   * @description method for updating popper
   */
  updatePopper,

  /**
   * @description content style
   */
  contentStyle,
})
</script>
