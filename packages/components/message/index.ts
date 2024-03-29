import { withInstallFunction } from '@kbt-ui/utils'

import Message from './src/method'

export const KMessage = withInstallFunction(Message, '$message')
export default KMessage

export * from './src/message'
