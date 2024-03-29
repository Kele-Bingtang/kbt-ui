<template>
  <k-focus-group-collection>
    <k-roving-focus-group-impl v-bind="$attrs">
      <slot />
    </k-roving-focus-group-impl>
  </k-focus-group-collection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import KRovingFocusGroupImpl from './roving-focus-group-impl.vue'
import { KCollection as KFocusGroupCollection } from './roving-focus-group'

export default defineComponent({
  name: 'KRovingFocusGroup',
  components: {
    KFocusGroupCollection,
    KRovingFocusGroupImpl,
  },
})
</script>
