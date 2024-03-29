import { withInstall, withNoopInstall } from '@kbt-ui/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const KButton = withInstall(Button, {
  ButtonGroup,
})
export const KButtonGroup = withNoopInstall(ButtonGroup)
export default KButton

export * from './src/button'
export * from './src/constants'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'
