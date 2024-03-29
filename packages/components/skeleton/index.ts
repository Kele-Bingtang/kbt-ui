import { withInstall, withNoopInstall } from '@kbt-ui/utils'

import Skeleton from './src/skeleton.vue'
import SkeletonItem from './src/skeleton-item.vue'

export const KSkeleton = withInstall(Skeleton, {
  SkeletonItem,
})
export const KSkeletonItem = withNoopInstall(SkeletonItem)
export default KSkeleton

export * from './src/skeleton'
export * from './src/skeleton-item'
