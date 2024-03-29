// @ts-nocheck
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { rAF } from '@kbt-ui/test-utils/tick'
import { EVENT_CODE } from '@kbt-ui/constants'
import { KTooltip } from '@kbt-ui/components/tooltip'
import Button from '@kbt-ui/components/button'
import { usePopperContainerId } from '@kbt-ui/hooks'
import Dropdown from '../src/dropdown.vue'
import DropdownItem from '../src/dropdown-item.vue'
import DropdownMenu from '../src/dropdown-menu.vue'

const MOUSE_ENTER_EVENT = 'mouseenter'
const MOUSE_LEAVE_EVENT = 'mouseleave'
const CONTEXTMENU = 'contextmenu'

const _mount = (template: string, data, otherObj?) =>
  mount({
    components: {
      [Button.name]: Button,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    template,
    data,
    ...otherObj,
  })

describe('Dropdown', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('create', async () => {
    const wrapper = _mount(
      `
        <k-dropdown ref="b" placement="right">
          <span class="k-dropdown-link" ref="a">
            dropdown<i class="k-icon-arrow-down k-icon--right"></i>
          </span>
          <template #dropdown>
            <k-dropdown-menu>
              <k-dropdown-item>Apple</k-dropdown-item>
              <k-dropdown-item>Orange</k-dropdown-item>
              <k-dropdown-item>Cherry</k-dropdown-item>
              <k-dropdown-item disabled>Peach</k-dropdown-item>
              <k-dropdown-item divided>Pear</k-dropdown-item>
            </k-dropdown-menu>
          </template>
        </k-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent(KTooltip).vm as InstanceType<
      typeof KTooltip
    >

    vi.useFakeTimers()
    const triggerKm = wrapper.find('.k-tooltip__trigger')
    expect(content.open).toBe(false)
    await triggerKm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    expect(content.open).toBe(true)
    await triggerKm.trigger(MOUSE_LEAVE_EVENT)
    vi.runAllTimers()
    expect(content.open).toBe(false)
    vi.useRealTimers()
  })

  test('menu click', async () => {
    const commandHandler = vi.fn()
    const wrapper = _mount(
      `
      <k-dropdown ref="b" @command="commandHandler" placement="right">
        <span class="k-dropdown-link" ref="a">
          dropdown<i class="k-icon-arrow-down k-icon--right"></i>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item command="a">Apple</k-dropdown-item>
            <k-dropdown-item command="b">Orange</k-dropdown-item>
            <k-dropdown-item ref="c" :command="myCommandObject">Cherry</k-dropdown-item>
            <k-dropdown-item command="d">Peach</k-dropdown-item>
            <k-dropdown-item command="e">Pear</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      }),
      {
        methods: {
          commandHandler,
        },
      }
    )
    await nextTick()
    // const content = wrapper.findComponent({ ref: 'b' }).vm as any
    const triggerKm = wrapper.find('.k-tooltip__trigger')
    await triggerKm.trigger(MOUSE_ENTER_EVENT)
    await nextTick()
    await wrapper
      .findComponent({ ref: 'c' })
      .findComponent({
        name: 'DropdownItemImpl',
      })
      .find('.k-dropdown-menu__item')
      .trigger('click')
    await nextTick()
    expect(commandHandler).toHaveBeenCalled()
  })

  test('trigger', async () => {
    const wrapper = _mount(
      `
      <k-dropdown trigger="click" ref="b" placement="right">
        <span class="k-dropdown-link" ref="a">
          dropdown<i class="k-icon-arrow-down k-icon--right"></i>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item command="a">Apple</k-dropdown-item>
            <k-dropdown-item command="b">Orange</k-dropdown-item>
            <k-dropdown-item ref="c" :command="myCommandObject">Cherry</k-dropdown-item>
            <k-dropdown-item command="d">Peach</k-dropdown-item>
            <k-dropdown-item command="e">Pear</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      })
    )
    await nextTick()
    const content = wrapper.findComponent(KTooltip).vm as InstanceType<
      typeof KTooltip
    >
    const triggerKm = wrapper.find('.k-dropdown-link')
    expect(content.open).toBe(false)
    await triggerKm.trigger(MOUSE_ENTER_EVENT)
    expect(content.open).toBe(false)
    await triggerKm.trigger('click', {
      button: 0,
    })
    await rAF()
    expect(content.open).toBe(true)
  })

  test('trigger contextmenu', async () => {
    const wrapper = _mount(
      `
      <k-dropdown trigger="contextmenu" ref="b" placement="right">
        <span class="k-dropdown-link" ref="a">
          dropdown<i class="k-icon-arrow-down k-icon--right"></i>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item command="a">Apple</k-dropdown-item>
            <k-dropdown-item command="b">Orange</k-dropdown-item>
            <k-dropdown-item ref="c" :command="myCommandObject">Cherry</k-dropdown-item>
            <k-dropdown-item command="d">Peach</k-dropdown-item>
            <k-dropdown-item command="e">Pear</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      })
    )
    await nextTick()
    const content = wrapper.findComponent(KTooltip).vm as InstanceType<
      typeof KTooltip
    >
    const triggerKm = wrapper.find('.k-dropdown-link')
    expect(content.open).toBe(false)
    await triggerKm.trigger(CONTEXTMENU)
    await rAF()
    expect(content.open).toBe(true)
  })

  test('handleOpen and handleClose', async () => {
    const wrapper = _mount(
      `
      <k-dropdown trigger="click" ref="refDropdown" placement="right">
        <span class="k-dropdown-link" ref="a">
          dropdown<i class="k-icon-arrow-down k-icon--right"></i>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item command="a">Apple</k-dropdown-item>
            <k-dropdown-item command="b">Orange</k-dropdown-item>
            <k-dropdown-item command="c">Cherry</k-dropdown-item>
            <k-dropdown-item command="d">Peach</k-dropdown-item>
            <k-dropdown-item command="e">Pear</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({
        name: '',
      })
    )
    await nextTick()
    const dropdown = wrapper.vm
    const content = wrapper.findComponent(KTooltip).vm as InstanceType<
      typeof KTooltip
    >
    expect(content.open).toBe(false)
    await dropdown.$refs.refDropdown.handleOpen()
    await rAF()
    expect(content.open).toBe(true)
    await dropdown.$refs.refDropdown.handleClose()
    await rAF()
    expect(content.open).toBe(false)
  })

  test('split button', async () => {
    const handleClick = vi.fn()
    const wrapper = _mount(
      `
      <k-dropdown  @click="handleClick" split-button type="primary" ref="b" placement="right">
        dropdown
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item command="a">Apple</k-dropdown-item>
            <k-dropdown-item command="b">Orange</k-dropdown-item>
            <k-dropdown-item ref="c" :command="myCommandObject">Cherry</k-dropdown-item>
            <k-dropdown-item command="d">Peach</k-dropdown-item>
            <k-dropdown-item command="e">Pear</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      }),
      {
        methods: {
          handleClick,
        },
      }
    )
    await nextTick()
    const content = wrapper.findComponent(KTooltip).vm as InstanceType<
      typeof KTooltip
    >
    const triggerKm = wrapper.find('.k-dropdown__caret-button')
    const button = wrapper.find('.k-button')
    expect(content.open).toBe(false)
    await button.trigger('click')
    expect(handleClick).toHaveBeenCalled()
    vi.useFakeTimers()
    await triggerKm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    vi.useRealTimers()
    expect(content.open).toBe(true)
  })

  test('hide on click', async () => {
    const wrapper = _mount(
      `
      <k-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="k-dropdown-link" ref="a">
          dropdown<i class="k-icon-arrow-down k-icon--right"></i>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item>Apple</k-dropdown-item>
            <k-dropdown-item>Orange</k-dropdown-item>
            <k-dropdown-item ref="c">Cherry</k-dropdown-item>
            <k-dropdown-item disabled>Peach</k-dropdown-item>
            <k-dropdown-item divided>Pear</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent(KTooltip).vm as InstanceType<
      typeof KTooltip
    >
    expect(content.open).toBe(false)
    const triggerKm = wrapper.find('.k-tooltip__trigger')
    vi.useFakeTimers()
    await triggerKm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    expect(content.open).toBe(true)
    await wrapper
      .findComponent({ ref: 'c' })
      .findComponent({
        name: 'DropdownItemImpl',
      })
      .trigger('click')
    vi.runAllTimers()
    expect(content.open).toBe(true)
    vi.useRealTimers()
  })

  test('triggerKm keydown', async () => {
    const wrapper = _mount(
      `
      <k-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="k-dropdown-link" ref="a">
          dropdown<i class="k-icon-arrow-down k-icon--right"></i>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item>Apple</k-dropdown-item>
            <k-dropdown-item>Orange</k-dropdown-item>
            <k-dropdown-item ref="c">Cherry</k-dropdown-item>
            <k-dropdown-item disabled>Peach</k-dropdown-item>
            <k-dropdown-item divided>Pear</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent(KTooltip).vm as InstanceType<
      typeof KTooltip
    >
    const triggerKm = wrapper.find('.k-tooltip__trigger')

    vi.useFakeTimers()
    await triggerKm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    await triggerKm.trigger('keydown', {
      code: EVENT_CODE.enter,
    })
    vi.runAllTimers()
    expect(content.open).toBe(false)

    await triggerKm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    await triggerKm.trigger('keydown', {
      code: EVENT_CODE.tab,
    })
    vi.runAllTimers()
    expect(content.open).toBe(true)
    vi.useRealTimers()
  })

  test('dropdown menu keydown', async () => {
    const wrapper = _mount(
      `
      <k-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="k-dropdown-link" ref="a">
          dropdown<i class="k-icon-arrow-down k-icon--right"></i>
        </span>
        <template #dropdown>
          <k-dropdown-menu ref="dropdown-menu">
            <k-dropdown-item ref="d">Apple</k-dropdown-item>
            <k-dropdown-item>Orange</k-dropdown-item>
            <k-dropdown-item ref="c">Cherry</k-dropdown-item>
            <k-dropdown-item disabled>Peach</k-dropdown-item>
            <k-dropdown-item divided>Pear</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent({ ref: 'dropdown-menu' })
    const triggerKm = wrapper.find('.k-tooltip__trigger')
    await triggerKm.trigger(MOUSE_ENTER_EVENT)
    await rAF()
    await content.trigger('keydown', {
      code: EVENT_CODE.down,
    })
    await rAF()
    expect(
      wrapper
        .findComponent({ ref: 'd' })
        .findComponent({
          name: 'DropdownItemImpl',
        })
        .find('.k-dropdown-menu__item')
        .element.getAttribute('tabindex')
    ).toBe('0')
  })

  test('max height', async () => {
    const wrapper = _mount(
      `
      <k-dropdown ref="b" max-height="60px">
        <span class="k-dropdown-link" ref="a">
          dropdown<i class="k-icon-arrow-down k-icon--right"></i>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item>Apple</k-dropdown-item>
            <k-dropdown-item>Orange</k-dropdown-item>
            <k-dropdown-item>Cherry</k-dropdown-item>
            <k-dropdown-item disabled>Peach</k-dropdown-item>
            <k-dropdown-item divided>Pear</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const scrollbar = wrapper
      .findComponent({
        ref: 'b',
      })
      .findComponent({ ref: 'scrollbar' })
    expect(scrollbar.find('.k-scrollbar__wrap').attributes('style')).toContain(
      'max-height: 60px;'
    )
  })

  test('tooltip debounce', async () => {
    const wrapper = _mount(
      `
      <k-dropdown ref="b">
        <span class="k-dropdown-link">
          dropdown<i class="k-icon-arrow-down k-icon--right"></i>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item>Apple</k-dropdown-item>
            <k-dropdown-item>Orange</k-dropdown-item>
            <k-dropdown-item>Cherry</k-dropdown-item>
            <k-dropdown-item>Peach</k-dropdown-item>
            <k-dropdown-item>Pear</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({})
    )
    const content = wrapper.findComponent(KTooltip).vm as InstanceType<
      typeof KTooltip
    >
    const triggerKm = wrapper.find('.k-tooltip__trigger')
    expect(content.open).toBe(false)

    vi.useFakeTimers()
    await triggerKm.trigger(MOUSE_ENTER_EVENT)
    await triggerKm.trigger(MOUSE_LEAVE_EVENT)
    await triggerKm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    vi.useRealTimers()
    expect(content.open).toBe(true)
  })

  test('popperClass', async () => {
    const wrapper = await _mount(
      `
      <k-dropdown ref="b" max-height="60px" popper-class="custom-popper-class">
        <span class="k-dropdown-link" ref="a">
          dropdown<i class="k-icon-arrow-down k-icon--right"></i>
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item>Apple</k-dropdown-item>
            <k-dropdown-item>Orange</k-dropdown-item>
            <k-dropdown-item>Cherry</k-dropdown-item>
            <k-dropdown-item disabled>Peach</k-dropdown-item>
            <k-dropdown-item divided>Pear</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({})
    )

    const popperElement = wrapper.findComponent({
      name: 'KPopperContent',
    }).element

    expect(popperElement.classList.contains('custom-popper-class')).toBe(true)
  })

  test('custom attributes for dropdown items', async () => {
    const wrapper = _mount(
      `
      <k-dropdown>
        <span class="k-dropdown-link">
          Custom Attributes
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item data-custom-attribute="hello">Item</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    expect(
      wrapper
        .findComponent({
          name: 'DropdownItemImpl',
        })
        .find('.k-dropdown-menu__item').element.dataset.customAttribute
    ).toBe('hello')
  })

  test('disable normal dropdown', async () => {
    const wrapper = _mount(
      `
      <k-dropdown disabled>
        <span class="k-dropdown-link">
          Dropdown List
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item data-custom-attribute="hello">Item</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    expect(
      wrapper
        .findComponent({
          name: 'KDropdown',
        })
        .classes()
    ).toContain('is-disabled')
  })
  test('disable dropdown with split button', async () => {
    const wrapper = _mount(
      `
      <k-dropdown disabled split-button>
        <span class="k-dropdown-link">
          Dropdown List
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item data-custom-attribute="hello">Item</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    expect(
      wrapper
        .findAllComponents({
          name: 'KButton',
        })[0]
        .classes()
    ).toContain('is-disabled')
    expect(
      wrapper
        .findAllComponents({
          name: 'KButton',
        })[1]
        .classes()
    ).toContain('is-disabled')
  })

  test('set show-timeout/hide-timeout when trigger is hover', async () => {
    const wrapper = _mount(
      `
      <k-dropdown trigger="hover" :show-timeout="200" :hide-timeout="300">
        <span class="k-dropdown-link">
          Dropdown List
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item>Item</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({})
    )
    const tooltipElement = wrapper.getComponent({
      name: 'KTooltip',
    })
    expect(tooltipElement.vm.showAfter).toBe(200)
    expect(tooltipElement.vm.hideAfter).toBe(300)
  })

  test('ignore show-timeout/hide-timeout when trigger is not hover', async () => {
    const wrapper = _mount(
      `
      <k-dropdown trigger="click" :show-timeout="200" :hide-timeout="300">
        <span class="k-dropdown-link">
          Dropdown List
        </span>
        <template #dropdown>
          <k-dropdown-menu>
            <k-dropdown-item>Item</k-dropdown-item>
          </k-dropdown-menu>
        </template>
      </k-dropdown>
      `,
      () => ({})
    )
    const tooltipElement = wrapper.getComponent({
      name: 'KTooltip',
    })
    expect(tooltipElement.vm.showAfter).toBe(0)
    expect(tooltipElement.vm.hideAfter).toBe(0)
  })

  describe('accessibility', () => {
    test('Custom span trigger has proper attributes', async () => {
      const wrapper = _mount(
        `
        <k-dropdown>
          <span class="k-dropdown-link" data-test-ref="trigger">
            Dropdown List
          </span>
          <template #dropdown>
            <k-dropdown-menu ref="menu">
              <k-dropdown-item>Item</k-dropdown-item>
            </k-dropdown-menu>
          </template>
        </k-dropdown>
        `,
        () => ({})
      )
      await nextTick()
      const trigger = wrapper.find('[data-test-ref="trigger"]')
      const menu = wrapper.findComponent({ ref: 'menu' })
      expect(trigger.attributes()['role']).toBe('button')
      expect(trigger.attributes()['tabindex']).toBe('0')
      expect(trigger.attributes()['aria-haspopup']).toBe('menu')
      expect(trigger.attributes()['id']).toBe(
        menu.attributes()['aria-labelledby']
      )
      expect(trigger.attributes()['aria-controls']).toBe(
        menu.attributes()['id']
      )
    })

    test('KButton trigger has proper attributes', async () => {
      const wrapper = _mount(
        `
        <k-dropdown>
          <k-button ref="trigger">
            Dropdown List
          </k-button>
          <template #dropdown>
            <k-dropdown-menu ref="menu">
              <k-dropdown-item>Item</k-dropdown-item>
            </k-dropdown-menu>
          </template>
        </k-dropdown>
        `,
        () => ({})
      )
      await nextTick()
      const trigger = wrapper.findComponent({ ref: 'trigger' })
      const menu = wrapper.findComponent({ ref: 'menu' })
      expect(trigger.attributes()['role']).toBe('button')
      expect(trigger.attributes()['tabindex']).toBe('0')
      expect(trigger.attributes()['aria-haspopup']).toBe('menu')
      expect(trigger.attributes()['id']).toBe(
        menu.attributes()['aria-labelledby']
      )
      expect(trigger.attributes()['aria-controls']).toBe(
        menu.attributes()['id']
      )
    })

    test('Split button trigger has proper attributes', async () => {
      const wrapper = _mount(
        `
        <k-dropdown split-button>
          <template #dropdown>
            <k-dropdown-menu ref="menu">
              <k-dropdown-item>Item</k-dropdown-item>
            </k-dropdown-menu>
          </template>
        </k-dropdown>
        `,
        () => ({})
      )
      await nextTick()
      const trigger = wrapper.find('.k-dropdown__caret-button')
      const menu = wrapper.findComponent({ ref: 'menu' })
      expect(trigger.attributes()['role']).toBe('button')
      expect(trigger.attributes()['tabindex']).toBe('0')
      expect(trigger.attributes()['aria-haspopup']).toBe('menu')
      expect(trigger.attributes()['id']).toBe(
        menu.attributes()['aria-labelledby']
      )
      expect(trigger.attributes()['aria-controls']).toBe(
        menu.attributes()['id']
      )
    })

    test('Menu items with "menu" role', async () => {
      const wrapper = _mount(
        `
        <k-dropdown split-button>
          <template #dropdown>
            <k-dropdown-menu ref="menu">
              <k-dropdown-item ref="menu-item">Item</k-dropdown-item>
            </k-dropdown-menu>
          </template>
        </k-dropdown>
        `,
        () => ({})
      )
      const menu = wrapper.findComponent({ ref: 'menu' })
      const menuItem = menu.find('.k-dropdown-menu__item')
      expect(menu.attributes()['role']).toBe('menu')
      expect(menuItem.attributes()['role']).toBe('menuitem')
    })

    test('Menu items with "navigation" role', async () => {
      const wrapper = _mount(
        `
        <k-dropdown split-button role="navigation">
          <template #dropdown>
            <k-dropdown-menu ref="menu">
              <k-dropdown-item ref="menu-item">Item</k-dropdown-item>
            </k-dropdown-menu>
          </template>
        </k-dropdown>
        `,
        () => ({})
      )
      const menu = wrapper.findComponent({ ref: 'menu' })
      const menuItem = menu.find('.k-dropdown-menu__item')
      expect(menu.attributes()['role']).toBe('navigation')
      expect(menuItem.attributes()['role']).toBe('link')
    })

    test('Menu items with "group" role', async () => {
      const wrapper = _mount(
        `
        <k-dropdown split-button role="group">
          <template #dropdown>
            <k-dropdown-menu ref="menu">
              <k-dropdown-item ref="menu-item">Item</k-dropdown-item>
            </k-dropdown-menu>
          </template>
        </k-dropdown>
        `,
        () => ({})
      )
      const menu = wrapper.findComponent({ ref: 'menu' })
      const menuItem = menu.find('.k-dropdown-menu__item')
      expect(menu.attributes()['role']).toBe('group')
      expect(menuItem.attributes()['role']).toBe('button')
    })
  })

  describe('teleported API', () => {
    test('should mount on popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount(
        `
        <k-dropdown ref="b" placement="right">
          <span class="k-dropdown-link" ref="a">
            dropdown<i class="k-icon-arrow-down k-icon--right"></i>
          </span>
          <template #dropdown>
            <k-dropdown-menu>
              <k-dropdown-item>Apple</k-dropdown-item>
              <k-dropdown-item>Orange</k-dropdown-item>
              <k-dropdown-item>Cherry</k-dropdown-item>
              <k-dropdown-item disabled>Peach</k-dropdown-item>
              <k-dropdown-item divided>Pear</k-dropdown-item>
            </k-dropdown-menu>
          </template>
        </k-dropdown>`,
        () => ({})
      )

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value).innerHTML).not.toBe('')
    })

    test('should not mount on the popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount(
        `
        <k-dropdown ref="b" placement="right" :teleported="false">
          <span class="k-dropdown-link" ref="a">
            dropdown<i class="k-icon-arrow-down k-icon--right"></i>
          </span>
          <template #dropdown>
            <k-dropdown-menu>
              <k-dropdown-item>Apple</k-dropdown-item>
              <k-dropdown-item>Orange</k-dropdown-item>
              <k-dropdown-item>Cherry</k-dropdown-item>
              <k-dropdown-item disabled>Peach</k-dropdown-item>
              <k-dropdown-item divided>Pear</k-dropdown-item>
            </k-dropdown-menu>
          </template>
        </k-dropdown>`,
        () => ({})
      )

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value).innerHTML).toBe('')
    })
  })
})
