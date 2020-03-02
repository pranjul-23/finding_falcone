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
        speed: 0,
        vehicles: ''
      }, {
        name: '',
        distance: 0,
        speed: 0,
        vehicles: ''
      }, {
        name: '',
        distance: 0,
        speed: 0,
        vehicles: ''
      }, {
        name: '',
        distance: 0,
        speed: 0,
        vehicles: ''
      }],
      planetList: [],
      vehiclesList: [],
      selectedVehicles: []
    }
  },
  components: {
    DropDown,
    RadioButton
  },
  created () {
    this.$store.dispatch('falcone/getPlanets')
    this.$store.dispatch('falcone/getVehicles')
  },
  computed: {
    ...mapGetters('falcone', ['getPlanetsData', 'getVehiclesData']),
    totalTimeTaken: function () {
      let totalTime = 0
      this.destinations.forEach(element => {
        if (element.distance > 0 && element.speed) {
          totalTime = totalTime + (element.distance / element.speed)
        }
      })
      return totalTime
    }
  },
  methods: {
    handleAutoComplete: function (item) {
      this.planetList = this.getPlanetsData.filter(el => el.name.toLowerCase().indexOf(item.toLowerCase()) > -1)
    },
    handleSelectedVehicle: function (item, index) {
      console.log('37468734672864')
      if (!this.selectedVehicles.includes(item)) {
        this.selectedVehicles.push(item)
      }
      this.destinations[index].name = item
      this.planetList = this.getPlanetsData.filter(el => !this.selectedVehicles.includes(el.name))
    },
    handleSelectedPods: function (pods, index) {
      this.destinations[index].distance = pods.max_distance
      this.destinations[index].speed = pods.speed
      this.vehiclesList.forEach((element, indexId) => {
        if (element.max_distance === pods.max_distance && element.total_no !== 0 && this.destinations[index].distance) {
          this.vehiclesList[indexId].total_no -= 1
        }
      })
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
