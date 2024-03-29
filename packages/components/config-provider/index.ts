import { withInstall } from '@kbt-ui/utils'

import ConfigProvider from './src/config-provider'

export const KConfigProvider = withInstall(ConfigProvider)
export default KConfigProvider

export * from './src/config-provider'
export * from './src/config-provider-props'
export * from './src/constants'
export * from './src/hooks/use-global-config'
