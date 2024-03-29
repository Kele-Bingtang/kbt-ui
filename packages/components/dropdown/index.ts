import { withInstall, withNoopInstall } from '@kbt-ui/utils'

import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'
import DropdownMenu from './src/dropdown-menu.vue'

export const KDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu,
})
export default KDropdown
export const KDropdownItem = withNoopInstall(DropdownItem)
export const KDropdownMenu = withNoopInstall(DropdownMenu)
export * from './src/dropdown'
export * from './src/instance'
export * from './src/tokens'
