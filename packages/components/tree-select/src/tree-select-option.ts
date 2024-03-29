import { defineComponent, getCurrentInstance, nextTick } from 'vue'
import { KOption } from '@kbt-ui/components/select'

const component = defineComponent({
  extends: KOption,
  setup(props, ctx) {
    const result = (KOption.setup as NonNullable<any>)(props, ctx)

    // use methods.selectOptionClick
    delete result.selectOptionClick

    const vm = (getCurrentInstance() as NonNullable<any>).proxy

    // Fix: https://github.com/kbt-ui/kbt-ui/issues/7917
    // `k-option` will delete the cache before unmount,
    // This is normal for flat arrays `<k-select><k-option v-for="3"></k-select>`,
    // Because the same node key does not create a difference node,
    // But in tree data, the same key at different levels will create diff nodes,
    // So the destruction of `k-option` in `nextTick` will be slower than
    // the creation of new `k-option`, which will delete the new node,
    // here restore the deleted node.
    // @link https://github.com/kbt-ui/kbt-ui/blob/6df6e49db07b38d6cc3b5e9a960782bd30879c11/packages/components/select/src/option.vue#L78
    nextTick(() => {
      if (!result.select.states.cachedOptions.get(vm.value)) {
        result.select.onOptionCreate(vm)
      }
    })

    return result
  },
  methods: {
    selectOptionClick() {
      // $el.parentElement => k-tree-node__content
      this.$el.parentElement.click()
    },
  },
})

export default component
