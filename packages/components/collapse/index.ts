import { withInstall, withNoopInstall } from '@kbt-ui/utils'

import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

export const KCollapse = withInstall(Collapse, {
  CollapseItem,
})
export default KCollapse
export const KCollapseItem = withNoopInstall(CollapseItem)

export * from './src/collapse'
export * from './src/collapse-item'
export * from './src/constants'
export type { CollapseInstance, CollapseItemInstance } from './src/instance'
