<template>
  <k-badge is-dot class="item">query</k-badge>
  <k-badge is-dot class="item">
    <k-button class="share-button" :icon="Share" type="primary" />
  </k-badge>
</template>

<script lang="ts" setup>
import { Share } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
