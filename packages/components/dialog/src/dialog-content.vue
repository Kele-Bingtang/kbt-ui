<template>
  <div :ref="composedDialogRef" :class="dialogKls" :style="style" tabindex="-1">
    <header
      ref="headerRef"
      :class="[ns.e('header'), { 'show-close': showClose }]"
    >
      <slot name="header">
        <span role="heading" :aria-level="ariaLevel" :class="ns.e('title')">
          {{ title }}
        </span>
      </slot>
      <button
        v-if="showClose"
        :aria-label="t('el.dialog.close')"
        :class="ns.e('headerbtn')"
        type="button"
        @click="$emit('close')"
      >
        <k-icon :class="ns.e('close')">
          <component :is="closeIcon || Close" />
        </k-icon>
      </button>
    </header>
    <div :id="bodyId" :class="ns.e('body')">
      <slot />
    </div>
    <footer v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { KIcon } from '@kbt-ui/components/icon'
import { FOCUS_TRAP_INJECTION_KEY } from '@kbt-ui/components/focus-trap'
import { useDraggable, useLocale } from '@kbt-ui/hooks'
import { CloseComponents, composeRefs } from '@kbt-ui/utils'
import { dialogInjectionKey } from './constants'
import { dialogContentEmits, dialogContentProps } from './dialog-content'

const { t } = useLocale()
const { Close } = CloseComponents

defineOptions({ name: 'KDialogContent' })
const props = defineProps(dialogContentProps)
defineEmits(dialogContentEmits)

const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey)!
const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY)!

const dialogKls = computed(() => [
  ns.b(),
  ns.is('fullscreen', props.fullscreen),
  ns.is('draggable', props.draggable),
  ns.is('align-center', props.alignCenter),
  { [ns.m('center')]: props.center },
])

const composedDialogRef = composeRefs(focusTrapRef, dialogRef)

const draggable = computed(() => props.draggable)
const overflow = computed(() => props.overflow)
useDraggable(dialogRef, headerRef, draggable, overflow)
</script>
