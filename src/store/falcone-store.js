import api from '@/api/commonApis'

export default {
  namespaced: true,
  state: {
    planetsData: [],
    vehiclesData: [],
    token: '',
    planetDetails: {},
    availablePlanetList: []
  },
  getters: {
    getPlanetsData (state) {
      return state.planetsData
    },
    getVehiclesData (state) {
      return state.vehiclesData
    },
    getTokenValue (state) {
      return state.token
    },
    getPlanetDetailData (state) {
      return state.planetDetails
    },
    getAvailablePlanetList (state) {
      return state.availablePlanetList
    }
  },
  mutations: {
    setPlanets (state, value) {
      state.planetsData = value
    },
    setVehicles (state, value) {
      state.vehiclesData = value
    },
    setToken (state, value) {
      state.token = value
    },
    setPlanetDetails (state, value) {
      state.planetDetails = value
    },
    setUpdatedPlanetList (state, value) {
      state.availablePlanetList = value
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
    },
    getToken ({ commit }, { payload }) {
      api.getToken((result) => {
        commit('setToken', result.data.token)
      }, payload)
    },
    findingFalcone ({ commit }, { payload, success, failure }) {
      api.getFalcone((result) => {
        success && success(result)
      }, payload, failure)
    },
    getPlanetDetails ({ commit }, { payload }) {
      commit('setPlanetDetails', payload)
    },
    updatedPlanetList ({ commit }, data) {
      commit('setUpdatedPlanetList', data)
    }
  }
}
