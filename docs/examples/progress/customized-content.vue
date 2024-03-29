<template>
  <div class="demo-progress">
    <k-progress :percentage="50">
      <k-button text>Content</k-button>
    </k-progress>
    <k-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </k-progress>
    <k-progress type="circle" :percentage="100" status="success">
      <k-button type="success" :icon="Check" circle />
    </k-progress>
    <k-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </k-progress>
  </div>
</template>

<script lang="ts" setup>
import { Check } from '@element-plus/icons-vue'
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.demo-progress .k-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .k-progress--circle {
  margin-right: 15px;
}
</style>
