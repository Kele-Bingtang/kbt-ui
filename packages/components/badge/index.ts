import { withInstall } from '@kbt-ui/utils'

import Badge from './src/badge.vue'

export const KBadge = withInstall(Badge)
export default KBadge

export * from './src/badge'
export type { BadgeInstance } from './src/instance'
