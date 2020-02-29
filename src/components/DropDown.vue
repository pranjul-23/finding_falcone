<template>
  <div class="main_container" v-click-outside="hideSelect">
    <label for="dropdown">{{labelName}}</label>
    <div class="drop_down" @click="toggleDropDown()">
      <input type="text" @input="onSearchKey" :value="selectedValue" :placeholder="placeholder">
      <div class="drop_down_arrow"><span></span></div>
    </div>
    <div v-if="isOpen">
      <ul class="autocomplete_results">
        <li class="autocomplete_result" v-for="(item, index) in planetList"
        :key="index" @click="onSelectVehicle(item.name)">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./js/drop-down.js"></script>

<style lang="scss" scoped>
.main_container {
  .drop_down {
    display: flex;
    width: 200px;
    height: 36px;
    border: 1px solid #808080;
    padding-right: 6px;
    padding-left: 6px;

    input[type="text"] {
      width: 100%;
      height: 34px;
      outline: none;
      border: 0;
    }
    &_arrow {
      position: relative;
      left: 7px;
      width: 25px;
      height: 36px;
      border: 1px solid #808080;
      background-color: #ff8000;
      cursor: pointer;
      span {
        border: solid #ffffff;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 3px;
        position: relative;
        left: 6px;
        top: 4px;
        transform: rotate(45deg);
      }
    }
  }
  .autocomplete_results {
    margin: 0;
    padding: 0;
    width: 211px;
    border: 1px solid #808080;
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
