<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, h, onMounted, reactive, ref } from 'vue'
import { pick } from 'lodash-unified'
import KSelect from '@kbt-ui/components/select'
import KTree from '@kbt-ui/components/tree'
import { useSelect } from './select'
import { useTree } from './tree'
import CacheOptions from './cache-options'

export default defineComponent({
  name: 'KTreeSelect',
  // disable `KSelect` inherit current attrs
  inheritAttrs: false,
  props: {
    ...KSelect.props,
    ...KTree.props,
    /**
     * @description The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data
     */
    cacheData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    const { slots, expose } = context

    const select = ref<InstanceType<typeof KSelect>>()
    const tree = ref<InstanceType<typeof KTree>>()

    const key = computed(() => props.nodeKey || props.valueKey || 'value')

    const selectProps = useSelect(props, context, { select, tree, key })
    const { cacheOptions, ...treeProps } = useTree(props, context, {
      select,
      tree,
      key,
    })

    // expose KTree/KSelect methods
    const methods = reactive({})
    expose(methods)
    onMounted(() => {
      Object.assign(methods, {
        ...pick(tree.value, [
          'filter',
          'updateKeyChildren',
          'getCheckedNodes',
          'setCheckedNodes',
          'getCheckedKeys',
          'setCheckedKeys',
          'setChecked',
          'getHalfCheckedNodes',
          'getHalfCheckedKeys',
          'getCurrentKey',
          'getCurrentNode',
          'setCurrentKey',
          'setCurrentNode',
          'getNode',
          'remove',
          'append',
          'insertBefore',
          'insertAfter',
        ]),
        ...pick(select.value, ['focus', 'blur']),
      })
    })

    return () =>
      h(
        KSelect,
        /**
         * 1. The `props` is processed into `Refs`, but `v-bind` and
         * render function props cannot read `Refs`, so use `reactive`
         * unwrap the `Refs` and keep reactive.
         * 2. The keyword `ref` requires `Ref`, but `reactive` broke it,
         * so use function.
         */
        reactive({
          ...selectProps,
          ref: (ref) => (select.value = ref),
        }),
        {
          ...slots,
          default: () => [
            h(CacheOptions, { data: cacheOptions.value }),
            h(
              KTree,
              reactive({
                ...treeProps,
                ref: (ref) => (tree.value = ref),
              })
            ),
          ],
        }
      )
  },
})
</script>
