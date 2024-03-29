<template>
  <main :class="ns.b()">
    <slot />
  </main>
</template>
<script lang="ts" setup>
import { useNamespace } from '@kbt-ui/hooks'

defineOptions({
  name: 'KMain',
})

const ns = useNamespace('main')
</script>
