// This component is ported from https://github.com/radix-ui/primitives/tree/main/packages/react/roving-focus
// with some modification for Vue
import KRovingFocusGroup from './src/roving-focus-group.vue'
import KRovingFocusItem from './src/roving-focus-item.vue'

export { KRovingFocusGroup, KRovingFocusItem }

export * from './src/tokens'
export * from './src/utils'

export {
  ROVING_FOCUS_COLLECTION_INJECTION_KEY,
  ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY,
} from './src/roving-focus-group'

export default KRovingFocusGroup
