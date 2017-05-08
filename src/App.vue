<template>
  <div id="app">
    <main>
      <per-person-total :per-person-total="perPersonTotal">
      </per-person-total>

      <bill-total :bill-total="billTotal"
                  @selected="selected('billTotal')"
                  :class="{ obscured: !isSelected('billTotal') }"
                  :display-hint="!isSelected('billTotal')">
      </bill-total>

      <div class="options-row">
        <div class="options-cell" :class="{ obscured: !isSelected('tipPercentage') }">
          <tip-percentage :tip-percentage="tipPercentage"
                  @selected="selected('tipPercentage')"
                  :display-hint="!isSelected('tipPercentage')">
          </tip-percentage>
        </div><!--

        --><div class="options-cell" :class="{ obscured: !isSelected('numberOfPeople') }">
          <split-quantity :number-of-people="numberOfPeople"
                  @selected="selected('numberOfPeople')"
                  :display-hint="!isSelected('numberOfPeople')">
          </split-quantity>
        </div><!--

        --><div class="options-cell">
          <clear @clear="clear"></clear>
        </div>
      </div>

      <calculator @input-clicked="updateSelectedInput"></calculator>
    </main>
  </div>
</template>

<script>
require('../static/reset.css')
require('font-awesome/css/font-awesome.css')

import PerPersonTotal from './components/per-person-total'
import BillTotal from './components/bill-total'
import TipPercentage from './components/tip-percentage'
import SplitQuantity from './components/split-quantity'
import Clear from './components/clear'
import Calculator from './components/calculator'
const numeral = require('numeral')

export default {
  name: 'app',
  components: {
    PerPersonTotal,
    BillTotal,
    TipPercentage,
    SplitQuantity,
    Clear,
    Calculator
  },
  data: function () {
    return {
      billTotal: '0',
      tipPercentage: '0',
      numberOfPeople: '0',
      selectedInput: ''
    }
  },
  computed: {
    perPersonTotal: function () {
      if (this.numberOfPeople === '0') {
        return numeral(this.numberOfPeople).format('0.00')
      }

      let billTotal = parseInt(this.billTotal)
      let tipPercentage = parseInt(this.tipPercentage) / 100
      let numberOfPeople = parseInt(this.numberOfPeople)

      let amount = (billTotal + (billTotal * tipPercentage)) / numberOfPeople
      return numeral(amount).format('0.00')
    }
  },
  methods: {
    clear: function () {
      this.billTotal = '0'
      this.tipPercentage = '0'
      this.numberOfPeople = '0'
      this.selectedInput = 'billTotal'
    },
    updateSelectedInput: function (value) {
      if (value !== 'DEL') {
        this.addDigitToSelectedInput(value)
      } else {
        this.removeDigit()
      }
    },
    addDigitToSelectedInput: function (digit) {
      if (this[this.selectedInput] === '0') {
        this[this.selectedInput] = digit
      } else {
        this[this.selectedInput] += digit
      }
    },
    removeDigit: function () {
      if (this[this.selectedInput].length === 1) {
        this[this.selectedInput] = '0'
      } else {
        this[this.selectedInput] = this[this.selectedInput].slice(0, -1)
      }
    },
    selected: function (input) {
      this.selectedInput = input
    },
    isSelected: function (inputName) {
      return inputName === this.selectedInput
    }
  },
  watch: {
    tipPercentage: function (newValue) {
      let parsedValue = parseInt(newValue)
      if (parsedValue > 100) {
        this.tipPercentage = '100'
      }
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #000;
  user-select: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 500px;
  margin: 0 auto;
}

@media screen and (max-device-width: 500px) {
    main {
      width: 100%;
    }
}

main {
  .obscured {
    opacity: 0.5;
  }

  .options-row {
    position: relative;
    width: 100%;
    padding: 0;
    height: 110px;

    .options-cell {
      vertical-align: top;
      position: relative;
      height: 100%;
      display: inline-block;
      width: 33.33%;
    }
  }
}
</style>
