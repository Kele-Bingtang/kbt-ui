<template>
  <div
    ref="node$"
    :class="[
      ns.b('node'),
      ns.is('expanded', expanded),
      ns.is('current', current),
      ns.is('focusable', !disabled),
      ns.is('checked', !disabled && checked),
    ]"
    role="treeitem"
    tabindex="-1"
    :aria-expanded="expanded"
    :aria-disabled="disabled"
    :aria-checked="checked"
    :data-key="node?.key"
    @click.stop="handleClick"
    @contextmenu="handleContextMenu"
  >
    <div
      :class="ns.be('node', 'content')"
      :style="{
        paddingLeft: `${(node.level - 1) * indent}px`,
        height: itemSize + 'px',
      }"
    >
      <k-icon
        v-if="icon"
        :class="[
          ns.is('leaf', !!node?.isLeaf),
          ns.is('hidden', hiddenExpandIcon),
          {
            expanded: !node?.isLeaf && expanded,
          },
          ns.be('node', 'expand-icon'),
        ]"
        @click.stop="handleExpandIconClick"
      >
        <component :is="icon" />
      </k-icon>
      <k-checkbox
        v-if="showCheckbox"
        :model-value="checked"
        :indeterminate="indeterminate"
        :disabled="disabled"
        @change="handleCheckChange"
        @click.stop
      />
      <k-node-content :node="node" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import KIcon from '@kbt-ui/components/icon'
import { CaretRight } from '@element-plus/icons-vue'
import KCheckbox from '@kbt-ui/components/checkbox'
import { useNamespace } from '@kbt-ui/hooks'
import KNodeContent from './tree-node-content'
import {
  NODE_CONTEXTMENU,
  ROOT_TREE_INJECTION_KEY,
  treeNodeEmits,
  treeNodeProps,
} from './virtual-tree'
import type { CheckboxValueType } from '@kbt-ui/components/checkbox'

defineOptions({
  name: 'KTreeNode',
})

const props = defineProps(treeNodeProps)
const emit = defineEmits(treeNodeEmits)

const tree = inject(ROOT_TREE_INJECTION_KEY)
const ns = useNamespace('tree')

const indent = computed(() => {
  return tree?.props.indent ?? 16
})

const icon = computed(() => {
  return tree?.props.icon ?? CaretRight
})

const handleClick = (e: MouseEvent) => {
  emit('click', props.node, e)
}
const handleExpandIconClick = () => {
  emit('toggle', props.node)
}
const handleCheckChange = (value: CheckboxValueType) => {
  emit('check', props.node, value)
}
const handleContextMenu = (event: Event) => {
  if (tree?.instance?.vnode?.props?.['onNodeContextmenu']) {
    event.stopPropagation()
    event.preventDefault()
  }
  tree?.ctx.emit(NODE_CONTEXTMENU, event, props.node?.data, props.node)
}
</script>
