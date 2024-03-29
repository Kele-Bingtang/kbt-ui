import { withInstall, withNoopInstall } from '@kbt-ui/utils'

import Container from './src/container.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'

export const KContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main,
})

export default KContainer
export const KAside = withNoopInstall(Aside)
export const KFooter = withNoopInstall(Footer)
export const KHeader = withNoopInstall(Header)
export const KMain = withNoopInstall(Main)

export type ContainerInstance = InstanceType<typeof Container>
export type AsideInstance = InstanceType<typeof Aside>
export type FooterInstance = InstanceType<typeof Footer>
export type HeaderInstance = InstanceType<typeof Header>
export type MainInstance = InstanceType<typeof Main>
