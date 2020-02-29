import DropDown from '@/components/DropDown'
import RadioButton from '@/components/RadioButton'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      destinations: [{
        name: 'Space pod',
        distance: 0,
        speed: 0,
        vehicles: ''
      }, {
        name: 'Space rocket',
        distance: 0,
        speed: 0,
        vehicles: ''
      }, {
        name: 'Space shuttle',
        distance: 0,
        speed: 0,
        vehicles: ''
      }, {
        name: 'Space ship',
        distance: 0,
        speed: 0,
        vehicles: ''
      }],
      planetList: [],
      vehiclesList: []
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
    ...mapGetters('falcone', ['getPlanetsData', 'getVehiclesData'])
  },
  methods: {
    handleAutoComplete: function (item, index) {
      console.log('****', item, index)
    },
    handleSelectedVehicle: function (item, index) {
      console.log('****>>>>>>', item, index)
      this.destinations[index].vehicles = item
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
