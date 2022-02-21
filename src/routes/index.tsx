import loadable from '@loadable/component'
import { RouteConfig } from 'react-router-config'

export const loadableWithFallback = (loadFn: any, fallback = null) => {
  return loadable(loadFn, { fallback })
}

const Page404Router = {
  component: loadableWithFallback(() => import(/* webpackChunkName: "404" */ '@/pages/Home')),
}

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: loadableWithFallback(() => import(/* webpackChunkName: "home" */ '@/pages/Home')),
    name: '首页',
  },
  Page404Router,
]

export { routesConfig }
