<template>
  <div class="flex gap-4 mb-4">
    <span>Using attributes</span>
    <k-input
      v-model="input1"
      style="width: 240px"
      placeholder="Pick a date"
      :suffix-icon="Calendar"
    />
    <k-input
      v-model="input2"
      style="width: 240px"
      placeholder="Type something"
      :prefix-icon="Search"
    />
  </div>
  <div class="flex gap-4">
    <span>Using slots</span>
    <k-input v-model="input3" style="width: 240px" placeholder="Pick a date">
      <template #suffix>
        <k-icon class="k-input__icon"><calendar /></k-icon>
      </template>
    </k-input>
    <k-input v-model="input4" style="width: 240px" placeholder="Type something">
      <template #prefix>
        <k-icon class="k-input__icon"><search /></k-icon>
      </template>
    </k-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
</script>
