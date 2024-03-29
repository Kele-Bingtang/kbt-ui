import { withInstall, withNoopInstall } from '@kbt-ui/utils'

import Select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'

export const KSelect = withInstall(Select, {
  Option,
  OptionGroup,
})
export default KSelect
export const KOption = withNoopInstall(Option)
export const KOptionGroup = withNoopInstall(OptionGroup)

export * from './src/token'
