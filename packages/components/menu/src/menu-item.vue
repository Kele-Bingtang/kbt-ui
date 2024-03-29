<template>
  <li
    :class="[
      nsMenuItem.b(),
      nsMenuItem.is('active', active),
      nsMenuItem.is('disabled', disabled),
    ]"
    role="menuitem"
    tabindex="-1"
    @click="handleClick"
  >
    <k-tooltip
      v-if="
        parentMenu.type.name === 'KMenu' &&
        rootMenu.props.collapse &&
        $slots.title
      "
      :effect="rootMenu.props.popperEffect"
      placement="right"
      :fallback-placements="['left']"
      persistent
    >
      <template #content>
        <slot name="title" />
      </template>
      <div :class="nsMenu.be('tooltip', 'trigger')">
        <slot />
      </div>
    </k-tooltip>
    <template v-else>
      <slot />
      <slot name="title" />
    </template>
  </li>
</template>

<script lang="ts">
// @ts-nocheck
import {
  computed,
  defineComponent,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  reactive,
  toRef,
} from 'vue'
import KTooltip from '@kbt-ui/components/tooltip'
import { throwError } from '@kbt-ui/utils'
import { useNamespace } from '@kbt-ui/hooks'
import useMenu from './use-menu'
import { menuItemEmits, menuItemProps } from './menu-item'

import type { MenuItemRegistered, MenuProvider, SubMenuProvider } from './types'

const COMPONENT_NAME = 'KMenuItem'
export default defineComponent({
  name: COMPONENT_NAME,
  components: {
    KTooltip,
  },

  props: menuItemProps,
  emits: menuItemEmits,

  setup(props, { emit }) {
    const instance = getCurrentInstance()!
    const rootMenu = inject<MenuProvider>('rootMenu')
    const nsMenu = useNamespace('menu')
    const nsMenuItem = useNamespace('menu-item')
    if (!rootMenu) throwError(COMPONENT_NAME, 'can not inject root menu')

    const { parentMenu, indexPath } = useMenu(instance, toRef(props, 'index'))

    const subMenu = inject<SubMenuProvider>(`subMenu:${parentMenu.value.uid}`)
    if (!subMenu) throwError(COMPONENT_NAME, 'can not inject sub menu')

    const active = computed(() => props.index === rootMenu.activeIndex)
    const item: MenuItemRegistered = reactive({
      index: props.index,
      indexPath,
      active,
    })

    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route,
        })
        emit('click', item)
      }
    }

    onMounted(() => {
      subMenu.addSubMenu(item)
      rootMenu.addMenuItem(item)
    })

    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item)
      rootMenu.removeMenuItem(item)
    })

    return {
      parentMenu,
      rootMenu,
      active,
      nsMenu,
      nsMenuItem,
      handleClick,
    }
  },
})
</script>
