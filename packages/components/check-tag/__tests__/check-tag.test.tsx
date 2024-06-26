import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import CheckTag from '../src/check-tag.vue'

const AXIOM = 'Rem is the best girl'

describe('CheckTag.vue', () => {
  test('render test', async () => {
    const wrapper = mount(CheckTag, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)

    expect(wrapper.classes()).toContain('k-check-tag')
  })

  test('functionality', async () => {
    const wrapper = mount({
      data: () => ({ checked: false }),
      render() {
        return (
          <CheckTag
            onChange={() => (this.checked = !this.checked)}
            checked={this.checked}
          >
            {AXIOM}
          </CheckTag>
        )
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)

    await wrapper.find('.k-check-tag').trigger('click')

    expect(wrapper.vm.checked).toBe(true)

    await wrapper.find('.k-check-tag').trigger('click')

    expect(wrapper.vm.checked).toBe(false)
  })
})
