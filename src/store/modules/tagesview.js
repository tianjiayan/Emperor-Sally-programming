export default {
  namespaced: true,
  state: () => ({
    tags: [
      {
        path: '/index',
        title: '后台首页'
      }
    ]
  }),
  mutations: {
    setTags(state, tags) {
      const flag = state.tags.find((item) => item.path === tags.path)
      if (!flag) {
        state.tags.push(tags)
      }
    },
    delTags(state, path) {
      state.tags = state.tags.filter((v) => {
        return v.path === '/index' || v.path === path
      })
    },
    // 全部关闭
    aelAll(state) {
      state.tags = state.tags.filter((v) => v.path === '/index')
    }
  },
  actions: {}
}
