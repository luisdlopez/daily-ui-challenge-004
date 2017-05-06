<template>
  <div class="calculator-wrapper">
    <div class="row" v-for="row of inputs">
      <div class="cell" v-for="input of row" v-tap="input">
        <div class="input">{{ input }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const Hammer = require('hammerjs')

export default {
  name: 'calculator',
  data: function () {
    return {
      inputs: [
        [ '1', '2', '3' ],
        [ '4', '5', '6' ],
        [ '7', '8', '9' ],
        [ '.', '0', 'DEL' ]
      ]
    }
  },
  directives: {
    tap: {
      bind: (element, binding, node) => {
        let hammertime = new Hammer(element)
        hammertime.on('tap', (event) => {
          node.context.$emit('input-clicked', binding.value)
        })
      }
    }
  }
}
</script>

<style lang="scss">
.calculator-wrapper {
  .row {
    &:first-child {
      box-shadow: inset 0px 10px 25px -15px black;
    }

    width: 100%;
    background-color: #2B2F4B;
    color: #E0E4F3;
    font-size: 40px;
    text-align: center;

    &:not(:last-child) {
      border-bottom: 2px solid #373853;
    }

    .cell {
      display: inline-block;
      width: 33.33%;

      &:not(:last-child) {
        .input {
          border-right: 2px solid #373853;
        }
      }

      :active {
        background-color: #656ca4;
      }

      .input {
        padding: 22px 0;
        cursor: pointer;
      }
    }
  }
}
</style>
