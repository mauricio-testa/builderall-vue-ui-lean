import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const sidebarStateKey = 'bui_store_sidebar_state'

export default new Vuex.Store({
  state: {
    sidebarState: localStorage.getItem(sidebarStateKey) || 'expanded',
    user: {
      name: 'Mauricio Testa',
      email: 'mauriciotesta@gmail.com',
      locale: 'pt_BR',
      gravatar:
        'https://secure.gravatar.com/avatar/2253502b4562dad48c2c74681c459dd1'
    }
  },
  mutations: {
    toggleSidebar (state, payload) {
      state.sidebarState = payload
      localStorage.setItem(sidebarStateKey, payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
