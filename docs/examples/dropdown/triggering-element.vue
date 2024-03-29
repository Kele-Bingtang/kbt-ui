<template>
  <div class="flex flex-wrap items-center">
    <k-dropdown>
      <k-button type="primary">
        Dropdown List<k-icon class="k-icon--right"><arrow-down /></k-icon>
      </k-button>
      <template #dropdown>
        <k-dropdown-menu>
          <k-dropdown-item>Action 1</k-dropdown-item>
          <k-dropdown-item>Action 2</k-dropdown-item>
          <k-dropdown-item>Action 3</k-dropdown-item>
          <k-dropdown-item>Action 4</k-dropdown-item>
          <k-dropdown-item>Action 5</k-dropdown-item>
        </k-dropdown-menu>
      </template>
    </k-dropdown>
    <k-dropdown split-button type="primary" @click="handleClick">
      Dropdown List
      <template #dropdown>
        <k-dropdown-menu>
          <k-dropdown-item>Action 1</k-dropdown-item>
          <k-dropdown-item>Action 2</k-dropdown-item>
          <k-dropdown-item>Action 3</k-dropdown-item>
          <k-dropdown-item>Action 4</k-dropdown-item>
          <k-dropdown-item>Action 5</k-dropdown-item>
        </k-dropdown-menu>
      </template>
    </k-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}
</script>
<style scoped>
.example-showcase .k-dropdown + .k-dropdown {
  margin-left: 15px;
}
.example-showcase .k-dropdown-link {
  cursor: pointer;
  color: var(--k-color-primary);
  display: flex;
  align-items: center;
}
</style>
