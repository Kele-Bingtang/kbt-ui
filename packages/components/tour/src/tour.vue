<template>
  <teleport :to="appendTo">
    <div :class="kls" v-bind="$attrs">
      <k-tour-mask
        :visible="mergedShowMask"
        :fill="mergedMaskStyle?.color"
        :style="mergedMaskStyle?.style"
        :pos="pos"
        :z-index="mergedZIndex"
        :target-area-clickable="targetAreaClickable"
      />
      <k-tour-content
        v-if="modelValue"
        :key="current"
        :reference="triggerTarget"
        :placement="mergedPlacement"
        :show-arrow="mergedShowArrow"
        :z-index="mergedZIndex"
        :style="mergedContentStyle"
        @close="onEscClose"
      >
        <k-tour-steps :current="current" @update-total="onUpdateTotal">
          <slot />
        </k-tour-steps>
      </k-tour-content>
    </div>
  </teleport>
  <!-- just for IDE -->
  <slot v-if="false" name="indicators" :current="current + 1" :total="total" />
</template>

<script lang="ts" setup>
import { computed, provide, ref, toRef, useSlots, watch } from 'vue'
import { useVModel } from '@vueuse/core'
import { useNamespace, useZIndex } from '@kbt-ui/hooks'
import { isBoolean } from '@kbt-ui/utils'
import KTourMask from './mask.vue'
import KTourContent from './content.vue'
import KTourSteps from './steps'
import { tourEmits, tourProps } from './tour'
import { tourKey, useTarget } from './helper'
import type { TourStepProps } from './step'

defineOptions({
  name: 'KTour',
})

const props = defineProps(tourProps)
const emit = defineEmits(tourEmits)

const ns = useNamespace('tour')
const total = ref(0)
const currentStep = ref<TourStepProps>()

const current = useVModel(props, 'current', emit, {
  passive: true,
})

const currentTarget = computed(() => currentStep.value?.target)

const kls = computed(() => [
  ns.b(),
  mergedType.value === 'primary' ? ns.m('primary') : '',
])

const mergedPlacement = computed(
  () => currentStep.value?.placement || props.placement
)

const mergedContentStyle = computed(
  () => currentStep.value?.contentStyle ?? props.contentStyle
)

const mergedMask = computed(() => currentStep.value?.mask ?? props.mask)
const mergedShowMask = computed(() => !!mergedMask.value && props.modelValue)
const mergedMaskStyle = computed(() =>
  isBoolean(mergedMask.value) ? undefined : mergedMask.value
)

const mergedShowArrow = computed(
  () =>
    !!currentTarget.value && (currentStep.value?.showArrow ?? props.showArrow)
)

const mergedScrollIntoViewOptions = computed(
  () => currentStep.value?.scrollIntoViewOptions ?? props.scrollIntoViewOptions
)
const mergedType = computed(() => currentStep.value?.type ?? props.type)

const { nextZIndex } = useZIndex()
const nowZIndex = nextZIndex()
const mergedZIndex = computed(() => props.zIndex ?? nowZIndex)

const { mergedPosInfo: pos, triggerTarget } = useTarget(
  currentTarget,
  toRef(props, 'modelValue'),
  toRef(props, 'gap'),
  mergedMask,
  mergedScrollIntoViewOptions
)

watch(
  () => props.modelValue,
  (val) => {
    if (!val) {
      current.value = 0
    }
  }
)

const onEscClose = () => {
  if (props.closeOnPressEscape) {
    emit('update:modelValue', false)
    emit('close', current.value)
  }
}

const onUpdateTotal = (val: number) => {
  total.value = val
}

const slots = useSlots()

provide(tourKey, {
  currentStep,
  current,
  total,
  showClose: toRef(props, 'showClose'),
  closeIcon: toRef(props, 'closeIcon') as any,
  mergedType: mergedType as any,
  ns,
  slots,
  updateModelValue(modelValue) {
    emit('update:modelValue', modelValue)
  },
  onClose() {
    emit('close', current.value)
  },
  onFinish() {
    emit('finish')
  },
  onChange() {
    emit('change', current.value)
  },
})
</script>
