<template>
  <k-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <k-button class="m-2">Hover to activate</k-button>
    </template>
  </k-popover>

  <k-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <k-button class="m-2">Click to activate</k-button>
    </template>
  </k-popover>

  <k-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <k-button class="m-2">Focus to activate</k-button>
    </template>
  </k-popover>

  <k-popover
    ref="popover"
    title="Title"
    :width="200"
    trigger="contextmenu"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <k-button class="m-2">contextmenu to activate</k-button>
    </template>
  </k-popover>

  <k-popover
    :visible="visible"
    placement="bottom"
    title="Title"
    :width="200"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <k-button class="m-2" @click="visible = !visible"
        >Manual to activate</k-button
      >
    </template>
  </k-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<style scoped>
.k-button + .k-button {
  margin-left: 8px;
}
</style>
