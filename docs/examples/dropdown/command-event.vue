<template>
  <k-dropdown @command="handleCommand">
    <span class="k-dropdown-link">
      Dropdown List<k-icon class="k-icon--right"><arrow-down /></k-icon>
    </span>
    <template #dropdown>
      <k-dropdown-menu>
        <k-dropdown-item command="a">Action 1</k-dropdown-item>
        <k-dropdown-item command="b">Action 2</k-dropdown-item>
        <k-dropdown-item command="c">Action 3</k-dropdown-item>
        <k-dropdown-item command="d" disabled>Action 4</k-dropdown-item>
        <k-dropdown-item command="e" divided>Action 5</k-dropdown-item>
      </k-dropdown-menu>
    </template>
  </k-dropdown>
</template>

<script lang="ts" setup>
import { KMessage } from 'kbt-ui'
import { ArrowDown } from '@element-plus/icons-vue'

const handleCommand = (command: string | number | object) => {
  KMessage(`click on item ${command}`)
}
</script>
<style scoped>
.example-showcase .k-dropdown-link {
  cursor: pointer;
  color: var(--k-color-primary);
  display: flex;
  align-items: center;
}
</style>
