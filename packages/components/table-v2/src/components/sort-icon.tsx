import KIcon from '@kbt-ui/components/icon'
import { SortDown, SortUp } from '@element-plus/icons-vue'
import { SortOrder } from '../constants'

import type { FunctionalComponent } from 'vue'

export type SortIconProps = {
  sortOrder: SortOrder
  class?: JSX.IntrinsicAttributes['class']
}

const SortIcon: FunctionalComponent<SortIconProps> = (props) => {
  const { sortOrder } = props

  return (
    <KIcon size={14} class={props.class}>
      {sortOrder === SortOrder.ASC ? <SortUp /> : <SortDown />}
    </KIcon>
  )
}

export default SortIcon
