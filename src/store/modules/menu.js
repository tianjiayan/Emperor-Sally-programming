export default {
  namespaced: true,
  state: () => ({
    isCollapse: false
  }),
  mutations: {
    SET_coLLAPSE: (state) => {
      state.collapse = !state.collapse
    }
  },
  actions: {
    setCollapse: ({ commit }) => {
      commit('SET_coLLAPSE')
    }
  }
}
