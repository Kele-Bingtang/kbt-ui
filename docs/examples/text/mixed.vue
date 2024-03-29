<template>
  <k-space direction="vertical">
    <k-text>
      <k-icon>
        <ElementPlus />
      </k-icon>
      Element-Plus
    </k-text>
    <k-row>
      <k-text>Rate</k-text>
      <k-rate class="ml-1" />
    </k-row>
    <k-text>
      This is text mixed icon
      <k-icon>
        <Bell />
      </k-icon>
      and component
      <k-button>Button</k-button>
    </k-text>
  </k-space>
</template>

<script lang="ts" setup>
import { Bell, ElementPlus } from '@element-plus/icons-vue'
</script>
