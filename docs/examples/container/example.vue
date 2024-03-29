<template>
  <k-container class="layout-container-demo" style="height: 500px">
    <k-aside width="200px">
      <k-scrollbar>
        <k-menu :default-openeds="['1', '3']">
          <k-sub-menu index="1">
            <template #title>
              <k-icon><message /></k-icon>Navigator One
            </template>
            <k-menu-item-group>
              <template #title>Group 1</template>
              <k-menu-item index="1-1">Option 1</k-menu-item>
              <k-menu-item index="1-2">Option 2</k-menu-item>
            </k-menu-item-group>
            <k-menu-item-group title="Group 2">
              <k-menu-item index="1-3">Option 3</k-menu-item>
            </k-menu-item-group>
            <k-sub-menu index="1-4">
              <template #title>Option4</template>
              <k-menu-item index="1-4-1">Option 4-1</k-menu-item>
            </k-sub-menu>
          </k-sub-menu>
          <k-sub-menu index="2">
            <template #title>
              <k-icon><icon-menu /></k-icon>Navigator Two
            </template>
            <k-menu-item-group>
              <template #title>Group 1</template>
              <k-menu-item index="2-1">Option 1</k-menu-item>
              <k-menu-item index="2-2">Option 2</k-menu-item>
            </k-menu-item-group>
            <k-menu-item-group title="Group 2">
              <k-menu-item index="2-3">Option 3</k-menu-item>
            </k-menu-item-group>
            <k-sub-menu index="2-4">
              <template #title>Option 4</template>
              <k-menu-item index="2-4-1">Option 4-1</k-menu-item>
            </k-sub-menu>
          </k-sub-menu>
          <k-sub-menu index="3">
            <template #title>
              <k-icon><setting /></k-icon>Navigator Three
            </template>
            <k-menu-item-group>
              <template #title>Group 1</template>
              <k-menu-item index="3-1">Option 1</k-menu-item>
              <k-menu-item index="3-2">Option 2</k-menu-item>
            </k-menu-item-group>
            <k-menu-item-group title="Group 2">
              <k-menu-item index="3-3">Option 3</k-menu-item>
            </k-menu-item-group>
            <k-sub-menu index="3-4">
              <template #title>Option 4</template>
              <k-menu-item index="3-4-1">Option 4-1</k-menu-item>
            </k-sub-menu>
          </k-sub-menu>
        </k-menu>
      </k-scrollbar>
    </k-aside>

    <k-container>
      <k-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <k-dropdown>
            <k-icon style="margin-right: 8px; margin-top: 1px"
              ><setting
            /></k-icon>
            <template #dropdown>
              <k-dropdown-menu>
                <k-dropdown-item>View</k-dropdown-item>
                <k-dropdown-item>Add</k-dropdown-item>
                <k-dropdown-item>Delete</k-dropdown-item>
              </k-dropdown-menu>
            </template>
          </k-dropdown>
          <span>Tom</span>
        </div>
      </k-header>

      <k-main>
        <k-scrollbar>
          <k-table :data="tableData">
            <k-table-column prop="date" label="Date" width="140" />
            <k-table-column prop="name" label="Name" width="120" />
            <k-table-column prop="address" label="Address" />
          </k-table>
        </k-scrollbar>
      </k-main>
    </k-container>
  </k-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>
.layout-container-demo .k-header {
  position: relative;
  background-color: var(--k-color-primary-light-7);
  color: var(--k-text-color-primary);
}
.layout-container-demo .k-aside {
  color: var(--k-text-color-primary);
  background: var(--k-color-primary-light-8);
}
.layout-container-demo .k-menu {
  border-right: none;
}
.layout-container-demo .k-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
