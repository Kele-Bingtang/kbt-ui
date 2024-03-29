import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import Row from '@kbt-ui/components/row'
import Col from '../src/col.vue'

describe('Col', () => {
  it('create', () => {
    const wrapper = mount(() => <Col />)
    expect(wrapper.classes()).toContain('k-col')
  })

  it('span', () => {
    const wrapper = mount(() => <Col span={12} />)
    expect(wrapper.classes()).toContain('k-col-12')
  })

  it('pull', () => {
    const wrapper = mount(() => <Col span={12} pull={3} />)
    expect(wrapper.classes()).toContain('k-col-pull-3')
  })

  it('push', () => {
    const wrapper = mount(() => <Col span={12} push={3} />)
    expect(wrapper.classes()).toContain('k-col-push-3')
  })

  it('gutter', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Row gutter={20}>
            <Col span={12} ref="col"></Col>
          </Row>
        )
      },
    })

    const colKm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
    expect(colKm.style.paddingLeft === '10px').toBe(true)
    expect(colKm.style.paddingRight === '10px').toBe(true)
  })

  it('change gutter value', async () => {
    const outer = ref(20)

    const wrapper = mount({
      setup() {
        return () => (
          <Row gutter={outer.value} ref="row">
            <Col span={12} ref="col" />
          </Row>
        )
      },
    })

    const rowKm = wrapper.findComponent({ ref: 'row' }).element as HTMLElement
    const colKm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement
    expect(rowKm.style.marginLeft === '-10px').toBe(true)
    expect(rowKm.style.marginRight === '-10px').toBe(true)
    expect(colKm.style.paddingLeft === '10px').toBe(true)
    expect(colKm.style.paddingRight === '10px').toBe(true)

    outer.value = 40 // change gutter value
    await nextTick()
    expect(rowKm.style.marginLeft === '-20px').toBe(true)
    expect(rowKm.style.marginRight === '-20px').toBe(true)
    expect(colKm.style.paddingLeft === '20px').toBe(true)
    expect(colKm.style.paddingRight === '20px').toBe(true)
  })

  it('responsive', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Row gutter={20}>
            <Col
              ref="col"
              sm={{ span: 4, offset: 2 }}
              md={8}
              lg={{ span: 6, offset: 3 }}
            />
          </Row>
        )
      },
    })

    const colKmClass = wrapper.findComponent({ ref: 'col' }).classes()
    expect(colKmClass.includes('k-col-sm-4')).toBe(true)
    expect(colKmClass.includes('k-col-sm-4')).toBe(true)
    expect(colKmClass.includes('k-col-sm-offset-2')).toBe(true)
    expect(colKmClass.includes('k-col-lg-6')).toBe(true)
    expect(colKmClass.includes('k-col-lg-offset-3')).toBe(true)
    expect(colKmClass.includes('k-col-md-8')).toBe(true)
  })
})

describe('Row', () => {
  test('create', () => {
    const wrapper = mount(() => <Row />)
    expect(wrapper.classes()).toContain('k-row')
  })

  test('gutter', () => {
    const wrapper = mount(() => <Row gutter={20} />)
    const rowKm = wrapper.element as HTMLElement
    expect(rowKm.style.marginLeft).toEqual('-10px')
    expect(rowKm.style.marginRight).toEqual('-10px')
  })
  test('justify', () => {
    const wrapper = mount(() => <Row justify="end" />)
    expect(wrapper.classes()).toContain('is-justify-end')
  })
  test('align', () => {
    const wrapper = mount(() => <Row align="bottom" />)
    expect(wrapper.classes()).toContain('is-align-bottom')
  })
})
