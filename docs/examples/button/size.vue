<template>
  <div class="flex flex-wrap items-center mb-4">
    <k-button size="large">Large</k-button>
    <k-button>Default</k-button>
    <k-button size="small">Small</k-button>
    <k-button size="large" :icon="Search">Search</k-button>
    <k-button :icon="Search">Search</k-button>
    <k-button size="small" :icon="Search">Search</k-button>
  </div>
  <div class="flex flex-wrap items-center mb-4">
    <k-button size="large" round>Large</k-button>
    <k-button round>Default</k-button>
    <k-button size="small" round>Small</k-button>
    <k-button size="large" :icon="Search" round>Search</k-button>
    <k-button :icon="Search" round>Search</k-button>
    <k-button size="small" :icon="Search" round>Search</k-button>
  </div>
  <div class="flex flex-wrap items-center">
    <k-button :icon="Search" size="large" circle />
    <k-button :icon="Search" circle />
    <k-button :icon="Search" size="small" circle />
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>
