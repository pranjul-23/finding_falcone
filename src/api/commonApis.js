import apiCall from '@/api/makeApiCall'
import config from '@/config'

export default {
  getPlanets (callback, failure) {
    apiCall.makeGetRequest(config.getApiPath(config.api.planets), callback, failure)
  },
  getVehicles (callback, failure) {
    apiCall.makeGetRequest(config.getApiPath(config.api.vehicles), callback, failure)
  },
  getToken (callback, payload, failure) {
    apiCall.makePostRequest(config.getApiPath(config.api.token), callback, payload, failure)
  },
  getFalcone (callback, payload, failure) {
    apiCall.makePostRequest(config.getApiPath(config.api.falcone), callback, payload, failure)
  }
}
