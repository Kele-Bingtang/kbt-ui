<template>
  <div style="max-width: 600px">
    <k-alert title="Success alert" type="success" />
    <k-alert title="Info alert" type="info" />
    <k-alert title="Warning alert" type="warning" />
    <k-alert title="Error alert" type="error" />
  </div>
</template>

<style scoped>
.k-alert {
  margin: 20px 0 0;
}
.k-alert:first-child {
  margin: 0;
}
</style>
