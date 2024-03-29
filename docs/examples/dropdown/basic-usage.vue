<template>
  <k-dropdown>
    <span class="k-dropdown-link">
      Dropdown List
      <k-icon class="k-icon--right">
        <arrow-down />
      </k-icon>
    </span>
    <template #dropdown>
      <k-dropdown-menu>
        <k-dropdown-item>Action 1</k-dropdown-item>
        <k-dropdown-item>Action 2</k-dropdown-item>
        <k-dropdown-item>Action 3</k-dropdown-item>
        <k-dropdown-item disabled>Action 4</k-dropdown-item>
        <k-dropdown-item divided>Action 5</k-dropdown-item>
      </k-dropdown-menu>
    </template>
  </k-dropdown>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>
<style scoped>
.example-showcase .k-dropdown-link {
  cursor: pointer;
  color: var(--k-color-primary);
  display: flex;
  align-items: center;
}
</style>
