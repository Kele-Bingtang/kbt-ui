<template>
  <div
    :class="[ns.b(), { [ns.m('highlight-current')]: highlightCurrent }]"
    role="tree"
  >
    <fixed-size-list
      v-if="isNotEmpty"
      :class-name="ns.b('virtual-list')"
      :data="flattenTree"
      :total="flattenTree.length"
      :height="height"
      :item-size="treeNodeSize"
      :perf-mode="perfMode"
    >
      <template #default="{ data, index, style }">
        <k-tree-node
          :key="data[index].key"
          :style="style"
          :node="data[index]"
          :expanded="isExpanded(data[index])"
          :show-checkbox="showCheckbox"
          :checked="isChecked(data[index])"
          :indeterminate="isIndeterminate(data[index])"
          :item-size="treeNodeSize"
          :disabled="isDisabled(data[index])"
          :current="isCurrent(data[index])"
          :hidden-expand-icon="isForceHiddenExpandIcon(data[index])"
          @click="handleNodeClick"
          @toggle="toggleExpand"
          @check="handleNodeCheck"
        />
      </template>
    </fixed-size-list>
    <div v-else :class="ns.e('empty-block')">
      <span :class="ns.e('empty-text')">{{
        emptyText ?? t('el.tree.emptyText')
      }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, provide, useSlots } from 'vue'
import { useLocale, useNamespace } from '@kbt-ui/hooks'
import { formItemContextKey } from '@kbt-ui/components/form'
import { FixedSizeList } from '@kbt-ui/components/virtual-list'
import { useTree } from './composables/useTree'
import KTreeNode from './tree-node.vue'
import { ROOT_TREE_INJECTION_KEY, treeEmits, treeProps } from './virtual-tree'

defineOptions({
  name: 'KTreeV2',
})

const props = defineProps(treeProps)
const emit = defineEmits(treeEmits)

const slots = useSlots()

const treeNodeSize = computed(() => props.itemSize)

provide(ROOT_TREE_INJECTION_KEY, {
  ctx: {
    emit,
    slots,
  },
  props,
  instance: getCurrentInstance()!,
})
provide(formItemContextKey, undefined)
const { t } = useLocale()
const ns = useNamespace('tree')
const {
  flattenTree,
  isNotEmpty,
  toggleExpand,
  isExpanded,
  isIndeterminate,
  isChecked,
  isDisabled,
  isCurrent,
  isForceHiddenExpandIcon,
  handleNodeClick,
  handleNodeCheck,
  // expose
  toggleCheckbox,
  getCurrentNode,
  getCurrentKey,
  setCurrentKey,
  getCheckedKeys,
  getCheckedNodes,
  getHalfCheckedKeys,
  getHalfCheckedNodes,
  setChecked,
  setCheckedKeys,
  filter,
  setData,
  getNode,
  expandNode,
  collapseNode,
  setExpandedKeys,
} = useTree(props, emit)

defineExpose({
  toggleCheckbox,
  getCurrentNode,
  getCurrentKey,
  setCurrentKey,
  getCheckedKeys,
  getCheckedNodes,
  getHalfCheckedKeys,
  getHalfCheckedNodes,
  setChecked,
  setCheckedKeys,
  filter,
  setData,
  getNode,
  expandNode,
  collapseNode,
  setExpandedKeys,
})
</script>
