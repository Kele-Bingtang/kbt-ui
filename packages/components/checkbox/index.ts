import { withInstall, withNoopInstall } from '@kbt-ui/utils'

import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const KCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup,
})
export default KCheckbox

export const KCheckboxButton = withNoopInstall(CheckboxButton)
export const KCheckboxGroup = withNoopInstall(CheckboxGroup)

export * from './src/checkbox-group'
export * from './src/checkbox'
export * from './src/constants'
