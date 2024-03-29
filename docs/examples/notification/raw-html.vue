<template>
  <k-button plain @click="open"> Use HTML String </k-button>
</template>

<script lang="ts" setup>
import { KNotification } from 'kbt-ui'

const open = () => {
  KNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
