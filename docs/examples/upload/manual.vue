<template>
  <k-upload
    ref="uploadRef"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false"
  >
    <template #trigger>
      <k-button type="primary">select file</k-button>
    </template>

    <k-button class="ml-3" type="success" @click="submitUpload">
      upload to server
    </k-button>

    <template #tip>
      <div class="k-upload__tip">jpg/png files with a size less than 500kb</div>
    </template>
  </k-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadInstance } from 'kbt-ui'

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>
