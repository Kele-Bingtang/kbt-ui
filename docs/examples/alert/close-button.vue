<template>
  <div style="max-width: 600px">
    <k-alert title="Unclosable alert" type="success" :closable="false" />
    <k-alert title="Customized close text" type="info" close-text="Gotcha" />
    <k-alert title="Alert with callback" type="warning" @close="hello" />
  </div>
</template>

<script lang="ts" setup>
const hello = () => {
  // eslint-disable-next-line no-alert
  alert('Hello World!')
}
</script>
<style scoped>
.k-alert {
  margin: 20px 0 0;
}
.k-alert:first-child {
  margin: 0;
}
</style>
