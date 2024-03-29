<template>
  <k-select-v2
    ref="select"
    v-model="value"
    :options="options"
    placeholder="Select"
    style="width: 240px"
  >
    <template #footer>
      <k-button v-if="!isAdding" text bg size="small" @click="onAddOption">
        Add an option
      </k-button>
      <div v-else class="select-footer">
        <k-input
          v-model="optionName"
          class="option-input"
          placeholder="input option name"
          size="small"
        />
        <div>
          <k-button type="primary" size="small" @click="onConfirm">
            confirm
          </k-button>
          <k-button size="small" @click="clear">cancel</k-button>
        </div>
      </div>
    </template>
  </k-select-v2>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'

import type { CheckboxValueType } from 'kbt-ui'

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const select = ref(null)
const isAdding = ref(false)
const value = ref<CheckboxValueType[]>([])
const optionName = ref('')
const options = ref(
  Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${initials[idx % 10]}${idx}`,
  }))
)

const onAddOption = () => {
  isAdding.value = true
}

const onConfirm = () => {
  if (optionName.value) {
    options.value.push({
      label: optionName.value,
      value: optionName.value,
    })
    clear()
    nextTick(() => {
      select.value?.scrollTo(options.value.length - 1)
    })
  }
}

const clear = () => {
  optionName.value = ''
  isAdding.value = false
}
</script>

<style lang="scss" scoped>
.select-footer {
  display: flex;
  flex-direction: column;

  .option-input {
    width: 100%;
    margin-bottom: 8px;
  }
}
</style>
