<template>
  <k-row>
    <k-col :span="6">
      <k-statistic title="Daily active users" :value="268500" />
    </k-col>
    <k-col :span="6">
      <k-statistic :value="138">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio of men to women
            <k-icon style="margin-left: 4px" :size="12">
              <Male />
            </k-icon>
          </div>
        </template>
        <template #suffix>/100</template>
      </k-statistic>
    </k-col>
    <k-col :span="6">
      <k-statistic title="Total Transactions" :value="outputValue" />
    </k-col>
    <k-col :span="6">
      <k-statistic title="Feedback number" :value="562">
        <template #suffix>
          <k-icon style="vertical-align: -0.125em">
            <ChatLineRound />
          </k-icon>
        </template>
      </k-statistic>
    </k-col>
  </k-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { ChatLineRound, Male } from '@element-plus/icons-vue'

const source = ref(0)
const outputValue = useTransition(source, {
  duration: 1500,
})
source.value = 172000
</script>

<style scoped>
.k-col {
  text-align: center;
}
</style>
