<script lang="ts" setup>
defineProps<{
  version: string
}>()
</script>

<template>
  <k-tag size="small" effect="plain" hit round class="ml-2">
    {{ version }}
  </k-tag>
</template>
