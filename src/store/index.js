import { createStore } from 'vuex'
import user from './modules/user'
import menu from './modules/menu'
import getters from './getters'
import tagesview from './modules/tagesview'
export default createStore({
  modules: {
    user,
    menu,
    tagesview
  },
  getters
})
