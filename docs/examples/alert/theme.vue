<template>
  <div style="max-width: 600px">
    <k-alert title="Success alert" type="success" effect="dark" />
    <k-alert title="Info alert" type="info" effect="dark" />
    <k-alert title="Warning alert" type="warning" effect="dark" />
    <k-alert title="Error alert" type="error" effect="dark" />
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
