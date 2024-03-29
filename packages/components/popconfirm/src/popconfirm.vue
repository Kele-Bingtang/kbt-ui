<template>
  <k-tooltip
    ref="tooltipRef"
    trigger="click"
    effect="light"
    v-bind="$attrs"
    :popper-class="`${ns.namespace.value}-popover`"
    :popper-style="style"
    :teleported="teleported"
    :fallback-placements="['bottom', 'top', 'right', 'left']"
    :hide-after="hideAfter"
    :persistent="persistent"
  >
    <template #content>
      <div :class="ns.b()">
        <div :class="ns.e('main')">
          <k-icon
            v-if="!hideIcon && icon"
            :class="ns.e('icon')"
            :style="{ color: iconColor }"
          >
            <component :is="icon" />
          </k-icon>
          {{ title }}
        </div>
        <div :class="ns.e('action')">
          <k-button
            size="small"
            :type="cancelButtonType === 'text' ? '' : cancelButtonType"
            :text="cancelButtonType === 'text'"
            @click="cancel"
          >
            {{ finalCancelButtonText }}
          </k-button>
          <k-button
            size="small"
            :type="confirmButtonType === 'text' ? '' : confirmButtonType"
            :text="confirmButtonType === 'text'"
            @click="confirm"
          >
            {{ finalConfirmButtonText }}
          </k-button>
        </div>
      </div>
    </template>
    <template v-if="$slots.reference">
      <slot name="reference" />
    </template>
  </k-tooltip>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import KButton from '@kbt-ui/components/button'
import KIcon from '@kbt-ui/components/icon'
import KTooltip from '@kbt-ui/components/tooltip'
import { useLocale, useNamespace } from '@kbt-ui/hooks'
import { addUnit } from '@kbt-ui/utils'
import { popconfirmEmits, popconfirmProps } from './popconfirm'

import type { TooltipInstance } from '@kbt-ui/components/tooltip'

defineOptions({
  name: 'KPopconfirm',
})

const props = defineProps(popconfirmProps)
const emit = defineEmits(popconfirmEmits)

const { t } = useLocale()
const ns = useNamespace('popconfirm')
const tooltipRef = ref<TooltipInstance>()

const hidePopper = () => {
  tooltipRef.value?.onClose?.()
}

const style = computed(() => {
  return {
    width: addUnit(props.width),
  }
})

const confirm = (e: MouseEvent) => {
  emit('confirm', e)
  hidePopper()
}
const cancel = (e: MouseEvent) => {
  emit('cancel', e)
  hidePopper()
}

const finalConfirmButtonText = computed(
  () => props.confirmButtonText || t('el.popconfirm.confirmButtonText')
)
const finalCancelButtonText = computed(
  () => props.cancelButtonText || t('el.popconfirm.cancelButtonText')
)
</script>
