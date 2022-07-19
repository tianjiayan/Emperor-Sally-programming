export default {
  namespaced: true,
  state: () => ({
    isCollapse: false
  }),
  mutations: {
    SET_coLLAPSE(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    setCollapse({ commit }) {
      commit('SET_coLLAPSE')
    }
  }
}
