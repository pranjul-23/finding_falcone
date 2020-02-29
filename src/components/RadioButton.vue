<template>
    <div class="main_container">
        <div class="radio-button" @click="getSelectedVehicle()">
            <input type="radio" :name="nameKey" :id="keyIndex">
            <label :for="keyIndex" class="radio-label">{{vehicle.name}} ({{vehicle.total_no}})</label>
        </div>
    </div>
</template>

<script src="./js/radio-button.js"></script>

<style lang="scss" scoped>
$color1: #f4f4f4;
$color2: #ff8000;
.main_container {
    .radio-button {
        margin-top: 20px;
        margin-bottom: 20px;
    input[type="radio"] {
        position: absolute;
        opacity: 0;
        + .radio-label {
        &:before {
            content: '';
            background: $color1;
            border-radius: 100%;
            border: 1px solid darken($color1, 25%);
            display: inline-block;
            width: 1.4em;
            height: 1.4em;
            position: relative;
            top: -0.2em;
            margin-right: 1em;
            vertical-align: top;
            cursor: pointer;
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
    }
}
</style>
