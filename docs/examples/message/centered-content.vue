<template>
  <k-button plain @click="openCenter">Centered text</k-button>
</template>

<script lang="ts" setup>
import { KMessage } from 'kbt-ui'

const openCenter = () => {
  KMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
}
</script>
