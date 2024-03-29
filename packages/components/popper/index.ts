import { withInstall } from '@kbt-ui/utils'
import Popper from './src/popper.vue'

import KPopperArrow from './src/arrow.vue'
import KPopperTrigger from './src/trigger.vue'
import KPopperContent from './src/content.vue'

export { KPopperArrow, KPopperTrigger, KPopperContent }

export const KPopper = withInstall(Popper)
export default KPopper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'
export * from './src/arrow'
export * from './src/constants'

export type { Placement, Options } from '@popperjs/core'
