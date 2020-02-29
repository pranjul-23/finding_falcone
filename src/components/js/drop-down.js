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
    onAutoComplete: {
      type: Function
    },
    onSelectedVehicle: {
      type: Function
    }
  },
  methods: {
    toggleDropDown: function () {
      this.isOpen = !this.isOpen
    },
    onSearchKey: function (event) {
      this.selectedValue = event.target.value
      this.onAutoComplete(event.target.value, this.keyIndex)
    },
    onSelectVehicle: function (value) {
      this.selectedValue = value
      this.isOpen = false
      this.onSelectedVehicle(value, this.keyIndex)
    },
    hideSelect: function () {
      this.isOpen = false
    }
  },
  directives: {
    clickOutside
  }
}
