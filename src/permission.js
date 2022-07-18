import router from './router'
import store from './store'
import { filterRoutes } from '@/utils/filterRoutes'
router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token && to.path === '/login') {
    return next(from.path)
  }
  if (!token && to.path !== '/login') {
    return next('/login')
  }
  if (to.path !== '/login') {
    const userInfo = store.getters.userInfo
    if (JSON.stringify(userInfo) === '{}') {
      await store.dispatch('user/userInfo')
      const routes = filterRoutes(store.getters.menus)
      router.addRoute({
        redirect: '/index'
      })
      routes.forEach((item) => {
        router.addRoute('layout', item)
      })
      router.addRoute({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      return next(to.path)
    }
  }
  next()
})
