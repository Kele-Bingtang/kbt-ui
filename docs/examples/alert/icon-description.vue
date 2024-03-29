<template>
  <div style="max-width: 600px">
    <k-alert
      title="Success alert"
      type="success"
      description="More text description"
      show-icon
    />
    <k-alert
      title="Info alert"
      type="info"
      description="More text description"
      show-icon
    />
    <k-alert
      title="Warning alert"
      type="warning"
      description="More text description"
      show-icon
    />
    <k-alert
      title="Error alert"
      type="error"
      description="More text description"
      show-icon
    />
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
