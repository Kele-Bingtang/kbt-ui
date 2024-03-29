import { withInstall, withNoopInstall } from '@kbt-ui/utils'
import Timeline from './src/timeline'
import TimelineItem from './src/timeline-item.vue'

export const KTimeline = withInstall(Timeline, {
  TimelineItem,
})
export default KTimeline
export const KTimelineItem = withNoopInstall(TimelineItem)

export * from './src/timeline'
export * from './src/timeline-item'
