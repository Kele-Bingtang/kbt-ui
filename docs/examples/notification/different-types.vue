<template>
  <k-button plain @click="open1"> Success </k-button>
  <k-button plain @click="open2"> Warning </k-button>
  <k-button plain @click="open3"> Info </k-button>
  <k-button plain @click="open4"> Error </k-button>
</template>

<script lang="ts" setup>
import { KNotification } from 'kbt-ui'

const open1 = () => {
  KNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  KNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  KNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  KNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>
