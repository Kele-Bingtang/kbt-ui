<template>
  <k-row>
    <k-col :span="24"><div class="grid-content ep-bg-purple-dark" /></k-col>
  </k-row>
  <k-row>
    <k-col :span="12"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="12"><div class="grid-content ep-bg-purple-light" /></k-col>
  </k-row>
  <k-row>
    <k-col :span="8"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="8"><div class="grid-content ep-bg-purple-light" /></k-col>
    <k-col :span="8"><div class="grid-content ep-bg-purple" /></k-col>
  </k-row>
  <k-row>
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple-light" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="6"><div class="grid-content ep-bg-purple-light" /></k-col>
  </k-row>
  <k-row>
    <k-col :span="4"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="4"><div class="grid-content ep-bg-purple-light" /></k-col>
    <k-col :span="4"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="4"><div class="grid-content ep-bg-purple-light" /></k-col>
    <k-col :span="4"><div class="grid-content ep-bg-purple" /></k-col>
    <k-col :span="4"><div class="grid-content ep-bg-purple-light" /></k-col>
  </k-row>
</template>

<style lang="scss">
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
