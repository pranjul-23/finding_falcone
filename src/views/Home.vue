<template>
  <div class="home">
    <div class="heading">
      <h2>Finding Falcone!</h2>
      <p>Select planet you want to search in:</p>
    </div>
    <div class="destination_container">
      <div class="destination" v-for="(item, index) in destinations" v-bind:key="index">
        <drop-down
          :key="index"
          :keyIndex="index"
          :planetList="planetList"
          :labelName="`Destination ${index + 1}`"
          :placeholder="`Select`"
          :onAutoComplete="handleAutoComplete"
          :onSelectedVehicle="handleSelectedVehicle">
        </drop-down>
        <div v-if="item.name.length > 0">
          <div v-for="(vehicle, indexId) in vehiclesList" v-bind:key="vehicle.max_distance">
            <radio-button
              :indexId="index"
              :keyIndex="destinations[index].name + '-' + indexId"
              :nameKey="destinations[index].name"
              :vehicle="vehicle"
              :onSelectedPods="handleSelectedPods"
              :disablePods="item.distance > vehicle.max_distance">
            </radio-button>
          </div>
        </div>
      </div>
      <h1 class="time_taken">Time Taken: {{totalTimeTaken}}</h1>
    </div>
  </div>
</template>

<script src="./js/home.js"></script>
<style lang="scss" scoped>
  .home {
    margin: auto;
    width: 75%;
    .destination_container {
      width: 100%;
      display: flex;
      flex-direction: row;

      .destination {
        margin: 10px;
      }
    }
    .time_taken {
      margin-left: 25px;
    }
  }
</style>
