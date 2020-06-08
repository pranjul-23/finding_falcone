<template>
  <div class="home">
    <div class="reset__box">
      <a href="/">Reset</a>
      <div>|</div>
      <a href="https://www.geektrust.in/">Geek Trust Home</a>
    </div>
    <div class="container">
      <div class="header__box">
        <h1>Finding Falcone!</h1>
        <h3>Select planet you want to search in:</h3>
      </div>
      <div class="destination__box">
        <div class="destination__box--item"
           v-for="(item, index) in destinations"
           v-bind:key="index">
          <drop-down
            :keyIndex="index"
            :planetList="planetList"
            :labelName="`Destination ${index + 1}`"
            :placeholder="`Select`"
            :onSearchPlanet="handleSearchPlanet"
            :onSelectedPlanet="handleSelectedPlanet">
          </drop-down>
          <div v-if="item.name.length > 0">
            <div v-for="(vehicle, indexId) in vehiclesList"
               v-bind:key="vehicle.max_distance">
             <div :class="{disable: (item.distance > vehicle.max_distance) || vehicle.total_no === 0}">
               <radio-button
                 :indexId="index"
                 :keyIndex="destinations[index].name + '-' + indexId"
                 :nameKey="destinations[index].name"
                 :vehicle="vehicle"
                 :onSelectedVehicles="handleSelectedVehicles">
               </radio-button>
             </div>
            </div>
          </div>
        </div>
      </div>
      <div class="total__score">
        <h1>Time Taken: {{totalTimeTaken}}</h1>
      </div>
      <div class="btn__wrapper">
        <button :class="{'btn_disable':!isButtonDisabled, 'btn_primary': true}" @click="findingFalcones()" :disabled="!isButtonDisabled">Find Falcone</button>
      </div>
    </div>
    <div class="footer">
      <span>Coding Problem - </span>
      <a href="https://www.geektrust.in/coding-problem/frontend/space"> www.geektrust.in/finding-falcon</a>
    </div>
  </div>
</template>

<script src="./js/home.js"></script>
<style lang="scss" scoped>
  .home {
    padding: 20px;
    .reset__box {
      display: flex;
      justify-content: flex-end;
      padding: 10px 20px;

      a {
        font-weight: 700;
        color: #2c3e50;
        text-decoration: none;
      }
    }
    .reset__box div:not(:first-child) {
      margin: 0 10px;
    }
    .container {
      margin: 0 auto;
      max-width: 1146px;
      .header__box {
        text-align: center;
      }
      .destination__box {
        display: flex;
        flex-wrap: wrap;

        &--item {
          padding: 10px 20px;
        }
        .disable {
          pointer-events: none;
          opacity: 0.6;
        }
      }
      .total__score {
        padding: 10px 20px;
        text-align: center;
      }
    }
    .btn__wrapper {
      text-align: center;
      margin-bottom: 50px;
      .btn_primary {
        width: 120px;
        padding: 10px;
        border-radius: 4px;
        color: #ffffff;
        cursor: pointer;
        outline: none;
        background-color: #ff8000;
      }
      .btn_disable {
        background-color: #808080;
        cursor: not-allowed;
      }
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 10px 0;
      width: 100%;
      font-size: 14px;
      background-color: gainsboro;
    }
  }
  @media only screen and (min-width: 856px) {
    .destination__box {
      justify-content: center;
      flex-direction: row;
    }
  }
  @media only screen and (max-width: 856px) and ( min-width: 560px) {
    .destination__box {
      max-width: 500px;
      justify-content: center;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 560px) {
    .destination__box {
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
