<template>
  <button
    v-if="mergedShowClose"
    aria-label="Close"
    :class="ns.e('closebtn')"
    type="button"
    @click="onClose"
  >
    <k-icon :class="ns.e('close')">
      <component :is="mergedCloseIcon" />
    </k-icon>
  </button>
  <header :class="[ns.e('header'), { 'show-close': showClose }]">
    <slot name="header">
      <span role="heading" :class="ns.e('title')">
        {{ title }}
      </span>
    </slot>
  </header>
  <div :class="ns.e('body')">
    <slot>
      <span>{{ description }}</span>
    </slot>
  </div>
  <footer :class="ns.e('footer')">
    <div :class="ns.b('indicators')">
      <component
        :is="tourSlots.indicators"
        v-if="tourSlots.indicators"
        :current="current"
        :total="total"
      />
      <template v-else>
        <span
          v-for="(item, index) in total"
          :key="item"
          :class="[ns.b('indicator'), index === current ? 'is-active' : '']"
        />
      </template>
    </div>
    <div :class="ns.b('buttons')">
      <k-button
        v-if="current > 0"
        size="small"
        :type="mergedType"
        v-bind="filterButtonProps(prevButtonProps)"
        @click="onPrev"
      >
        {{ prevButtonProps?.children ?? t('el.tour.previous') }}
      </k-button>
      <k-button
        v-if="current <= total - 1"
        size="small"
        :type="mergedType === 'primary' ? 'default' : 'primary'"
        v-bind="filterButtonProps(nextButtonProps)"
        @click="onNext"
      >
        {{
          nextButtonProps?.children ??
          (current === total - 1 ? t('el.tour.finish') : t('el.tour.next'))
        }}
      </k-button>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { computed, inject, watch } from 'vue'
import { omit } from 'lodash-unified'
import { KButton } from '@kbt-ui/components/button'
import { KIcon } from '@kbt-ui/components/icon'
import { CloseComponents } from '@kbt-ui/utils'
import { useLocale } from '@kbt-ui/hooks'
import { tourStepEmits, tourStepProps } from './step'
import { tourKey } from './helper'

import type { TourBtnProps } from './types'

defineOptions({
  name: 'KTourStep',
})

const props = defineProps(tourStepProps)
const emit = defineEmits(tourStepEmits)

const { Close } = CloseComponents

const { t } = useLocale()

const {
  currentStep,
  current,
  total,
  showClose,
  closeIcon,
  mergedType,
  ns,
  slots: tourSlots,
  updateModelValue,
  onClose: tourOnClose,
  onFinish: tourOnFinish,
  onChange,
} = inject(tourKey)!

watch(
  props,
  (val) => {
    currentStep.value = val
  },
  {
    immediate: true,
  }
)

const mergedShowClose = computed(() => props.showClose ?? showClose.value)
const mergedCloseIcon = computed(
  () => props.closeIcon ?? closeIcon.value ?? Close
)

const filterButtonProps = (btnProps?: TourBtnProps) => {
  if (!btnProps) return
  return omit(btnProps, ['children', 'onClick'])
}

const onPrev = () => {
  current.value -= 1
  if (props.prevButtonProps?.onClick) {
    props.prevButtonProps?.onClick()
  }
  onChange()
}

const onNext = () => {
  if (current.value >= total.value - 1) {
    onFinish()
  } else {
    current.value += 1
  }
  if (props.nextButtonProps?.onClick) {
    props.nextButtonProps.onClick()
  }
  onChange()
}

const onFinish = () => {
  onClose()
  tourOnFinish()
}

const onClose = () => {
  updateModelValue(false)
  tourOnClose()
  emit('close')
}
</script>
