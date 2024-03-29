<template>
  <div>
    <k-link :icon="Edit">Edit</k-link>
    <k-link>
      Check<k-icon class="k-icon--right"><icon-view /></k-icon>
    </k-link>
  </div>
</template>

<script setup lang="ts">
import { Edit, View as IconView } from '@element-plus/icons-vue'
</script>

<style scoped>
.k-link {
  margin-right: 8px;
}
</style>
