<template>
  <k-button @click="visible = true">
    Open Drawer with customized header
  </k-button>
  <k-drawer v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
      <k-button type="danger" @click="close">
        <k-icon class="k-icon--left"><CircleCloseFilled /></k-icon>
        Close
      </k-button>
    </template>
    This is drawer content.
  </k-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { KButton, KDrawer } from 'kbt-ui'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const visible = ref(false)
</script>
