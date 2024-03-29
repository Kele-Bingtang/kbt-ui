import { withInstall, withNoopInstall } from '@kbt-ui/utils'
import Tour from './src/tour.vue'
import TourStep from './src/step.vue'

export const KTour = withInstall(Tour, {
  TourStep,
})
export const KTourStep = withNoopInstall(TourStep)
export default KTour

export * from './src/tour'

export type { TourMask, TourGap, TourBtnProps } from './src/types'
