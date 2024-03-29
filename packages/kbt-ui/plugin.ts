import { KInfiniteScroll } from '@kbt-ui/components/infinite-scroll'
import { KLoading } from '@kbt-ui/components/loading'
import { KMessage } from '@kbt-ui/components/message'
import { KMessageBox } from '@kbt-ui/components/message-box'
import { KNotification } from '@kbt-ui/components/notification'
import { KPopoverDirective } from '@kbt-ui/components/popover'

import type { Plugin } from 'vue'

export default [
  KInfiniteScroll,
  KLoading,
  KMessage,
  KMessageBox,
  KNotification,
  KPopoverDirective,
] as Plugin[]
