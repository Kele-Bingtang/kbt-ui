import { withInstall } from '@kbt-ui/utils'

import Card from './src/card.vue'

export const KCard = withInstall(Card)
export default KCard

export * from './src/card'
export type { CardInstance } from './src/instance'
