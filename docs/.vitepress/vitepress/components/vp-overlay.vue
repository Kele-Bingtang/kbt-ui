<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <Transition name="k-fade-in">
    <div v-if="show" />
  </Transition>
</template>
