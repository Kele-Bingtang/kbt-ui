<template>
  <k-button plain @click="open1"> Closes automatically </k-button>
  <k-button plain @click="open2"> Won't close automatically </k-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { KNotification } from 'kbt-ui'

const open1 = () => {
  KNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

const open2 = () => {
  KNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  })
}
</script>
