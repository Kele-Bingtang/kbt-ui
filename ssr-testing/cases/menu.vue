<template>
  <k-menu :default-active="activeIndex" class="k-menu-demo" mode="horizontal">
    <k-menu-item index="1">Processing Center</k-menu-item>
    <k-sub-menu index="2">
      <template #title>Workspace</template>
      <k-menu-item index="2-1">item one</k-menu-item>
    </k-sub-menu>
    <k-menu-item index="3" disabled>Info</k-menu-item>
    <k-menu-item index="4">Orders</k-menu-item>
  </k-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
</script>
