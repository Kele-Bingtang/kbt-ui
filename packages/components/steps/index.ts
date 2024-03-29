import { withInstall, withNoopInstall } from '@kbt-ui/utils'

import Steps from './src/steps.vue'
import Step from './src/item.vue'

export const KSteps = withInstall(Steps, {
  Step,
})
export default KSteps
export const KStep = withNoopInstall(Step)

export * from './src/item'
export * from './src/steps'
