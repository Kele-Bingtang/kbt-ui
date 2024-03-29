<template>
  <div>
    <k-radio-group v-model="radio1">
      <k-radio value="1" size="large" border>Option A</k-radio>
      <k-radio value="2" size="large" border>Option B</k-radio>
    </k-radio-group>
  </div>
  <div style="margin-top: 20px">
    <k-radio-group v-model="radio2">
      <k-radio value="1" border>Option A</k-radio>
      <k-radio value="2" border>Option B</k-radio>
    </k-radio-group>
  </div>
  <div style="margin-top: 20px">
    <k-radio-group v-model="radio3" size="small">
      <k-radio value="1" border>Option A</k-radio>
      <k-radio value="2" border disabled>Option B</k-radio>
    </k-radio-group>
  </div>
  <div style="margin-top: 20px">
    <k-radio-group v-model="radio4" size="small" disabled>
      <k-radio value="1" border>Option A</k-radio>
      <k-radio value="2" border>Option B</k-radio>
    </k-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
</script>
