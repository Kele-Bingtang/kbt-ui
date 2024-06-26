<template>
  <span
    v-if="disableTransitions"
    :class="containerKls"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  >
    <span :class="ns.e('content')">
      <slot />
    </span>
    <k-icon v-if="closable" :class="ns.e('close')" @click.stop="handleClose">
      <Close />
    </k-icon>
  </span>
  <transition v-else :name="`${ns.namespace.value}-zoom-in-center`" appear>
    <span
      :class="containerKls"
      :style="{ backgroundColor: color }"
      @click="handleClick"
    >
      <span :class="ns.e('content')">
        <slot />
      </span>
      <k-icon v-if="closable" :class="ns.e('close')" @click.stop="handleClose">
        <Close />
      </k-icon>
    </span>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import KIcon from '@kbt-ui/components/icon'
import { Close } from '@element-plus/icons-vue'
import { useNamespace } from '@kbt-ui/hooks'
import { useFormSize } from '@kbt-ui/components/form'

import { tagEmits, tagProps } from './tag'

defineOptions({
  name: 'KTag',
})
const props = defineProps(tagProps)
const emit = defineEmits(tagEmits)

const tagSize = useFormSize()
const ns = useNamespace('tag')
const containerKls = computed(() => {
  const { type, hit, effect, closable, round } = props
  return [
    ns.b(),
    ns.is('closable', closable),
    ns.m(type || 'primary'),
    ns.m(tagSize.value),
    ns.m(effect),
    ns.is('hit', hit),
    ns.is('round', round),
  ]
})

// methods
const handleClose = (event: MouseEvent) => {
  emit('close', event)
}

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>
