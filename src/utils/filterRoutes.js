const routerNames = []
export const filterRoutes = (routes) => {
  if (!routes) return []
  const result = []
  routes.forEach((item) => {
    item.child.forEach((child) => {
      if (child.frontpath === '/') child.frontpath = '/index'
      const route = {
        path: child.frontpath,
        meta: {
          title: child.name
        }
      }
      if (child.desc) {
        route.component = () => import(`@/views/${child.desc}`)
        route.name = child.desc
      } else {
        route.component = () => import(`@/views/${child.icon}`)
        route.name = child.icon
      }
      result.push(route)
    })
  })
  result.forEach((item) => {
    routerNames.push(item.name)
  })
  return result
}

export default routerNames
