import { withInstall, withNoopInstall } from '@kbt-ui/utils'

import Radio from './src/radio.vue'
import RadioButton from './src/radio-button.vue'
import RadioGroup from './src/radio-group.vue'

export const KRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup,
})
export default KRadio
export const KRadioGroup = withNoopInstall(RadioGroup)
export const KRadioButton = withNoopInstall(RadioButton)

export * from './src/radio'
export * from './src/radio-group'
export * from './src/radio-button'
export * from './src/constants'
