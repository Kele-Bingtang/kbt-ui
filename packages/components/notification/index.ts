import { withInstallFunction } from '@kbt-ui/utils'

import Notify from './src/notify'

export const KNotification = withInstallFunction(Notify, '$notify')
export default KNotification

export * from './src/notification'
