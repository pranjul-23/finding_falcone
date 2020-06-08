<template>
    <div class="radio-button">
        <input type="radio" :name="nameKey" :id="keyIndex" @change="getSelectedVehicle()" :disabled="disableVehicles">
        <label :for="keyIndex" :class="{'isDisable': disableVehicles}" class="radio-label">{{vehicle.name}} ({{vehicle.total_no}})</label>
    </div>
</template>

<script src="./js/radio-button.js"></script>

<style lang="scss" scoped>
$color1: #f4f4f4;
$color2: #ff8000;

.radio-button {
    margin-top: 20px;
    margin-bottom: 20px;
    input[type="radio"] {
        position: absolute;
        opacity: 0;
        + .radio-label {
            cursor: pointer;
        &:before {
            content: '';
            border-radius: 100%;
            border: 1px solid darken($color1, 25%);
            display: inline-block;
            width: 1.4em;
            height: 1.4em;
            position: relative;
            top: -0.2em;
            margin-right: 1em;
            vertical-align: top;
            text-align: center;
            transition: all 250ms ease;
        }
        }
        &:checked {
        + .radio-label {
            &:before {
            background-color: $color2;
            box-shadow: inset 0 0 0 4px $color1;
            }
        }
        }
        &:focus {
        + .radio-label {
            &:before {
            outline: none;
            border-color: $color2;
            }
        }
        }
    }
    .isDisable {
      pointer-events: none;
      opacity: 0.6;
    }
}
</style>
