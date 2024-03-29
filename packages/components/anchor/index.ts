import { withInstall, withNoopInstall } from '@kbt-ui/utils'
import Anchor from './src/anchor.vue'
import AnchorLink from './src/anchor-link.vue'

export const KAnchor = withInstall(Anchor, {
  AnchorLink,
})
export const KAnchorLink = withNoopInstall(AnchorLink)
export default KAnchor

export * from './src/anchor'
