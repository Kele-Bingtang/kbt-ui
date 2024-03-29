import { withInstall, withNoopInstall } from '@kbt-ui/utils'
import Tabs from './src/tabs'
import TabPane from './src/tab-pane.vue'

export const KTabs = withInstall(Tabs, {
  TabPane,
})
export const KTabPane = withNoopInstall(TabPane)
export default KTabs

export * from './src/tabs'
export * from './src/tab-bar'
export * from './src/tab-nav'
export * from './src/tab-pane'
export * from './src/constants'
