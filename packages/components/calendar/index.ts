import { withInstall } from '@kbt-ui/utils'
import Calendar from './src/calendar.vue'

export const KCalendar = withInstall(Calendar)
export default KCalendar

export * from './src/calendar'
export type {
  CalendarDateTableInstance,
  DateTableInstance,
  CalendarInstance,
} from './src/instance'
