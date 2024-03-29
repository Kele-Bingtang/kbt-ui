<template>
  <k-button plain @click="open">Click to open Message Box</k-button>
</template>

<script lang="ts" setup>
import { markRaw } from 'vue'
import { KMessageBox } from 'kbt-ui'
import { Delete } from '@element-plus/icons-vue'

const open = () => {
  KMessageBox.confirm(
    'It will permanently delete the file. Continue?',
    'Warning',
    {
      type: 'warning',
      icon: markRaw(Delete),
    }
  )
}
</script>
