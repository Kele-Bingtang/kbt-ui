<template>
  <!-- eslint-disable vue/require-toggle-inside-transition  -->
  <k-tooltip-v2 aria-label="content" placement="top" content-class="scale-in">
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
</script>

<style>
@keyframes scale-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.k-tooltip-v2__content.scale-in {
  animation: scale-in var(--k-transition-duration) ease-out forwards;
}
</style>
