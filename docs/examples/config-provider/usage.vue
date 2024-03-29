<template>
  <div>
    <k-button mb-2 @click="toggle">Switch Language</k-button>
    <br />

    <k-config-provider :locale="locale">
      <k-table mb-1 :data="[]" />
      <k-pagination :total="100" />
    </k-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import zhCn from 'kbt-ui/dist/locale/zh-cn.mjs'
import en from 'kbt-ui/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>
