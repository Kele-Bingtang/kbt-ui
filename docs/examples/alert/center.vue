<template>
  <div style="max-width: 600px">
    <k-alert title="Success alert" type="success" center show-icon />
    <k-alert title="Info alert" type="info" center show-icon />
    <k-alert title="Warning alert" type="warning" center show-icon />
    <k-alert title="Error alert" type="error" center show-icon />
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
