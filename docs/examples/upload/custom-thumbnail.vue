<template>
  <k-upload action="#" list-type="picture-card" :auto-upload="false">
    <k-icon><Plus /></k-icon>

    <template #file="{ file }">
      <div>
        <img class="k-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="k-upload-list__item-actions">
          <span
            class="k-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <k-icon><zoom-in /></k-icon>
          </span>
          <span
            v-if="!disabled"
            class="k-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <k-icon><Download /></k-icon>
          </span>
          <span
            v-if="!disabled"
            class="k-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <k-icon><Delete /></k-icon>
          </span>
        </span>
      </div>
    </template>
  </k-upload>

  <k-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </k-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import type { UploadFile } from 'kbt-ui'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}
</script>
