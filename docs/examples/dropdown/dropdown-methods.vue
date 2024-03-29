<template>
  <div style="font-size: 14px">
    <p>open(close) the Dropdown list2 will close(open) the Dropdown List1.</p>
  </div>
  <div style="margin: 15px">
    <k-button @click="showClick">show</k-button>
  </div>
  <k-dropdown ref="dropdown1" trigger="contextmenu" style="margin-right: 30px">
    <span class="k-dropdown-link"> Dropdown List1 </span>
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

  <k-dropdown trigger="contextmenu" @visible-change="handleVisible2">
    <span class="k-dropdown-link"> Dropdown List2 </span>
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

<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownInstance } from 'kbt-ui'

const dropdown1 = ref<DropdownInstance>()
function handleVisible2(visible: any) {
  if (!dropdown1.value) return
  if (visible) {
    dropdown1.value.handleClose()
  } else {
    dropdown1.value.handleOpen()
  }
}
function showClick() {
  if (!dropdown1.value) return
  dropdown1.value.handleOpen()
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
