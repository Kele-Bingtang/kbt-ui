<template>
  <k-row class="block-col-2">
    <k-col :span="8">
      <span class="demonstration">hover to trigger</span>
      <k-dropdown>
        <span class="k-dropdown-link">
          Dropdown List<k-icon class="k-icon--right"><arrow-down /></k-icon>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item :icon="Plus">Action 1</k-dropdown-item>
            <k-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </k-dropdown-item>
            <k-dropdown-item :icon="CirclePlus">Action 3</k-dropdown-item>
            <k-dropdown-item :icon="Check">Action 4</k-dropdown-item>
            <k-dropdown-item :icon="CircleCheck">Action 5</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
    </k-col>
    <k-col :span="8">
      <span class="demonstration">click to trigger</span>
      <k-dropdown trigger="click">
        <span class="k-dropdown-link">
          Dropdown List<k-icon class="k-icon--right"><arrow-down /></k-icon>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item :icon="Plus">Action 1</k-dropdown-item>
            <k-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </k-dropdown-item>
            <k-dropdown-item :icon="CirclePlus">Action 3</k-dropdown-item>
            <k-dropdown-item :icon="Check">Action 4</k-dropdown-item>
            <k-dropdown-item :icon="CircleCheck">Action 5</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
    </k-col>
    <k-col :span="8">
      <span class="demonstration">right click to trigger</span>
      <k-dropdown trigger="contextmenu">
        <span class="k-dropdown-link">
          Dropdown List<k-icon class="k-icon--right"><arrow-down /></k-icon>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item :icon="Plus">Action 1</k-dropdown-item>
            <k-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </k-dropdown-item>
            <k-dropdown-item :icon="CirclePlus">Action 3</k-dropdown-item>
            <k-dropdown-item :icon="Check">Action 4</k-dropdown-item>
            <k-dropdown-item :icon="CircleCheck">Action 5</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
    </k-col>
  </k-row>
</template>

<script lang="ts" setup>
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--k-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.block-col-2 .k-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
