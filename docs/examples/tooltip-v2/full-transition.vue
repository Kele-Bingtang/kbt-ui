<template>
  <k-tooltip-v2 full-transition :transition-props="transitionProps">
    <template #trigger>
      <k-button circle
        ><k-icon><Plus /></k-icon
      ></k-button>
    </template>
    <div>content</div>
  </k-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'

const transitionProps = {
  name: 'k-fade-in-linear',
}
</script>
