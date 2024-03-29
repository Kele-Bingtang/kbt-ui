import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { rAF } from '@kbt-ui/test-utils/tick'
import { KPopperTrigger } from '@kbt-ui/components/popper'
import Tooltip from '../src/tooltip.vue'

import type { VNode } from 'vue'

vi.mock('@kbt-ui/utils/error', () => ({
  debugWarn: vi.fn(),
}))

const AXIOM = 'Rem is the best girl'

describe('<KTooltip />', () => {
  const createComponent = (props = {}, content: string | VNode = '') =>
    mount(
      <Tooltip
        {...props}
        v-slots={{
          default: () => AXIOM,
          content: () => content,
        }}
      />,
      {
        attachTo: document.body,
      }
    )
  let wrapper: ReturnType<typeof createComponent>
  const findTrigger = () => wrapper.findComponent(KPopperTrigger)

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  describe('rendering', () => {
    it('should render correctly', async () => {
      wrapper = createComponent()
      await nextTick()
      expect(findTrigger().text()).toContain(AXIOM)
    })
    it('content should teleport according appendTo', async () => {
      const el = document.createElement('div')
      el.id = 'test'
      document.body.appendChild(el)
      wrapper = createComponent({ appendTo: '#test' }, 'test appendTo props')
      await nextTick()
      const trigger$ = findTrigger()
      const triggerK = trigger$.find('.k-tooltip__trigger')
      await triggerK.trigger('mouseenter')
      expect(document.querySelector('#test')?.innerHTML).toContain(
        'test appendTo props'
      )
    })
  })

  describe('functionality', () => {
    const content = 'Test content'

    it('should be able to update popper content manually', async () => {
      wrapper = createComponent()
      await nextTick()

      const { vm } = wrapper
      expect(vm.updatePopper).toBeDefined()
      vm.updatePopper()
    })

    it('should be able to open & close tooltip content', async () => {
      wrapper = createComponent({}, content)
      await nextTick()

      const trigger$ = findTrigger()
      const triggerK = trigger$.find('.k-tooltip__trigger')

      vi.useFakeTimers()
      await triggerK.trigger('mouseenter')
      vi.runAllTimers()
      vi.useRealTimers()
      await rAF()

      expect(wrapper.emitted()).toHaveProperty('show')

      vi.useFakeTimers()
      await triggerK.trigger('mouseleave') // dispatches a timer with 200ms timeout.
      vi.runAllTimers()
      vi.useRealTimers()
      await rAF()

      expect(wrapper.emitted()).toHaveProperty('hide')
    })

    it('should be able to toggle visibility of tooltip content', async () => {
      wrapper = createComponent(
        {
          trigger: 'click',
        },
        content
      )
      await nextTick()

      const trigger$ = findTrigger()
      const triggerK = trigger$.find('.k-tooltip__trigger')

      vi.useFakeTimers()
      await triggerK.trigger('click')
      vi.runAllTimers()
      vi.useRealTimers()
      await rAF()
      expect(wrapper.emitted()).toHaveProperty('show')

      vi.useFakeTimers()
      await triggerK.trigger('click')
      vi.runAllTimers()
      vi.useRealTimers()
      await rAF()
      expect(wrapper.emitted()).toHaveProperty('hide')
    })
  })
})
