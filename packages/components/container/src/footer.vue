<template>
  <footer :class="ns.b()" :style="style">
    <slot />
  </footer>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@kbt-ui/hooks'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'KFooter',
})
const props = defineProps({
  /**
   * @description height of the footer
   */
  height: {
    type: String,
    default: null,
  },
})

const ns = useNamespace('footer')

const style = computed(
  () =>
    (props.height
      ? ns.cssVarBlock({ height: props.height })
      : {}) as CSSProperties
)
</script>
