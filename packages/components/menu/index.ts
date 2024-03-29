import { withInstall, withNoopInstall } from '@kbt-ui/utils'

import Menu from './src/menu'
import MenuItem from './src/menu-item.vue'
import MenuItemGroup from './src/menu-item-group.vue'
import SubMenu from './src/sub-menu'

export const KMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu,
})
export default KMenu
export const KMenuItem = withNoopInstall(MenuItem)
export const KMenuItemGroup = withNoopInstall(MenuItemGroup)
export const KSubMenu = withNoopInstall(SubMenu)

export * from './src/menu'
export * from './src/menu-item'
export * from './src/menu-item-group'
export * from './src/sub-menu'
export * from './src/types'
export * from './src/instance'
