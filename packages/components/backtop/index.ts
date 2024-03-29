import { withInstall } from '@kbt-ui/utils'

import Backtop from './src/backtop.vue'

export const KBacktop = withInstall(Backtop)
export default KBacktop

export * from './src/backtop'
export type { BacktopInstance } from './src/instance'
