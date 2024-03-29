import { withInstall, withNoopInstall } from '@kbt-ui/utils'
import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'

export const KCarousel = withInstall(Carousel, {
  CarouselItem,
})

export default KCarousel

export const KCarouselItem = withNoopInstall(CarouselItem)

export * from './src/carousel'
export * from './src/carousel-item'
export * from './src/constants'

export type { CarouselInstance, CarouselItemInstance } from './src/instance'
