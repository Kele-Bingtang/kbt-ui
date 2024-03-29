import { withInstall, withInstallDirective } from '@kbt-ui/utils'

import Popover from './src/popover.vue'
import PopoverDirective, { VPopover } from './src/directive'

export const KPopoverDirective = withInstallDirective(
  PopoverDirective,
  VPopover
)

export const KPopover = withInstall(Popover, {
  directive: KPopoverDirective,
})
export default KPopover

export * from './src/popover'
