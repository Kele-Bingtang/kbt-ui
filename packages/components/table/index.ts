import { withInstall, withNoopInstall } from '@kbt-ui/utils'
import Table from './src/table.vue'
import TableColumn from './src/tableColumn'

export const KTable = withInstall(Table, {
  TableColumn,
})
export default KTable
export const KTableColumn = withNoopInstall(TableColumn)

export type TableInstance = InstanceType<typeof Table>

export type TableColumnInstance = InstanceType<typeof TableColumn>

export type {
  SummaryMethod,
  Table,
  TableProps,
  TableRefs,
  ColumnCls,
  ColumnStyle,
  CellCls,
  CellStyle,
  TreeNode,
  RenderRowData,
  Sort,
  Filter,
  TableColumnCtx,
} from './src/table/defaults'
