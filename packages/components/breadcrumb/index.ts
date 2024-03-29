import { withInstall, withNoopInstall } from '@kbt-ui/utils'

import Breadcrumb from './src/breadcrumb.vue'
import BreadcrumbItem from './src/breadcrumb-item.vue'

export const KBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem,
})
export const KBreadcrumbItem = withNoopInstall(BreadcrumbItem)
export default KBreadcrumb

export * from './src/breadcrumb'
export * from './src/breadcrumb-item'
export * from './src/constants'
export type {
  BreadcrumbInstance,
  BreadcrumbItemInstance,
} from './src/instances'
