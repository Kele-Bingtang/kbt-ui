import installer from './defaults'
export * from '@kbt-ui/components'
export * from '@kbt-ui/constants'
export * from '@kbt-ui/directives'
export * from '@kbt-ui/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
