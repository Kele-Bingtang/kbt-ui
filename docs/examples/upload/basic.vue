<template>
  <k-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
    <k-button type="primary">Click to upload</k-button>
    <template #tip>
      <div class="k-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </k-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { KMessage, KMessageBox } from 'kbt-ui'

import type { UploadProps, UploadUserFile } from 'kbt-ui'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'kbt-ui-logo.png',
    url: 'https://kbt-ui.youngkbt.cn/images/kbt-ui-logo.png',
  },
  {
    name: 'kbt-ui-logo2.svg',
    url: 'https://kbt-ui.youngkbt.cn/images/kbt-ui-logo.png',
  },
])

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  KMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return KMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
</script>
