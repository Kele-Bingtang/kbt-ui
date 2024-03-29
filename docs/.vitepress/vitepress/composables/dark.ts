import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'k-theme-appearance',
})

export const toggleDark = useToggle(isDark)
