import { buildProps, definePropType } from '@kbt-ui/utils'
import { useSizeProp } from '@kbt-ui/hooks'

import type { ExtractPropTypes } from 'vue'
import type { Language } from '@kbt-ui/locale'
import type { ButtonConfigContext } from '@kbt-ui/components/button'
import type { MessageConfigContext } from '@kbt-ui/components/message'

export type ExperimentalFeatures = {
  // TO BE Defined
}

export const configProviderProps = buildProps({
  /**
   * @description Controlling if the users want a11y features
   */
  a11y: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Locale Object
   */
  locale: {
    type: definePropType<Language>(Object),
  },
  /**
   * @description global component size
   */
  size: useSizeProp,
  /**
   * @description button related configuration, [see the following table](#button-attributes)
   */
  button: {
    type: definePropType<ButtonConfigContext>(Object),
  },
  /**
   * @description features at experimental stage to be added, all features are default to be set to false                                                                                | ^[object]
   */
  experimentalFeatures: {
    type: definePropType<ExperimentalFeatures>(Object),
  },
  /**
   * @description Controls if we should handle keyboard navigation
   */
  keyboardNavigation: {
    type: Boolean,
    default: true,
  },
  /**
   * @description message related configuration, [see the following table](#message-attributes)
   */
  message: {
    type: definePropType<MessageConfigContext>(Object),
  },
  /**
   * @description global Initial zIndex
   */
  zIndex: Number,
  /**
   * @description global component className prefix (cooperated with [$namespace](https://github.com/kbt-ui/kbt-ui/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1)) | ^[string]
   */
  namespace: {
    type: String,
    default: 'k',
  },
} as const)
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
