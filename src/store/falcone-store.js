import api from '@/api/commonApis'

export default {
  namespaced: true,
  state: {
    planetsData: [],
    vehiclesData: []
  },
  getters: {
    getPlanetsData (state) {
      return state.planetsData
    },
    getVehiclesData (state) {
      return state.vehiclesData
    }
  },
  mutations: {
    setPlanets (state, value) {
      state.planetsData = value
    },
    setVehicles (state, value) {
      state.vehiclesData = value
    }
  },
  actions: {
    getPlanets ({ commit }) {
      api.getPlanets((result) => {
        commit('setPlanets', result.data)
      })
    },
    getVehicles ({ commit }) {
      api.getVehicles((result) => {
        commit('setVehicles', result.data)
      })
    }
  }
}
