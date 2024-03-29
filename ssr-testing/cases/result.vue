<template>
  <k-row>
    <k-col :sm="12" :lg="6">
      <k-result
        icon="success"
        title="Success Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <k-button type="primary">Back</k-button>
        </template>
      </k-result>
    </k-col>
    <k-col :sm="12" :lg="6">
      <k-result
        icon="warning"
        title="Warning Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <k-button type="primary">Back</k-button>
        </template>
      </k-result>
    </k-col>
    <k-col :sm="12" :lg="6">
      <k-result
        icon="error"
        title="Error Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <k-button type="primary">Back</k-button>
        </template>
      </k-result>
    </k-col>
    <k-col :sm="12" :lg="6">
      <k-result icon="info" title="Info Tip">
        <template #sub-title>
          <p>Using slot as subtitle</p>
        </template>
        <template #extra>
          <k-button type="primary">Back</k-button>
        </template>
      </k-result>
    </k-col>
  </k-row>
</template>
