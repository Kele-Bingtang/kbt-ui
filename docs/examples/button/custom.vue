<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div>
    <k-button color="#626aef" :dark="isDark">Default</k-button>
    <k-button color="#626aef" :dark="isDark" plain>Plain</k-button>

    <k-button color="#626aef" :dark="isDark" disabled>Disabled</k-button>
    <k-button color="#626aef" :dark="isDark" disabled plain
      >Disabled Plain</k-button
    >
  </div>
</template>
