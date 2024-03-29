<template>
  <k-tooltip-v2 :aria-label="title">
    <template #trigger>
      <k-button
        ><k-icon><Delete /></k-icon
      ></k-button>
    </template>
    {{ content }}
  </k-tooltip-v2>
</template>

<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
const content = 'Delete'
const title = 'Delete item'
</script>
