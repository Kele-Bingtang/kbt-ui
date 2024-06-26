import { computed, getCurrentInstance, inject, unref } from 'vue'
import { debugWarn, isClient } from '@kbt-ui/utils'
import { useGetDerivedNamespace } from '../use-namespace'

import type { InjectionKey, Ref } from 'vue'
import type { MaybeRef } from '@vueuse/core'

export type KIdInjectionContext = {
  prefix: number
  current: number
}

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
}

export const ID_INJECTION_KEY: InjectionKey<KIdInjectionContext> =
  Symbol('elIdInjection')

export const useIdInjection = (): KIdInjectionContext => {
  return getCurrentInstance()
    ? inject(ID_INJECTION_KEY, defaultIdInjection)
    : defaultIdInjection
}

export const useId = (deterministicId?: MaybeRef<string>): Ref<string> => {
  const idInjection = useIdInjection()
  if (!isClient && idInjection === defaultIdInjection) {
    debugWarn(
      'IdInjection',
      `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`
    )
  }

  const namespace = useGetDerivedNamespace()
  const idRef = computed(
    () =>
      unref(deterministicId) ||
      `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`
  )

  return idRef
}
