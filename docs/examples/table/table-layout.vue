<template>
  <k-radio-group v-model="tableLayout">
    <k-radio-button value="fixed">fixed</k-radio-button>
    <k-radio-button value="auto">auto</k-radio-button>
  </k-radio-group>
  <k-table :data="tableData" :table-layout="tableLayout">
    <k-table-column prop="date" label="Date" />
    <k-table-column prop="name" label="Name" />
    <k-table-column prop="address" label="Address" />
  </k-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tableLayout = ref('fixed')

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
