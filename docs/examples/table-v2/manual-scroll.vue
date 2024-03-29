<template>
  <div class="mb-4 flex items-center">
    <k-form-item label="Scroll pixels" class="mr-4">
      <k-input v-model="scrollDelta" />
    </k-form-item>
    <k-form-item label="Scroll rows">
      <k-input v-model="scrollRows" />
    </k-form-item>
  </div>
  <div class="mb-4 flex items-center">
    <k-button @click="scrollByPixels"> Scroll by pixels </k-button>
    <k-button @click="scrollByRows"> Scroll by rows </k-button>
  </div>
  <div style="height: 400px">
    <k-auto-resizer>
      <template #default="{ height, width }">
        <k-table-v2
          ref="tableRef"
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </k-auto-resizer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TableV2Instance } from 'kbt-ui'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)
const tableRef = ref<TableV2Instance>()
const scrollDelta = ref(200)
const scrollRows = ref(10)

function scrollByPixels() {
  tableRef.value?.scrollToTop(scrollDelta.value)
}

function scrollByRows() {
  tableRef.value?.scrollToRow(scrollRows.value)
}
</script>
