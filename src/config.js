export default {
  BASE_PATH: 'https://findfalcone.herokuapp.com',
  api: {
    planets: '/planets',
    vehicles: '/vehicles'
  },

  getApiPath: function (path) {
    return this.BASE_PATH + path
  }
}
