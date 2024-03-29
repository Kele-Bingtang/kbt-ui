import { withInstall } from '@kbt-ui/utils'

import Input from './src/input.vue'

export const KInput = withInstall(Input)
export default KInput

export * from './src/input'
export type { InputInstance } from './src/instance'
