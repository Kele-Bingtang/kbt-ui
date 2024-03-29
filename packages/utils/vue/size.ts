import { componentSizeMap } from '@kbt-ui/constants'

import type { ComponentSize } from '@kbt-ui/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
