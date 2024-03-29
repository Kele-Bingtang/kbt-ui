<template>
  <k-button plain @click="open1"> Top Right </k-button>
  <k-button plain @click="open2"> Bottom Right </k-button>
  <k-button plain @click="open3"> Bottom Left </k-button>
  <k-button plain @click="open4"> Top Left </k-button>
</template>

<script lang="ts" setup>
import { KNotification } from 'kbt-ui'

const open1 = () => {
  KNotification({
    title: 'Custom Position',
    message: "I'm at the top right corner",
  })
}

const open2 = () => {
  KNotification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right',
  })
}

const open3 = () => {
  KNotification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left',
  })
}

const open4 = () => {
  KNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left',
  })
}
</script>
