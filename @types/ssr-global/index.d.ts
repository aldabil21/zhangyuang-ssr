interface Window {
  __USE_SSR__?: IWindow['__USE_SSR__']
  __INITIAL_DATA__?: IWindow['__INITIAL_DATA__']
  __INITIAL_PINIA_DATA__?: IWindow['__INITIAL_PINIA_DATA__']
  __USE_VITE__?: boolean
  prefix?: string
  clientPrefix?: string
  microApp?: any
  hashRouter: boolean
}
const __VUE_PROD_DEVTOOLS__: boolean
const __isBrowser__: Boolean


declare module '*.less'