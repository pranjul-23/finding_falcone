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
    getPlanets ({ commit }, { success, failure }) {
      api.getPlanets((result) => {
        success && success(result.data)
        commit('setPlanets', result.data)
      }, failure)
    },
    getVehicles ({ commit }, { success, failure }) {
      api.getVehicles((result) => {
        success && success(result.data)
        commit('setVehicles', result.data)
      }, failure)
    },
    getToken ({ commit }, { payload, success, failure }) {
      api.getToken((result) => {
        success && success(result.data)
        commit('setToken', result.data.token)
      }, payload, failure)
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
