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
    nameKey: {
      type: String
    }
  },
  methods: {
    getSelectedVehicle: function () {
      console.log('?????', this.vehicle)
    }
  }
}
