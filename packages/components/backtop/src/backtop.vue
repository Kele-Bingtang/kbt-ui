<template>
  <transition :name="`${ns.namespace.value}-fade-in`">
    <div
      v-if="visible"
      :style="backTopStyle"
      :class="ns.b()"
      @click.stop="handleClick"
    >
      <slot>
        <k-icon :class="ns.e('icon')"><caret-top /></k-icon>
      </slot>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { KIcon } from '@kbt-ui/components/icon'
import { CaretTop } from '@element-plus/icons-vue'
import { useNamespace } from '@kbt-ui/hooks'
import { backtopEmits, backtopProps } from './backtop'
import { useBackTop } from './use-backtop'

const COMPONENT_NAME = 'KBacktop'

defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(backtopProps)
const emit = defineEmits(backtopEmits)

const ns = useNamespace('backtop')

const { handleClick, visible } = useBackTop(props, emit, COMPONENT_NAME)

const backTopStyle = computed(() => ({
  right: `${props.right}px`,
  bottom: `${props.bottom}px`,
}))
</script>
