import { setItem, getItem, removeItem } from '../../utils/storage'
import { loginAPI, getUserInfo, getLogout } from '../../api/user'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
    },
    async logout({ commit }) {
      await getLogout()
      commit('setToken', '')
      commit('setUserInfo', '')
      commit('setMenu', '')
      removeItem('token')
      router.push('/login')
      return true
    }
  }
}
