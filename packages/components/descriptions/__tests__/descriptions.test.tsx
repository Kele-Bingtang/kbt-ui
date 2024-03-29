import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import KTag from '@kbt-ui/components/tag'
import KDescriptions from '../src/description.vue'
import KDescriptionsItem from '../src/description-item'

describe('Descriptions.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => (
      <KDescriptions title="title" extra="extra">
        {Array.from({ length: 4 }).map((_, index) => (
          <KDescriptionsItem label={String(index)} />
        ))}
      </KDescriptions>
    ))

    expect(wrapper.find('.k-descriptions__title').text()).toEqual('title')
    expect(wrapper.find('.k-descriptions__extra').text()).toEqual('extra')
    expect(wrapper.findAll('.k-descriptions__label').length).toEqual(4)
    expect(wrapper.findAll('.k-descriptions__content').length).toEqual(4)
  })

  test('render empty label', () => {
    const wrapper = mount(() => (
      <KDescriptions>
        {Array.from({ length: 3 }).map(() => (
          <KDescriptionsItem />
        ))}
      </KDescriptions>
    ))

    expect(wrapper.findAll('.k-descriptions__label').length).toEqual(0)
    expect(wrapper.findAll('.k-descriptions__content').length).toEqual(3)
  })

  test('should render border props', () => {
    const wrapper = mount(() => (
      <KDescriptions border>
        <KDescriptionsItem />
      </KDescriptions>
    ))

    expect(wrapper.find('table').classes()).toContain('is-bordered')
  })

  test('should render align props', () => {
    const wrapper = mount(() => (
      <KDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <KDescriptionsItem align="right" labelAlign="center" />
        ))}
      </KDescriptions>
    ))

    expect(wrapper.find('.k-descriptions__label').classes()).toContain(
      'is-center'
    )
    expect(wrapper.find('.k-descriptions__content').classes()).toContain(
      'is-right'
    )
  })

  test('should render width props', () => {
    const wrapper = mount(() => (
      <KDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <KDescriptionsItem width="50px" min-width="60px" />
        ))}
      </KDescriptions>
    ))

    expect(
      wrapper.find('.k-descriptions__label').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
    expect(
      wrapper.find('.k-descriptions__content').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
  })

  test('should render class props', () => {
    const wrapper = mount(() => (
      <KDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <KDescriptionsItem
            class-name="class-name"
            label-class-name="label-class-name"
          />
        ))}
      </KDescriptions>
    ))

    expect(wrapper.find('.k-descriptions__label').classes()).toContain(
      'label-class-name'
    )
    expect(wrapper.find('.k-descriptions__content').classes()).toContain(
      'class-name'
    )
  })

  test('should render column props', async () => {
    const border = ref(false)

    const wrapper = mount(() => (
      <KDescriptions column={5} border={border.value}>
        {Array.from({ length: 10 }).map(() => (
          <KDescriptionsItem />
        ))}
      </KDescriptions>
    ))

    expect(wrapper.find('tr').element.children.length).toEqual(5)

    border.value = true

    await nextTick()

    expect(wrapper.find('tr').element.children.length).toEqual(10)
  })

  test('should render direction props', async () => {
    const direction = ref<'horizontal' | 'vertical'>('horizontal')

    const wrapper = mount(() => (
      <KDescriptions column={5} direction={direction.value} border>
        {Array.from({ length: 10 }).map((item) => (
          <KDescriptionsItem label={String(item)}>
            {String(item)}
          </KDescriptionsItem>
        ))}
      </KDescriptions>
    ))

    expect(wrapper.find('tr').element.children.length).toEqual(10)
    expect(wrapper.findAll('tr')[0].element.children[0].innerHTML).toEqual(
      wrapper.findAll('tr')[0].element.children[1].innerHTML
    )

    direction.value = 'vertical'
    await nextTick()

    expect(wrapper.find('tr').element.children.length).toEqual(5)
    expect(wrapper.findAll('tr')[0].element.children[0].innerHTML).toEqual(
      wrapper.findAll('tr')[1].element.children[0].innerHTML
    )
  })

  test('should render title slots', async () => {
    const wrapper = mount(() => (
      <KDescriptions
        v-slots={{
          title: () => 'title',
          default: () =>
            Array.from({ length: 10 }).map(() => <KDescriptionsItem />),
        }}
      ></KDescriptions>
    ))

    expect(wrapper.find('.k-descriptions__title').text()).toEqual('title')
  })

  test('should render span props', async () => {
    const wrapper = mount(() => (
      <KDescriptions>
        <KDescriptionsItem label="1">1</KDescriptionsItem>
        <KDescriptionsItem label="2" span={2}>
          2
        </KDescriptionsItem>
        <KDescriptionsItem label="3">3</KDescriptionsItem>
        <KDescriptionsItem label="4">4</KDescriptionsItem>
      </KDescriptions>
    ))

    expect(wrapper.findAll('td')[1].element.getAttribute('colSpan')).toEqual(
      '2'
    )
    expect(wrapper.findAll('td')[3].element.getAttribute('colSpan')).toEqual(
      '2'
    )
  })

  test('re-rendered when slots is updated', async () => {
    const CHANGE_VALUE = 'company'
    const remarks = ref(['school', 'hospital'])

    const onClick = () => {
      remarks.value[0] = CHANGE_VALUE
    }

    const wrapper = mount(() => (
      <>
        {remarks.value.map((remark, index) => (
          <KDescriptions key={index} title={remark}>
            <KDescriptionsItem label={remark}>
              <KTag size="small">{remark}</KTag>
            </KDescriptionsItem>
          </KDescriptions>
        ))}
        <button onClick={onClick}>click</button>
      </>
    ))

    wrapper.find('button').trigger('click')
    await nextTick()
    expect(wrapper.findComponent(KTag).text()).toBe(CHANGE_VALUE)
  })
})
