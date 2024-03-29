<template>
  <teleport
    :to="appendTo"
    :disabled="appendTo !== 'body' ? false : !appendToBody"
  >
    <transition
      name="dialog-fade"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <k-overlay
        v-show="visible"
        custom-mask-event
        :mask="modal"
        :overlay-class="modalClass"
        :z-index="zIndex"
      >
        <div
          role="dialog"
          aria-modal="true"
          :aria-label="title || undefined"
          :aria-labelledby="!title ? titleId : undefined"
          :aria-describedby="bodyId"
          :class="`${ns.namespace.value}-overlay-dialog`"
          :style="overlayDialogStyle"
          @click="overlayEvent.onClick"
          @mousedown="overlayEvent.onMousedown"
          @mouseup="overlayEvent.onMouseup"
        >
          <k-focus-trap
            loop
            :trapped="visible"
            focus-start-el="container"
            @focus-after-trapped="onOpenAutoFocus"
            @focus-after-released="onCloseAutoFocus"
            @focusout-prevented="onFocusoutPrevented"
            @release-requested="onCloseRequested"
          >
            <k-dialog-content
              v-if="rendered"
              ref="dialogContentRef"
              v-bind="$attrs"
              :center="center"
              :align-center="alignCenter"
              :close-icon="closeIcon"
              :draggable="draggable"
              :overflow="overflow"
              :fullscreen="fullscreen"
              :show-close="showClose"
              :title="title"
              :aria-level="headerAriaLevel"
              @close="handleClose"
            >
              <template #header>
                <slot
                  v-if="!$slots.title"
                  name="header"
                  :close="handleClose"
                  :title-id="titleId"
                  :title-class="ns.e('title')"
                />
                <slot v-else name="title" />
              </template>
              <slot />
              <template v-if="$slots.footer" #footer>
                <slot name="footer" />
              </template>
            </k-dialog-content>
          </k-focus-trap>
        </div>
      </k-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, provide, ref, useSlots } from 'vue'
import { KOverlay } from '@kbt-ui/components/overlay'
import { useDeprecated, useNamespace, useSameTarget } from '@kbt-ui/hooks'
import KFocusTrap from '@kbt-ui/components/focus-trap'
import KDialogContent from './dialog-content.vue'
import { dialogInjectionKey } from './constants'
import { dialogEmits, dialogProps } from './dialog'
import { useDialog } from './use-dialog'

defineOptions({
  name: 'KDialog',
  inheritAttrs: false,
})

const props = defineProps(dialogProps)
defineEmits(dialogEmits)
const slots = useSlots()

useDeprecated(
  {
    scope: 'k-dialog',
    from: 'the title slot',
    replacement: 'the header slot',
    version: '3.0.0',
    ref: 'https://kbt-ui.org/en-US/component/dialog.html#slots',
  },
  computed(() => !!slots.title)
)

const ns = useNamespace('dialog')
const dialogRef = ref<HTMLElement>()
const headerRef = ref<HTMLElement>()
const dialogContentRef = ref()

const {
  visible,
  titleId,
  bodyId,
  style,
  overlayDialogStyle,
  rendered,
  zIndex,
  afterEnter,
  afterLeave,
  beforeLeave,
  handleClose,
  onModalClick,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onCloseRequested,
  onFocusoutPrevented,
} = useDialog(props, dialogRef)

provide(dialogInjectionKey, {
  dialogRef,
  headerRef,
  bodyId,
  ns,
  rendered,
  style,
})

const overlayEvent = useSameTarget(onModalClick)

const draggable = computed(() => props.draggable && !props.fullscreen)

defineExpose({
  /** @description whether the dialog is visible */
  visible,
  dialogContentRef,
})
</script>
