<template>
  <div class="demo-progress">
    <k-progress :text-inside="true" :stroke-width="26" :percentage="70" />
    <k-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    />
    <k-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    />
    <k-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    />
  </div>
</template>

<style scoped>
.demo-progress .k-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
