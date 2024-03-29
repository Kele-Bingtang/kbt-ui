<template>
  <teleport to="body" :disabled="!appendToBody">
    <transition
      :name="ns.b('fade')"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-leave="beforeLeave"
    >
      <k-overlay
        v-show="visible"
        :mask="modal"
        :overlay-class="modalClass"
        :z-index="zIndex"
        @click="onModalClick"
      >
        <k-focus-trap
          loop
          :trapped="visible"
          :focus-trap-el="drawerRef"
          :focus-start-el="focusStartRef"
          @focus-after-trapped="onOpenAutoFocus"
          @focus-after-released="onCloseAutoFocus"
          @focusout-prevented="onFocusoutPrevented"
          @release-requested="onCloseRequested"
        >
          <div
            ref="drawerRef"
            aria-modal="true"
            :aria-label="title || undefined"
            :aria-labelledby="!title ? titleId : undefined"
            :aria-describedby="bodyId"
            v-bind="$attrs"
            :class="[ns.b(), direction, visible && 'open']"
            :style="
              isHorizontal ? 'width: ' + drawerSize : 'height: ' + drawerSize
            "
            role="dialog"
            @click.stop
          >
            <span ref="focusStartRef" :class="ns.e('sr-focus')" tabindex="-1" />
            <header v-if="withHeader" :class="ns.e('header')">
              <slot
                v-if="!$slots.title"
                name="header"
                :close="handleClose"
                :title-id="titleId"
                :title-class="ns.e('title')"
              >
                <span
                  v-if="!$slots.title"
                  :id="titleId"
                  role="heading"
                  :aria-level="headerAriaLevel"
                  :class="ns.e('title')"
                >
                  {{ title }}
                </span>
              </slot>
              <slot v-else name="title">
                <!-- DEPRECATED SLOT -->
              </slot>
              <button
                v-if="showClose"
                :aria-label="t('el.drawer.close')"
                :class="ns.e('close-btn')"
                type="button"
                @click="handleClose"
              >
                <k-icon :class="ns.e('close')"><close /></k-icon>
              </button>
            </header>
            <template v-if="rendered">
              <div :id="bodyId" :class="ns.e('body')">
                <slot />
              </div>
            </template>
            <div v-if="$slots.footer" :class="ns.e('footer')">
              <slot name="footer" />
            </div>
          </div>
        </k-focus-trap>
      </k-overlay>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { computed, ref, useSlots } from 'vue'
import { Close } from '@element-plus/icons-vue'

import { KOverlay } from '@kbt-ui/components/overlay'
import KFocusTrap from '@kbt-ui/components/focus-trap'
import { useDialog } from '@kbt-ui/components/dialog'
import { addUnit } from '@kbt-ui/utils'
import KIcon from '@kbt-ui/components/icon'
import { useDeprecated, useLocale, useNamespace } from '@kbt-ui/hooks'
import { drawerEmits, drawerProps } from './drawer'

defineOptions({
  name: 'KDrawer',
  inheritAttrs: false,
})

const props = defineProps(drawerProps)
defineEmits(drawerEmits)
const slots = useSlots()

useDeprecated(
  {
    scope: 'k-drawer',
    from: 'the title slot',
    replacement: 'the header slot',
    version: '3.0.0',
    ref: 'https://kbt-ui.org/en-US/component/drawer.html#slots',
  },
  computed(() => !!slots.title)
)

const drawerRef = ref<HTMLElement>()
const focusStartRef = ref<HTMLElement>()
const ns = useNamespace('drawer')
const { t } = useLocale()
const {
  afterEnter,
  afterLeave,
  beforeLeave,
  visible,
  rendered,
  titleId,
  bodyId,
  zIndex,
  onModalClick,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onFocusoutPrevented,
  onCloseRequested,
  handleClose,
} = useDialog(props, drawerRef)

const isHorizontal = computed(
  () => props.direction === 'rtl' || props.direction === 'ltr'
)
const drawerSize = computed(() => addUnit(props.size))

defineExpose({
  handleClose,
  afterEnter,
  afterLeave,
})
</script>
