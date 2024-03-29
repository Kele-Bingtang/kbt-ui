import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import TestCollection, {
  CollectionChildComponent,
  CollectionItemChildComponent,
} from '../test-helper'

import type { ComponentPublicInstance } from 'vue'
import type { KCollectionInjectionContext } from '../src/tokens'

const { KCollection, KCollectionItem } = TestCollection
const AXIOM = 'rem is the best girl'

describe('<KCollectionItem />', () => {
  const createComponent = (props = {}, count = 3) =>
    mount(KCollection as any, {
      props,
      slots: {
        default: () => {
          return h(
            CollectionChildComponent as any,
            {},
            {
              default: () =>
                Array.from({ length: count }).map((idx) => {
                  return h(
                    KCollectionItem as any,
                    {},
                    {
                      default: () => [
                        h(
                          CollectionItemChildComponent,
                          {},
                          { default: () => `${AXIOM} ${idx}` }
                        ),
                      ],
                    }
                  )
                }),
            }
          )
        },
      },
    })

  let wrapper: ReturnType<typeof createComponent>

  afterEach(() => {
    wrapper.unmount()
  })

  it('should be able to render correctly', async () => {
    wrapper = createComponent()
    await nextTick()

    expect(wrapper.findAllComponents(KCollectionItem as any)).toHaveLength(3)
    expect(wrapper.findComponent(KCollectionItem as any).text()).toContain(
      AXIOM
    )
  })

  it('register child instance', () => {
    wrapper = createComponent()

    const childItemComponent = wrapper.findComponent(
      CollectionChildComponent as any
    )
    const childVm =
      childItemComponent.vm as ComponentPublicInstance<KCollectionInjectionContext>

    const collectionItems = wrapper.findAllComponents(
      CollectionItemChildComponent as any
    )
    expect(childVm.itemMap.size).toBe(3)
    const items = childVm.getItems()
    expect(childVm.getItems()).toHaveLength(3)
    expect(items[0].ref).toBe(collectionItems.at(0)?.element)
  })
})
