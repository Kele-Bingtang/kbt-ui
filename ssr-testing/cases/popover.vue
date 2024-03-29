<template>
  <k-popover
    ref="popover"
    placement="right"
    title="Title"
    :width="200"
    trigger="focus"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <k-button>Focus to activate</k-button>
    </template>
  </k-popover>
</template>
