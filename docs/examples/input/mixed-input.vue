<template>
  <div>
    <k-input
      v-model="input1"
      style="max-width: 600px"
      placeholder="Please input"
    >
      <template #prepend>Http://</template>
    </k-input>
  </div>
  <div class="mt-4">
    <k-input
      v-model="input2"
      style="max-width: 600px"
      placeholder="Please input"
    >
      <template #append>.com</template>
    </k-input>
  </div>
  <div class="mt-4">
    <k-input
      v-model="input3"
      style="max-width: 600px"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <k-select v-model="select" placeholder="Select" style="width: 115px">
          <k-option label="Restaurant" value="1" />
          <k-option label="Order No." value="2" />
          <k-option label="Tel" value="3" />
        </k-select>
      </template>
      <template #append>
        <k-button :icon="Search" />
      </template>
    </k-input>
  </div>
  <div class="mt-4">
    <k-input
      v-model="input3"
      style="max-width: 600px"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <k-button :icon="Search" />
      </template>
      <template #append>
        <k-select v-model="select" placeholder="Select" style="width: 115px">
          <k-option label="Restaurant" value="1" />
          <k-option label="Order No." value="2" />
          <k-option label="Tel" value="3" />
        </k-select>
      </template>
    </k-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
</script>

<style>
.input-with-select .k-input-group__prepend {
  background-color: var(--k-fill-color-blank);
}
</style>
