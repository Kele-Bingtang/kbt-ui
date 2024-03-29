import { withInstall, withNoopInstall } from '@kbt-ui/utils'

import Descriptions from './src/description.vue'
import DescriptionsItem from './src/description-item'

export const KDescriptions = withInstall(Descriptions, {
  DescriptionsItem,
})

export const KDescriptionsItem = withNoopInstall(DescriptionsItem)

export default KDescriptions

export * from './src/description'
