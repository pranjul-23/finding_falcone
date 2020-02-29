import Vue from 'vue'
import Vuex from 'vuex'
import falcone from './falcone-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    falcone: falcone
  }
})

export default store
