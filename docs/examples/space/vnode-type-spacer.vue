<template>
  <k-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <k-button> button {{ i }} </k-button>
    </div>
  </k-space>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { KDivider } from 'kbt-ui'

const size = ref(10)
const spacer = h(KDivider, { direction: 'vertical' })
</script>
