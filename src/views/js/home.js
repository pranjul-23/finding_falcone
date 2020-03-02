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
      selectedVehicles: [],
      isDisabled: false
    }
  },
  components: {
    DropDown,
    RadioButton
  },
  created () {
    this.$store.dispatch('falcone/getPlanets')
    this.$store.dispatch('falcone/getVehicles')
    this.$store.dispatch('falcone/getToken', {
      payload: {}
    })
  },
  computed: {
    ...mapGetters('falcone', ['getPlanetsData', 'getVehiclesData', 'getTokenValue']),
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
    handleAutoComplete: function (item) {
      this.planetList = this.getPlanetsData.filter(el => el.name.toLowerCase().indexOf(item.toLowerCase()) > -1)
    },
    handleSelectedVehicle: function (item, index) {
      if (!this.selectedVehicles.includes(item.name)) {
        this.selectedVehicles.push(item.name)
      }
      this.destinations[index].name = item.name
      this.destinations[index].distance = item.distance
      this.planetList = this.getPlanetsData.filter(el => !this.selectedVehicles.includes(el.name))
      this.vehiclesList.forEach((el, indexId) => {
        if (el.max_distance >= item.distance) {
          this.vehiclesList[indexId].isDisabled = false
        } else {
          this.vehiclesList[indexId].isDisabled = true
        }
      })
    },
    handleSelectedPods: function (pods, index) {
      this.destinations[index].vehicles = pods.name
      this.destinations[index].max_distance = pods.max_distance
      this.destinations[index].speed = pods.speed
      this.vehiclesList.forEach((element, indexId) => {
        if (element.max_distance === pods.max_distance && element.total_no !== 0 && this.destinations[index].max_distance) {
          this.vehiclesList[indexId].total_no -= 1
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
        success: this.successFun,
        failure: this.failureFun
      })
    },
    successFun: function (res) {
      if (res.data.status === 'success') {
        const payload = {
          planet_name: res.data.planet_name,
          timeTaken: this.totalTimeTaken
        }
        this.$store.dispatch('falcone/getPlanetDetails', { payload })
      } else {
        const payload = {}
        this.$store.dispatch('falcone/getPlanetDetails', { payload })
      }
      this.$router.push({ path: '/success-page' })
    },
    failureFun: function (err) {
      console.log('error', err)
    }
  },
  watch: {
    getPlanetsData (newValue) {
      this.planetList = newValue
    },
    getVehiclesData (newValue) {
      this.vehiclesList = newValue
    }
  }
}
