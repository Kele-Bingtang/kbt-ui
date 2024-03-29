<template>
  <k-popover :visible="visible" placement="top" :width="160">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <k-button size="small" text @click="visible = false">cancel</k-button>
      <k-button size="small" type="primary" @click="visible = false"
        >confirm</k-button
      >
    </div>
    <template #reference>
      <k-button @click="visible = true">Delete</k-button>
    </template>
  </k-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
