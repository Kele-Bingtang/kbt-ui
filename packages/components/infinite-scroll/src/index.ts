// @ts-nocheck
import { nextTick } from 'vue'
import { isFunction } from '@vue/shared'
import { throttle } from 'lodash-unified'
import {
  getOffsetTopDistance,
  getScrollContainer,
  throwError,
} from '@kbt-ui/utils'

import type { ComponentPublicInstance, ObjectDirective } from 'vue'

export const SCOPE = 'KInfiniteScroll'
export const CHECK_INTERVAL = 50
export const DEFAULT_DELAY = 200
export const DEFAULT_DISTANCE = 0

const attributes = {
  delay: {
    type: Number,
    default: DEFAULT_DELAY,
  },
  distance: {
    type: Number,
    default: DEFAULT_DISTANCE,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  immediate: {
    type: Boolean,
    default: true,
  },
}

type Attrs = typeof attributes
type ScrollOptions = { [K in keyof Attrs]: Attrs[K]['default'] }
type InfiniteScrollCallback = () => void
type InfiniteScrollK = HTMLElement & {
  [SCOPE]: {
    container: HTMLElement | Window
    containerK: HTMLElement
    instance: ComponentPublicInstance
    delay: number // export for test
    lastScrollTop: number
    cb: InfiniteScrollCallback
    onScroll: () => void
    observer?: MutationObserver
  }
}

const getScrollOptions = (
  el: HTMLElement,
  instance: ComponentPublicInstance
): ScrollOptions => {
  return Object.entries(attributes).reduce((acm, [name, option]) => {
    const { type, default: defaultValue } = option
    const attrVal = el.getAttribute(`infinite-scroll-${name}`)
    let value = instance[attrVal] ?? attrVal ?? defaultValue
    value = value === 'false' ? false : value
    value = type(value)
    acm[name] = Number.isNaN(value) ? defaultValue : value
    return acm
  }, {} as ScrollOptions)
}

const destroyObserver = (el: InfiniteScrollK) => {
  const { observer } = el[SCOPE]

  if (observer) {
    observer.disconnect()
    delete el[SCOPE].observer
  }
}

const handleScroll = (el: InfiniteScrollK, cb: InfiniteScrollCallback) => {
  const { container, containerK, instance, observer, lastScrollTop } = el[SCOPE]
  const { disabled, distance } = getScrollOptions(el, instance)
  const { clientHeight, scrollHeight, scrollTop } = containerK
  const delta = scrollTop - lastScrollTop

  el[SCOPE].lastScrollTop = scrollTop

  // trigger only if full check has done and not disabled and scroll down
  if (observer || disabled || delta < 0) return

  let shouldTrigger = false

  if (container === el) {
    shouldTrigger = scrollHeight - (clientHeight + scrollTop) <= distance
  } else {
    // get the scrollHeight since el might be visible overflow
    const { clientTop, scrollHeight: height } = el
    const offsetTop = getOffsetTopDistance(el, containerK)
    shouldTrigger =
      scrollTop + clientHeight >= offsetTop + clientTop + height - distance
  }

  if (shouldTrigger) {
    cb.call(instance)
  }
}

function checkFull(el: InfiniteScrollK, cb: InfiniteScrollCallback) {
  const { containerK, instance } = el[SCOPE]
  const { disabled } = getScrollOptions(el, instance)

  if (disabled || containerK.clientHeight === 0) return

  if (containerK.scrollHeight <= containerK.clientHeight) {
    cb.call(instance)
  } else {
    destroyObserver(el)
  }
}

const InfiniteScroll: ObjectDirective<InfiniteScrollK, InfiniteScrollCallback> =
  {
    async mounted(el, binding) {
      const { instance, value: cb } = binding

      if (!isFunction(cb)) {
        throwError(
          SCOPE,
          "'v-infinite-scroll' binding value must be a function"
        )
      }

      // ensure parentNode mounted
      await nextTick()

      const { delay, immediate } = getScrollOptions(el, instance)
      const container = getScrollContainer(el, true)
      const containerK =
        container === window
          ? document.documentElement
          : (container as HTMLElement)
      const onScroll = throttle(handleScroll.bind(null, el, cb), delay)

      if (!container) return

      el[SCOPE] = {
        instance,
        container,
        containerK,
        delay,
        cb,
        onScroll,
        lastScrollTop: containerK.scrollTop,
      }

      if (immediate) {
        const observer = new MutationObserver(
          throttle(checkFull.bind(null, el, cb), CHECK_INTERVAL)
        )
        el[SCOPE].observer = observer
        observer.observe(el, { childList: true, subtree: true })
        checkFull(el, cb)
      }

      container.addEventListener('scroll', onScroll)
    },
    unmounted(el) {
      const { container, onScroll } = el[SCOPE]

      container?.removeEventListener('scroll', onScroll)
      destroyObserver(el)
    },
    async updated(el) {
      if (!el[SCOPE]) {
        await nextTick()
      } else {
        const { containerK, cb, observer } = el[SCOPE]
        if (containerK.clientHeight && observer) {
          checkFull(el, cb)
        }
      }
    },
  }

export default InfiniteScroll
