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
    onSelectedPods: {
      type: Function
    },
    disablePods: {
      type: Boolean
    }
  },
  methods: {
    getSelectedVehicle: function () {
      this.onSelectedPods(this.vehicle, this.indexId)
    }
  }
}
