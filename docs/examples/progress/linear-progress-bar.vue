<template>
  <div class="demo-progress">
    <k-progress :percentage="50" />
    <k-progress :percentage="100" :format="format" />
    <k-progress :percentage="100" status="success" />
    <k-progress :percentage="100" status="warning" />
    <k-progress :percentage="50" status="exception" />
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
