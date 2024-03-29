<template>
  <span :class="ns.e('total')" :disabled="disabled">
    {{
      t('el.pagination.total', {
        total,
      })
    }}
  </span>
</template>

<script lang="ts" setup>
import { useLocale, useNamespace } from '@kbt-ui/hooks'
import { usePagination } from '../usePagination'
import { paginationTotalProps } from './total'

const { t } = useLocale()
const ns = useNamespace('pagination')
const { disabled } = usePagination()

defineOptions({
  name: 'KPaginationTotal',
})

defineProps(paginationTotalProps)
</script>
