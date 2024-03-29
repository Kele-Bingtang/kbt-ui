<template>
  <k-button plain @click="open"> Notification with offset </k-button>
</template>

<script lang="ts" setup>
import { KNotification } from 'kbt-ui'

const open = () => {
  KNotification.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}
</script>
