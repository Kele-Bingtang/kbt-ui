<template>
  <div :class="[ns.b(), ns.is('disabled', disabled)]">
    <k-tooltip
      ref="popperRef"
      :role="role"
      :effect="effect"
      :fallback-placements="['bottom', 'top']"
      :popper-options="popperOptions"
      :gpu-acceleration="false"
      :hide-after="trigger === 'hover' ? hideTimeout : 0"
      :manual-mode="true"
      :placement="placement"
      :popper-class="[ns.e('popper'), popperClass]"
      :reference-element="referenceElementRef?.$el"
      :trigger="trigger"
      :trigger-keys="triggerKeys"
      :trigger-target-el="contentRef"
      :show-after="trigger === 'hover' ? showTimeout : 0"
      :stop-popper-mouse-event="false"
      :virtual-ref="triggeringElementRef"
      :virtual-triggering="splitButton"
      :disabled="disabled"
      :transition="`${ns.namespace.value}-zoom-in-top`"
      :teleported="teleported"
      pure
      persistent
      @before-show="handleBeforeShowTooltip"
      @show="handleShowTooltip"
      @before-hide="handleBeforeHideTooltip"
    >
      <template #content>
        <k-scrollbar
          ref="scrollbar"
          :wrap-style="wrapStyle"
          tag="div"
          :view-class="ns.e('list')"
        >
          <k-roving-focus-group
            :loop="loop"
            :current-tab-id="currentTabId"
            orientation="horizontal"
            @current-tab-id-change="handleCurrentTabIdChange"
            @entry-focus="handleEntryFocus"
          >
            <k-dropdown-collection>
              <slot name="dropdown" />
            </k-dropdown-collection>
          </k-roving-focus-group>
        </k-scrollbar>
      </template>
      <template v-if="!splitButton" #default>
        <k-only-child
          :id="triggerId"
          ref="triggeringElementRef"
          role="button"
          :tabindex="tabindex"
        >
          <slot name="default" />
        </k-only-child>
      </template>
    </k-tooltip>
    <template v-if="splitButton">
      <k-button-group>
        <k-button
          ref="referenceElementRef"
          v-bind="buttonProps"
          :size="dropdownSize"
          :type="type"
          :disabled="disabled"
          :tabindex="tabindex"
          @click="handlerMainButtonClick"
        >
          <slot name="default" />
        </k-button>
        <k-button
          :id="triggerId"
          ref="triggeringElementRef"
          v-bind="buttonProps"
          role="button"
          :size="dropdownSize"
          :type="type"
          :class="ns.e('caret-button')"
          :disabled="disabled"
          :tabindex="tabindex"
          :aria-label="t('el.dropdown.toggleDropdown')"
        >
          <k-icon :class="ns.e('icon')"><arrow-down /></k-icon>
        </k-button>
      </k-button-group>
    </template>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onBeforeUnmount,
  provide,
  ref,
  toRef,
  unref,
  watch,
} from 'vue'
import KButton from '@kbt-ui/components/button'
import KTooltip from '@kbt-ui/components/tooltip'
import KScrollbar from '@kbt-ui/components/scrollbar'
import KIcon from '@kbt-ui/components/icon'
import KRovingFocusGroup from '@kbt-ui/components/roving-focus-group'
import { KOnlyChild } from '@kbt-ui/components/slot'
import { useFormSize } from '@kbt-ui/components/form'
import { addUnit, ensureArray } from '@kbt-ui/utils'
import { ArrowDown } from '@element-plus/icons-vue'
import { EVENT_CODE } from '@kbt-ui/constants'
import { useId, useLocale, useNamespace } from '@kbt-ui/hooks'
import { KCollection as KDropdownCollection, dropdownProps } from './dropdown'
import { DROPDOWN_INJECTION_KEY } from './tokens'

import type { CSSProperties } from 'vue'

const { ButtonGroup: KButtonGroup } = KButton

export default defineComponent({
  name: 'KDropdown',
  components: {
    KButton,
    KButtonGroup,
    KScrollbar,
    KDropdownCollection,
    KTooltip,
    KRovingFocusGroup,
    KOnlyChild,
    KIcon,
    ArrowDown,
  },
  props: dropdownProps,
  emits: ['visible-change', 'click', 'command'],
  setup(props, { emit }) {
    const _instance = getCurrentInstance()
    const ns = useNamespace('dropdown')
    const { t } = useLocale()

    const triggeringElementRef = ref()
    const referenceElementRef = ref()
    const popperRef = ref<InstanceType<typeof KTooltip> | null>(null)
    const contentRef = ref<HTMLElement | null>(null)
    const scrollbar = ref(null)
    const currentTabId = ref<string | null>(null)
    const isUsingKeyboard = ref(false)
    const triggerKeys = [EVENT_CODE.enter, EVENT_CODE.space, EVENT_CODE.down]

    const wrapStyle = computed<CSSProperties>(() => ({
      maxHeight: addUnit(props.maxHeight),
    }))
    const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)])
    const trigger = computed(() => ensureArray(props.trigger))

    const defaultTriggerId = useId().value
    const triggerId = computed<string>(() => {
      return props.id || defaultTriggerId
    })

    // The goal of this code is to focus on the tooltip triggering element when it is hovered.
    // This is a temporary fix for where closing the dropdown through pointerleave event focuses on a
    // completely different element. For a permanent solution, remove all calls to any "element.focus()"
    // that are triggered through pointer enter/leave events.
    watch(
      [triggeringElementRef, trigger],
      ([triggeringElement, trigger], [prevTriggeringElement]) => {
        if (prevTriggeringElement?.$el?.removeEventListener) {
          prevTriggeringElement.$el.removeEventListener(
            'pointerenter',
            onAutofocusTriggerEnter
          )
        }
        if (triggeringElement?.$el?.removeEventListener) {
          triggeringElement.$el.removeEventListener(
            'pointerenter',
            onAutofocusTriggerEnter
          )
        }
        if (
          triggeringElement?.$el?.addEventListener &&
          trigger.includes('hover')
        ) {
          triggeringElement.$el.addEventListener(
            'pointerenter',
            onAutofocusTriggerEnter
          )
        }
      },
      { immediate: true }
    )

    onBeforeUnmount(() => {
      if (triggeringElementRef.value?.$el?.removeEventListener) {
        triggeringElementRef.value.$el.removeEventListener(
          'pointerenter',
          onAutofocusTriggerEnter
        )
      }
    })

    function handleClick() {
      handleClose()
    }

    function handleClose() {
      popperRef.value?.onClose()
    }

    function handleOpen() {
      popperRef.value?.onOpen()
    }

    const dropdownSize = useFormSize()

    function commandHandler(...args: any[]) {
      emit('command', ...args)
    }

    function onAutofocusTriggerEnter() {
      triggeringElementRef.value?.$el?.focus()
    }

    function onItemEnter() {
      // NOOP for now
    }

    function onItemLeave() {
      const contentK = unref(contentRef)

      trigger.value.includes('hover') && contentK?.focus()
      currentTabId.value = null
    }

    function handleCurrentTabIdChange(id: string) {
      currentTabId.value = id
    }

    function handleEntryFocus(e: Event) {
      if (!isUsingKeyboard.value) {
        e.preventDefault()
        e.stopImmediatePropagation()
      }
    }

    function handleBeforeShowTooltip() {
      emit('visible-change', true)
    }

    function handleShowTooltip(event?: Event) {
      if (event?.type === 'keydown') {
        contentRef.value.focus()
      }
    }

    function handleBeforeHideTooltip() {
      emit('visible-change', false)
    }

    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      role: computed(() => props.role),
      triggerId,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave,
    })

    provide('elDropdown', {
      instance: _instance,
      dropdownSize,
      handleClick,
      commandHandler,
      trigger: toRef(props, 'trigger'),
      hideOnClick: toRef(props, 'hideOnClick'),
    })

    const onFocusAfterTrapped = (e: Event) => {
      e.preventDefault()
      contentRef.value?.focus?.({
        preventScroll: true,
      })
    }

    const handlerMainButtonClick = (event: MouseEvent) => {
      emit('click', event)
    }

    return {
      t,
      ns,
      scrollbar,
      wrapStyle,
      dropdownTriggerKls,
      dropdownSize,
      triggerId,
      triggerKeys,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleEntryFocus,
      handleClose,
      handleOpen,
      handleBeforeShowTooltip,
      handleShowTooltip,
      handleBeforeHideTooltip,
      onFocusAfterTrapped,
      popperRef,
      contentRef,
      triggeringElementRef,
      referenceElementRef,
    }
  },
})
</script>
