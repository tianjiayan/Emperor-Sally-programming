import routerNames from './filterRoutes'
import router from '@/router'
// 删除路由
export const resetRouter = () => {
  routerNames.forEach((item) => {
    router.removeRoute(item)
  })
  router.removeRoute('404')
  window.location.reload()
}
