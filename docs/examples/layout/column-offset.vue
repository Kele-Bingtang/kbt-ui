<template>
  <k-row :gutter="20">
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></k-col>
  </k-row>
  <k-row :gutter="20">
    <k-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></k-col>
    <k-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></k-col>
  </k-row>
  <k-row :gutter="20">
    <k-col :span="12" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></k-col>
  </k-row>
</template>

<style>
.k-row {
  margin-bottom: 20px;
}
.k-row:last-child {
  margin-bottom: 0;
}
.k-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
