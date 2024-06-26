import DatePicker from './src/date-picker'

import type { App } from 'vue'
import type { SFCWithInstall } from '@kbt-ui/utils'

const _DatePicker = DatePicker as SFCWithInstall<typeof DatePicker>

_DatePicker.install = (app: App) => {
  app.component(_DatePicker.name, _DatePicker)
}

export default _DatePicker
export const KDatePicker = _DatePicker
export * from './src/constants'
export * from './src/props/date-picker'
export type { DatePickerInstance } from './src/instance'
