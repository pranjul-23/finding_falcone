export default {
  name: 'RadioButton',
  props: {
    vehicle: {
      type: Object,
      default: () => {}
    },
    keyIndex: {
      type: String
    },
    indexId: {
      type: Number
    },
    nameKey: {
      type: String
    },
    onSelectedVehicles: {
      type: Function
    }
  },
  computed: {
    disableVehicles () {
      return this.vehicle.isDisabled
    }
  },
  methods: {
    getSelectedVehicle: function () {
      this.onSelectedVehicles(this.vehicle, this.indexId)
    }
  }
}
