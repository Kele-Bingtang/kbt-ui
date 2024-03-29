import { withInstall } from '@kbt-ui/utils'

import Alert from './src/alert.vue'

export const KAlert = withInstall(Alert)
export default KAlert

export * from './src/alert'
export type { AlertInstance } from './src/instance'
