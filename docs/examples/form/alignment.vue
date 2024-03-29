<template>
  <k-radio-group v-model="labelPosition" label="label position">
    <k-radio-button value="left">Left</k-radio-button>
    <k-radio-button value="right">Right</k-radio-button>
    <k-radio-button value="top">Top</k-radio-button>
  </k-radio-group>
  <div style="margin: 20px" />
  <k-form
    :label-position="labelPosition"
    label-width="auto"
    :model="formLabelAlign"
    style="max-width: 600px"
  >
    <k-form-item label="Name">
      <k-input v-model="formLabelAlign.name" />
    </k-form-item>
    <k-form-item label="Activity zone">
      <k-input v-model="formLabelAlign.region" />
    </k-form-item>
    <k-form-item label="Activity form">
      <k-input v-model="formLabelAlign.type" />
    </k-form-item>
  </k-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormProps } from 'kbt-ui'

const labelPosition = ref<FormProps['labelPosition']>('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>
