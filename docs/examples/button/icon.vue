<template>
  <div>
    <k-button type="primary" :icon="Edit" />
    <k-button type="primary" :icon="Share" />
    <k-button type="primary" :icon="Delete" />
    <k-button type="primary" :icon="Search">Search</k-button>
    <k-button type="primary">
      Upload<k-icon class="k-icon--right"><Upload /></k-icon>
    </k-button>
  </div>
</template>
<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
</script>
