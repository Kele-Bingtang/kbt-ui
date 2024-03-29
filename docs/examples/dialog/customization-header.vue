<template>
  <k-button plain @click="visible = true">
    Open Dialog with customized header
  </k-button>

  <k-dialog v-model="visible" :show-close="false" width="500">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <k-button type="danger" @click="close">
          <k-icon class="k-icon--left"><CircleCloseFilled /></k-icon>
          Close
        </k-button>
      </div>
    </template>
    This is dialog content.
  </k-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { KButton, KDialog } from 'kbt-ui'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const visible = ref(false)
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>
