import DropDown from '@/components/DropDown'
import RadioButton from '@/components/RadioButton'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      destinations: [{
        name: '',
        distance: 0,
        max_distance: 0,
        speed: 0,
        vehicles: ''
      }, {
        name: '',
        distance: 0,
        max_distance: 0,
        speed: 0,
        vehicles: ''
      }, {
        name: '',
        distance: 0,
        max_distance: 0,
        speed: 0,
        vehicles: ''
      }, {
        name: '',
        distance: 0,
        max_distance: 0,
        speed: 0,
        vehicles: ''
      }],
      planetList: [],
      vehiclesList: [],
      selectedVehicles: {},
      isDisabled: false,
      availablePlanetList: [],
      isError: false,
      errorMsg: 'Something went wrong!'
    }
  },
  components: {
    DropDown,
    RadioButton
  },
  created () {
    this.$store.dispatch('falcone/getPlanets', {
      success: this.getPlanetSuccessfully,
      failure: this.getPlanetFailure
    })
    this.$store.dispatch('falcone/getVehicles', {
      success: this.getVehiclesSuccessfully,
      failure: this.getVehiclesFailure
    })
    this.$store.dispatch('falcone/getToken', {
      payload: {},
      success: this.getTokenSuccessfully,
      failure: this.getTokenFailure
    })
  },
  computed: {
    ...mapGetters('falcone', ['getPlanetsData', 'getVehiclesData', 'getTokenValue', 'getAvailablePlanetList']),
    totalTimeTaken: function () {
      let totalTime = 0
      this.destinations.forEach(element => {
        if (element.distance > 0 && element.speed) {
          totalTime = totalTime + (element.distance / element.speed)
        }
      })
      return totalTime
    },
    isButtonDisabled: function () {
      return this.destinations.filter(el => el.distance > 0).length === 4 &&
      this.destinations.filter(el => el.vehicles).length === 4
    }
  },
  methods: {
    handleSearchPlanet: function (item, index) {
      if (item.length > 0) {
        this.planetList = this.availablePlanetList.filter(el => el.name.toLowerCase().indexOf(item.toLowerCase()) > -1)
      } else {
        this.selectedVehicles[index] = ''
        this.planetList = this.getPlanetsData.filter(el => !Object.values(this.selectedVehicles).includes(el.name))
        this.$store.dispatch('falcone/updatedPlanetList', this.planetList)
      }
    },
    handleSelectedPlanet: function (item, index) {
      this.selectedVehicles[index] = item.name
      this.destinations[index].name = item.name
      this.destinations[index].distance = item.distance
      this.planetList = this.getPlanetsData.filter(el => !Object.values(this.selectedVehicles).includes(el.name))
      this.$store.dispatch('falcone/updatedPlanetList', this.planetList)
      this.vehiclesList.forEach((el, indexId) => {
        if (el.max_distance < item.distance) {
          this.vehiclesList[indexId].isDisabled = true
        } else {
          this.vehiclesList[indexId].isDisabled = false
        }
      })
    },
    handleSelectedVehicles: function (pods, index) {
      this.destinations[index].vehicles = pods.name
      this.destinations[index].max_distance = pods.max_distance
      this.destinations[index].speed = pods.speed
      this.vehiclesList.forEach((element, indexId) => {
        if (element.max_distance === pods.max_distance && element.total_no > 0 && pods.total_no !== 0) {
          this.vehiclesList[indexId].total_no -= 1
          this.vehiclesList[indexId].isDisabled = false
        } else {
          this.vehiclesList[indexId].isDisabled = true
        }
      })
    },
    findingFalcones: function () {
      const payload = {
        token: this.getTokenValue,
        planet_names: this.destinations.map(el => el.name),
        vehicle_names: this.destinations.map(el => el.vehicles)
      }
      this.$store.dispatch('falcone/findingFalcone', {
        payload: payload,
        success: this.findFalconeSuccessfully,
        failure: this.findFalconeFailure
      })
    },
    findFalconeSuccessfully: function (res) {
      if (res.data.status === 'success') {
        const payload = {
          planet_name: res.data.planet_name,
          timeTaken: this.totalTimeTaken
        }
        this.isError = false
        this.$store.dispatch('falcone/getPlanetDetails', { payload })
      } else {
        const payload = {}
        this.$store.dispatch('falcone/getPlanetDetails', { payload })
      }
      this.$router.push({ path: '/success-page' })
    },
    findFalconeFailure: function (err) {
      if (err) {
        this.isError = true
      }
    },
    getPlanetSuccessfully (res) {
      if (res) {
        this.isError = false
      }
    },
    getPlanetFailure (err) {
      if (err) {
        this.isError = true
      }
    },
    getVehiclesSuccessfully (res) {
      if (res) {
        this.isError = false
      }
    },
    getVehiclesFailure (err) {
      if (err) {
        this.isError = true
      }
    },
    getTokenSuccessfully (res) {
      if (res) {
        this.isError = false
      }
    },
    getTokenFailure (err) {
      if (err) {
        this.isError = true
      }
    }
  },
  watch: {
    getPlanetsData (newValue) {
      this.planetList = newValue
      this.availablePlanetList = newValue
    },
    getVehiclesData (newValue) {
      this.vehiclesList = newValue
    },
    getAvailablePlanetList (newValue) {
      this.availablePlanetList = newValue
    }
  }
}
