<template>
  <k-button plain @click="open"> Hide close button </k-button>
</template>

<script lang="ts" setup>
import { KNotification } from 'kbt-ui'

const open = () => {
  KNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>
