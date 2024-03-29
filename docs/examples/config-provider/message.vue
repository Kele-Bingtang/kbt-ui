<template>
  <div>
    <k-config-provider :message="config">
      <k-button @click="open">OPEN</k-button>
    </k-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { KMessage } from 'kbt-ui'
const config = reactive({
  max: 3,
})
const open = () => {
  KMessage('This is a message.')
}
</script>
