import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, it } from 'vitest'
import Options from '../src/options'

import type { VueWrapper } from '@vue/test-utils'

describe('options', () => {
  let wrapper: ReturnType<typeof mount>

  const KOptionStub = defineComponent({
    name: 'KOption',
    props: {
      label: String,
    },
    template: '<div></div>',
  })

  const getLabel = (i: number | string) => `label-${i}`

  const KOptionGroupStub = defineComponent({
    name: 'KOptionGroup',
    template: '<div><slot /></div>',
  })

  const samples = Array.from({ length: 3 })

  const createWrapper = (slots = {}) => {
    wrapper = mount((_, { slots }) => <Options>{slots?.default?.()}</Options>, {
      global: {
        components: {
          KOption: KOptionStub,
          KOptionGroup: KOptionGroupStub,
        },
      },
      slots,
    }) as VueWrapper<any>
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders emit correct options', async () => {
    createWrapper({
      default: () => samples.map((_, i) => <KOptionStub label={getLabel(i)} />),
    })

    await nextTick()
  })

  it('renders emit correct options with option group', async () => {
    createWrapper({
      default: () =>
        samples.map((_, i) => (
          <KOptionGroupStub label={getLabel(i)}>
            {{
              default: () =>
                samples.map((_, j) => (
                  <KOptionStub
                    label={getLabel(`${i}-${j}`)}
                    value={j}
                  ></KOptionStub>
                )),
            }}
          </KOptionGroupStub>
        )),
    })
  })
})
