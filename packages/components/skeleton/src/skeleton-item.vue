<template>
  <div :class="[ns.e('item'), ns.e(variant)]">
    <picture-filled v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@kbt-ui/hooks'
import { PictureFilled } from '@element-plus/icons-vue'
import { skeletonItemProps } from './skeleton-item'

defineOptions({
  name: 'KSkeletonItem',
})
defineProps(skeletonItemProps)
const ns = useNamespace('skeleton')
</script>
