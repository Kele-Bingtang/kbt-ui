<template>
  <k-statistic
    :value="rawValue"
    :title="title"
    :prefix="prefix"
    :suffix="suffix"
    :value-style="valueStyle"
    :formatter="formatter"
  >
    <template v-for="(_, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </k-statistic>
</template>
<script lang="ts" setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { KStatistic } from '@kbt-ui/components/statistic'
import { cAF, rAF } from '@kbt-ui/utils'
import { countdownEmits, countdownProps } from './countdown'
import { formatTime, getTime } from './utils'

defineOptions({
  name: 'KCountdown',
})

const props = defineProps(countdownProps)
const emit = defineEmits(countdownEmits)

let timer: ReturnType<typeof rAF> | undefined
const rawValue = ref(getTime(props.value) - Date.now())
const displayValue = computed(() => formatTime(rawValue.value, props.format))

const formatter = (val: number) => formatTime(val, props.format)

const stopTimer = () => {
  if (timer) {
    cAF(timer)
    timer = undefined
  }
}

const startTimer = () => {
  const timestamp = getTime(props.value)
  const frameFunc = () => {
    let diff = timestamp - Date.now()
    emit('change', diff)
    if (diff <= 0) {
      diff = 0
      stopTimer()
      emit('finish')
    } else {
      timer = rAF(frameFunc)
    }
    rawValue.value = diff
  }
  timer = rAF(frameFunc)
}

watch(
  () => [props.value, props.format],
  () => {
    stopTimer()
    startTimer()
  },
  {
    immediate: true,
  }
)

onBeforeUnmount(() => {
  stopTimer()
})

defineExpose({
  /**
   * @description current display value
   */
  displayValue,
})
</script>
