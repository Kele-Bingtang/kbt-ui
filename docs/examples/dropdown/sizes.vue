<template>
  <k-dropdown size="large" split-button type="primary">
    Large
    <template #dropdown>
      <k-dropdown-menu>
        <k-dropdown-item>Action 1</k-dropdown-item>
        <k-dropdown-item>Action 2</k-dropdown-item>
        <k-dropdown-item>Action 3</k-dropdown-item>
        <k-dropdown-item>Action 4</k-dropdown-item>
      </k-dropdown-menu>
    </template>
  </k-dropdown>

  <k-dropdown split-button type="primary">
    Default
    <template #dropdown>
      <k-dropdown-menu>
        <k-dropdown-item>Action 1</k-dropdown-item>
        <k-dropdown-item>Action 2</k-dropdown-item>
        <k-dropdown-item>Action 3</k-dropdown-item>
        <k-dropdown-item>Action 4</k-dropdown-item>
      </k-dropdown-menu>
    </template>
  </k-dropdown>

  <k-dropdown size="small" split-button type="primary">
    Small
    <template #dropdown>
      <k-dropdown-menu>
        <k-dropdown-item>Action 1</k-dropdown-item>
        <k-dropdown-item>Action 2</k-dropdown-item>
        <k-dropdown-item>Action 3</k-dropdown-item>
        <k-dropdown-item>Action 4</k-dropdown-item>
      </k-dropdown-menu>
    </template>
  </k-dropdown>
</template>
<style scoped>
.example-showcase .k-dropdown + .k-dropdown {
  margin-left: 15px;
}
</style>
