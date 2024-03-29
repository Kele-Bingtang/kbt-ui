<template>
  <k-button-group>
    <k-button type="primary" :icon="ArrowLeft">Previous Page</k-button>
    <k-button type="primary">
      Next Page<k-icon class="k-icon--right"><ArrowRight /></k-icon>
    </k-button>
  </k-button-group>

  <k-button-group class="ml-4">
    <k-button type="primary" :icon="Edit" />
    <k-button type="primary" :icon="Share" />
    <k-button type="primary" :icon="Delete" />
  </k-button-group>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  Share,
} from '@element-plus/icons-vue'
</script>
