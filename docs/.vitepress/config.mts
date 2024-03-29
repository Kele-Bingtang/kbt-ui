import consola from 'consola'
import { REPO_BRANCH, REPO_PATH } from '@kbt-ui/build-constants'
import { docsDirName } from '@kbt-ui/build-utils'
import { languages } from './utils/lang'
import { features, head, mdPlugin, nav, sidebars } from './config'
import type { UserConfig } from 'vitepress'

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true,
    }
  }

  const transformers = {}
  const directives = [
    'infinite-scroll',
    'loading',
    'popover',
    'click-outside',
    'repeat-click',
    'trap-focus',
    'mousewheel',
    'resize',
  ]
  directives.forEach((k) => {
    transformers[k] = transformer
  })

  return transformers
}

consola.debug(`DOC_ENV: ${process.env.DOC_ENV}`)

const locales = {}
languages.forEach((lang) => {
  locales[`/${lang}`] = {
    label: lang,
    lang,
  }
})

export const config: UserConfig = {
  title: 'Kbt UI',
  description: '基于 Vue 3，面向设计师和开发者的组件库',
  lastUpdated: true,
  head,
  themeConfig: {
    repo: REPO_PATH,
    docsBranch: REPO_BRANCH,
    docsDir: docsDirName,

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    logo: '/images/kbt-ui-logo.png',
    logoSmall: '/images/kbt-ui-logo.pngvg',
    sidebars,
    nav,
    agolia: {
      apiKey: '99caf32e743ba77d78b095b763b8e380',
      appId: 'ZM3TI8AKL4',
    },
    features,
    langs: languages,
  },

  locales,

  markdown: {
    config: (md) => mdPlugin(md),
  },

  vue: {
    template: {
      ssr: true,
      compilerOptions: {
        directiveTransforms: buildTransformers(),
      },
    },
  },
}

export default config
