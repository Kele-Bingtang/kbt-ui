<template>
  <div class="mb-4">
    <k-button>Default</k-button>
    <k-button type="primary">Primary</k-button>
    <k-button type="success">Success</k-button>
    <k-button type="info">Info</k-button>
    <k-button type="warning">Warning</k-button>
    <k-button type="danger">Danger</k-button>
  </div>

  <div class="mb-4">
    <k-button plain>Plain</k-button>
    <k-button type="primary" plain>Primary</k-button>
    <k-button type="success" plain>Success</k-button>
    <k-button type="info" plain>Info</k-button>
    <k-button type="warning" plain>Warning</k-button>
    <k-button type="danger" plain>Danger</k-button>
  </div>

  <div class="mb-4">
    <k-button round>Round</k-button>
    <k-button type="primary" round>Primary</k-button>
    <k-button type="success" round>Success</k-button>
    <k-button type="info" round>Info</k-button>
    <k-button type="warning" round>Warning</k-button>
    <k-button type="danger" round>Danger</k-button>
  </div>

  <div>
    <k-button :icon="Search" circle />
    <k-button type="primary" :icon="Edit" circle />
    <k-button type="success" :icon="Check" circle />
    <k-button type="info" :icon="Message" circle />
    <k-button type="warning" :icon="Star" circle />
    <k-button type="danger" :icon="Delete" circle />
  </div>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
