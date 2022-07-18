import { setItem, getItem } from '../../utils/storage'
import { loginAPI, getUserInfo } from '../../api/user'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: {},
    menus: []
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    },
    setMenu(state, menus) {
      state.menus = menus
      setItem('menus', menus)
    }
  },
  actions: {
    async login({ commit }, data) {
      try {
        const response = await loginAPI(data)
        console.log(response)
        commit('setToken', response.token)
      } catch (e) {
        console.log(e)
      }
    },
    async userInfo({ commit }) {
      const data = await getUserInfo()
      // console.log(response)
      commit('setUserInfo', data)
      commit('setMenu', data.menus)
    }
  }
}
