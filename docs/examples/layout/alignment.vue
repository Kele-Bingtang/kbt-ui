<template>
  <k-row class="row-bg">
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple-light" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
  </k-row>
  <k-row class="row-bg" justify="center">
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple-light" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
  </k-row>
  <k-row class="row-bg" justify="end">
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple-light" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
  </k-row>
  <k-row class="row-bg" justify="space-between">
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple-light" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
  </k-row>
  <k-row class="row-bg" justify="space-around">
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple-light" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
  </k-row>
  <k-row class="row-bg" justify="space-evenly">
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple-light" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
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
