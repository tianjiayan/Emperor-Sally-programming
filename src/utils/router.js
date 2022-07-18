// export const filterRoutes = (menus) => {
//   const newRoutes = []
//   menus.forEach((item) => {
//     if (item.children && item.children.length > 0) {
//       item.children.forEach((child) => {
//         const routes = menuRoutes(child)
//         newRoutes.push(routes)
//       })
//     }
//   })
//   newRoutes.push({
//     path: '*',
//     redirect: '/404'
//   })
//   return newRoutes
// }
