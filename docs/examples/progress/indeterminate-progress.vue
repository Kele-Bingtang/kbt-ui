<template>
  <div class="demo-progress">
    <k-progress :percentage="50" :indeterminate="true" />
    <k-progress :percentage="100" :format="format" :indeterminate="true" />
    <k-progress
      :percentage="100"
      status="success"
      :indeterminate="true"
      :duration="5"
    />
    <k-progress
      :percentage="100"
      status="warning"
      :indeterminate="true"
      :duration="1"
    />
    <k-progress :percentage="50" status="exception" :indeterminate="true" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>
<style scoped>
.demo-progress .k-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
