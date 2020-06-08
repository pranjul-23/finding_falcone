<template>
  <div class="main_container" v-click-outside="hideSelect" :id="keyIndex">
    <label>{{labelName}}</label>
    <div class="dropdown" @click="toggleDropDown()">
      <input type="text" @input="onSearchKey" :value="selectedValue" :placeholder="placeholder">
      <div class="select">
        <img src="@/assets/arrow-down.png" :class="{'icon-down' : isOpen}">
      </div>
    </div>
    <div v-show="isOpen && planetList.length">
      <ul class="autocomplete_results">
        <li class="autocomplete_result" v-for="(item, index) in planetList"
        :key="index" @click="onSelectVehicle(item)">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./js/drop-down.js"></script>

<style lang="scss" scoped>
.main_container {
  .dropdown {
    display: flex;
    width: 165px;
    height: 45px;
    border: 1px solid lightgray;
    border-radius: 6px;
    background-color: lightgray;
    padding: 0 6px;
    input[type="text"] {
      width: 100%;
      outline: none;
      border: 0;
      background-color: inherit;
    }
    .select {
      position: relative;
      left: 7px;
      width: 40px;
      height: 35px;
      cursor: pointer;
      img {
        position: absolute;
        left: 5px;
        top: 15px;
        width: 15px;
        height: 15px;
      }
      .icon-down {
        transform: rotate(180deg);
      }
    }
  }
  .autocomplete_results {
    margin: 4px 0;
    padding: 0;
    width: 175px;
    box-shadow: 0 3px 10px 0 rgba(34,36,38,.15);
    position: absolute;
    z-index: 99;
    background-color: #ffffff;

    .autocomplete_result {
      list-style-type: none;
      text-align: left;
      padding: 6px 10px;
      cursor: pointer;

      &:hover {
        font-weight: bold;
      }
    }
  }
}
</style>
