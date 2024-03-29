<template>
  <div class="flex gap-4 mb-4 items-center">
    <k-input
      v-model="input1"
      style="width: 240px"
      size="large"
      placeholder="Please Input"
    />
    <k-input v-model="input2" style="width: 240px" placeholder="Please Input" />
    <k-input
      v-model="input3"
      style="width: 240px"
      size="small"
      placeholder="Please Input"
    />
  </div>
  <div class="flex gap-4 mb-4 items-center">
    <k-input
      v-model="input1"
      style="width: 240px"
      size="large"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
    <k-input
      v-model="input2"
      style="width: 240px"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
    <k-input
      v-model="input3"
      style="width: 240px"
      size="small"
      placeholder="Please Input"
      :suffix-icon="Search"
    />
  </div>
  <div class="flex gap-4 items-center">
    <k-input
      v-model="input1"
      style="width: 240px"
      size="large"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
    <k-input
      v-model="input2"
      style="width: 240px"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
    <k-input
      v-model="input3"
      style="width: 240px"
      size="small"
      placeholder="Please Input"
      :prefix-icon="Search"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>
