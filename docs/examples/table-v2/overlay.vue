<template>
  <k-table-v2
    :columns="columns"
    :data="data"
    :row-height="40"
    :width="700"
    :height="400"
  >
    <template #overlay>
      <div
        class="k-loading-mask"
        style="display: flex; align-items: center; justify-content: center"
      >
        <k-icon class="is-loading" color="var(--k-color-primary)" :size="26">
          <loading-icon />
        </k-icon>
      </div>
    </template>
  </k-table-v2>
</template>

<script lang="ts" setup>
import { Loading as LoadingIcon } from '@element-plus/icons-vue'

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
</script>
<style>
.example-showcase .k-table-v2__overlay {
  z-index: 9;
}
</style>
