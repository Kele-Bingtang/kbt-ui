import Select from './src/select.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@kbt-ui/utils'

Select.install = (app: App): void => {
  app.component(Select.name, Select)
}

const _Select = Select as SFCWithInstall<typeof Select>

export default _Select
export const KSelectV2 = _Select

export * from './src/token'
