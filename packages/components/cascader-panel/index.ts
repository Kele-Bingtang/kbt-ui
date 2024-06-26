import CascaderPanel from './src/index.vue'
import type { App } from 'vue'
import type { SFCWithInstall } from '@kbt-ui/utils'

CascaderPanel.install = (app: App): void => {
  app.component(CascaderPanel.name, CascaderPanel)
}

const _CascaderPanel = CascaderPanel as SFCWithInstall<typeof CascaderPanel>

export default _CascaderPanel
export const KCascaderPanel = _CascaderPanel
export * from './src/types'
export * from './src/config'
export * from './src/instance'
