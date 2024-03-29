<template>
  <k-steps
    class="mb-4"
    style="max-width: 600px"
    :space="200"
    :active="1"
    simple
  >
    <k-step title="Step 1" :icon="Edit" />
    <k-step title="Step 2" :icon="UploadFilled" />
    <k-step title="Step 3" :icon="Picture" />
  </k-steps>

  <k-steps style="max-width: 600px" :active="1" finish-status="success" simple>
    <k-step title="Step 1" />
    <k-step title="Step 2" />
    <k-step title="Step 3" />
  </k-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'
</script>
