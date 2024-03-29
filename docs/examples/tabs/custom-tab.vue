<template>
  <k-tabs type="border-card" class="demo-tabs">
    <k-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <k-icon><calendar /></k-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </k-tab-pane>
    <k-tab-pane label="Config">Config</k-tab-pane>
    <k-tab-pane label="Role">Role</k-tab-pane>
    <k-tab-pane label="Task">Task</k-tab-pane>
  </k-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from '@element-plus/icons-vue'
</script>
<style>
.demo-tabs > .k-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .k-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
