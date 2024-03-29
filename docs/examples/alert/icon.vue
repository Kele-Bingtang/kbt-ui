<template>
  <div style="max-width: 600px">
    <k-alert title="Success alert" type="success" show-icon />
    <k-alert title="Info alert" type="info" show-icon />
    <k-alert title="Warning alert" type="warning" show-icon />
    <k-alert title="Error alert" type="error" show-icon />
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
