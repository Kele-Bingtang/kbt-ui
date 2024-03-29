import { computed, defineComponent, h, renderSlot } from 'vue'
import { buildProps } from '@kbt-ui/utils'
import { useNamespace } from '@kbt-ui/hooks'

import type { ExtractPropTypes } from 'vue'

const spaceItemProps = buildProps({
  prefixCls: {
    type: String,
  },
} as const)
export type SpaceItemProps = ExtractPropTypes<typeof spaceItemProps>

const SpaceItem = defineComponent({
  name: 'KSpaceItem',

  props: spaceItemProps,

  setup(props, { slots }) {
    const ns = useNamespace('space')

    const classes = computed(() => `${props.prefixCls || ns.b()}__item`)

    return () =>
      h('div', { class: classes.value }, renderSlot(slots, 'default'))
  },
})
export type SpaceItemInstance = InstanceType<typeof SpaceItem>

export default SpaceItem
