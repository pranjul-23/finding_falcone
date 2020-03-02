import { mapGetters } from 'vuex'

export default {
  name: 'SuccessPage',
  computed: {
    ...mapGetters('falcone', ['getPlanetDetailData']),
    planetDetails: function () {
      return this.getPlanetDetailData ? this.getPlanetDetailData.planet_name : {}
    }
  }
}
