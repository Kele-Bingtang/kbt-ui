<template>
  <div class="slider-demo-block">
    <k-slider v-model="value" show-input size="large" />
    <k-slider v-model="value" show-input />
    <k-slider v-model="value" show-input size="small" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<style scoped>
.slider-demo-block {
  max-width: 600px;
}

.k-slider {
  margin-top: 20px;
}

.k-slider:first-child {
  margin-top: 0;
}
</style>
