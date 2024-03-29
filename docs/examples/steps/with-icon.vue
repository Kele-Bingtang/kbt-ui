<template>
  <k-steps style="max-width: 600px" :active="1">
    <k-step title="Step 1" :icon="Edit" />
    <k-step title="Step 2" :icon="Upload" />
    <k-step title="Step 3" :icon="Picture" />
  </k-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, Upload } from '@element-plus/icons-vue'
</script>
