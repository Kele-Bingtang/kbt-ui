<template>
  <div>
    <div m="b-2">
      <k-checkbox v-model="config.autoInsertSpace">autoInsertSpace</k-checkbox>
    </div>

    <k-config-provider :button="config">
      <k-button>中文</k-button>
    </k-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const config = reactive({
  autoInsertSpace: true,
})
</script>
