import { clickOutside } from '@/click-outside'

export default {
  name: 'DropDown',
  data () {
    return {
      isOpen: false,
      selectedValue: ''
    }
  },
  props: {
    planetList: {
      type: Array,
      required: false,
      default: () => []
    },
    labelName: {
      type: String
    },
    keyIndex: {
      type: Number
    },
    placeholder: {
      type: String
    },
    onSearchPlanet: {
      type: Function
    },
    onSelectedPlanet: {
      type: Function
    }
  },
  methods: {
    toggleDropDown: function () {
      this.isOpen = !this.isOpen
    },
    onSearchKey: function (event) {
      this.selectedValue = event.target.value
      this.onSearchPlanet(event.target.value, this.keyIndex)
    },
    onSelectVehicle: function (value, index) {
      this.selectedValue = value.name
      this.isOpen = false
      this.onSelectedPlanet(value, this.keyIndex)
    },
    hideSelect: function () {
      this.isOpen = false
    }
  },
  directives: {
    clickOutside
  }
}
