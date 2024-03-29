<template>
  <div
    :class="[ns.b('dragger'), ns.is('dragover', dragover)]"
    @drop.prevent="onDrop"
    @dragover.prevent="onDragover"
    @dragleave.prevent="dragover = false"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { inject, ref } from 'vue'
import { useNamespace } from '@kbt-ui/hooks'
import { useFormDisabled } from '@kbt-ui/components/form'
import { throwError } from '@kbt-ui/utils/error'
import { uploadContextKey } from './constants'
import { uploadDraggerEmits, uploadDraggerProps } from './upload-dragger'

const COMPONENT_NAME = 'KUploadDrag'

defineOptions({
  name: COMPONENT_NAME,
})

defineProps(uploadDraggerProps)
const emit = defineEmits(uploadDraggerEmits)

const uploaderContext = inject(uploadContextKey)
if (!uploaderContext) {
  throwError(COMPONENT_NAME, 'usage: <k-upload><k-upload-dragger /></k-upload>')
}

const ns = useNamespace('upload')
const dragover = ref(false)
const disabled = useFormDisabled()

const onDrop = (e: DragEvent) => {
  if (disabled.value) return
  dragover.value = false

  e.stopPropagation()

  const files = Array.from(e.dataTransfer!.files)
  emit('file', files)
}

const onDragover = () => {
  if (!disabled.value) dragover.value = true
}
</script>
