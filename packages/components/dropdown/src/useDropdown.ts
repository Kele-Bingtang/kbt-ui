// @ts-nocheck
import { computed, inject, ref } from 'vue'
import { addClass } from '@kbt-ui/utils'
import { EVENT_CODE } from '@kbt-ui/constants'
import { useId, useNamespace } from '@kbt-ui/hooks'
import type { Nullable } from '@kbt-ui/utils'
import type { IKDropdownInstance } from './dropdown'

export const useDropdown = () => {
  const elDropdown = inject<IKDropdownInstance>('elDropdown', {})
  const _elDropdownSize = computed(() => elDropdown?.dropdownSize)

  return {
    elDropdown,
    _elDropdownSize,
  }
}

export const initDropdownDomEvent = (
  dropdownChildren,
  triggerKm,
  _instance
) => {
  const ns = useNamespace('dropdown')
  const menuItems = ref<Nullable<HTMLButtonElement[]>>(null)
  const menuItemsArray = ref<Nullable<HTMLElement[]>>(null)
  const dropdownKm = ref<Nullable<HTMLElement>>(null)
  const listId = useId()
  dropdownKm.value = dropdownChildren?.subTree.el

  function removeTabindex() {
    triggerKm.setAttribute('tabindex', '-1')
    menuItemsArray.value?.forEach((item) => {
      item.setAttribute('tabindex', '-1')
    })
  }

  function resetTabindex(ele) {
    removeTabindex()
    ele?.setAttribute('tabindex', '0')
  }

  function handleTriggerKeyDown(ev: KeyboardEvent) {
    const code = ev.code
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      removeTabindex()
      resetTabindex(menuItems.value[0])
      menuItems.value[0].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (code === EVENT_CODE.enter) {
      _instance.handleClick()
    } else if ([EVENT_CODE.tab, EVENT_CODE.esc].includes(code)) {
      _instance.hide()
    }
  }

  function handleItemKeyDown(ev) {
    const code = ev.code
    const target = ev.target
    const currentIndex = menuItemsArray.value.indexOf(target)
    const max = menuItemsArray.value.length - 1
    let nextIndex
    if ([EVENT_CODE.up, EVENT_CODE.down].includes(code)) {
      if (code === EVENT_CODE.up) {
        nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0
      } else {
        nextIndex = currentIndex < max ? currentIndex + 1 : max
      }
      removeTabindex()
      resetTabindex(menuItems.value[nextIndex])
      menuItems.value[nextIndex].focus()
      ev.preventDefault()
      ev.stopPropagation()
    } else if (code === EVENT_CODE.enter) {
      triggerKmFocus()
      target.click()
      if (_instance.props.hideOnClick) {
        _instance.hide()
      }
    } else if ([EVENT_CODE.tab, EVENT_CODE.esc].includes(code)) {
      _instance.hide()
      triggerKmFocus()
    }
  }

  function initAria() {
    dropdownKm.value.setAttribute('id', listId.value)
    triggerKm.setAttribute('aria-haspopup', 'list')
    triggerKm.setAttribute('aria-controls', listId.value)
    if (!_instance.props.splitButton) {
      triggerKm.setAttribute('role', 'button')
      triggerKm.setAttribute('tabindex', _instance.props.tabindex)
      addClass(triggerKm, ns.b('selfdefine'))
    }
  }

  function initEvent() {
    triggerKm?.addEventListener('keydown', handleTriggerKeyDown)
    dropdownKm.value?.addEventListener('keydown', handleItemKeyDown, true)
  }

  function initDomOperation() {
    menuItems.value = dropdownKm.value.querySelectorAll(
      "[tabindex='-1']"
    ) as unknown as HTMLButtonElement[]
    menuItemsArray.value = Array.from(menuItems.value)

    initEvent()
    initAria()
  }

  function triggerKmFocus() {
    triggerKm.focus()
  }

  initDomOperation()
}
