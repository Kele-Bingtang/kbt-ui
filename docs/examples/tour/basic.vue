<template>
  <k-button type="primary" @click="open = true">Begin Tour</k-button>

  <k-divider />

  <k-space>
    <k-button ref="ref1">Upload</k-button>
    <k-button ref="ref2" type="primary">Save</k-button>
    <k-button ref="ref3" :icon="MoreFilled" />
  </k-space>

  <k-tour v-model="open">
    <k-tour-step :target="ref1?.$el" title="Upload File">
      <img
        style="width: 240px"
        src="https://kbt-ui.org/images/kbt-ui-logo.png"
        alt="tour.png"
      />
      <div>Put you files here.</div>
    </k-tour-step>
    <k-tour-step
      :target="ref2?.$el"
      title="Save"
      description="Save your changes"
    />
    <k-tour-step
      :target="ref3?.$el"
      title="Other Actions"
      description="Click to see other"
    />
  </k-tour>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'
import type { ButtonInstance } from 'kbt-ui'

const ref1 = ref<ButtonInstance>()
const ref2 = ref<ButtonInstance>()
const ref3 = ref<ButtonInstance>()

const open = ref(false)
</script>
