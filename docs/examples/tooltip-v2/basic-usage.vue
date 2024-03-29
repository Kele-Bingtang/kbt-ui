<template>
  <k-tooltip-v2 aria-label="content" placement="left">
    <template #trigger>
      <k-button circle
        ><k-icon><Plus /></k-icon
      ></k-button>
    </template>
    Basic tooltip
  </k-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
</script>
