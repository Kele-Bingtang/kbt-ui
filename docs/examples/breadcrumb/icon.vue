<template>
  <k-breadcrumb :separator-icon="ArrowRight">
    <k-breadcrumb-item :to="{ path: '/' }">homepage</k-breadcrumb-item>
    <k-breadcrumb-item>promotion management</k-breadcrumb-item>
    <k-breadcrumb-item>promotion list</k-breadcrumb-item>
    <k-breadcrumb-item>promotion detail</k-breadcrumb-item>
  </k-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>
