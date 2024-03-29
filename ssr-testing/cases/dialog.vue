<template>
  <k-button type="text" @click="dialogVisible = true"
    >click to open the Dialog</k-button
  >

  <k-dialog v-model="dialogVisible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <k-button style="margin-right: 10px" @click="dialogVisible = false"
          >Cancel</k-button
        >
        <k-button type="primary" @click="dialogVisible = false"
          >Confirm</k-button
        >
      </span>
    </template>
  </k-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(true)
</script>
