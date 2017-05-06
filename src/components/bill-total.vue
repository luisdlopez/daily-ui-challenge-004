<template>
  <div v-tap class="bill-total-wrapper">
    <h2 class="title">Bill Total:</h2>
    <div class="value">{{ billTotal }}</div>

    <div class="hint" v-if="displayHint">
      Enter Tip
      <i class="fa fa-hand-o-down fa-1" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
const Hammer = require('hammerjs')

export default {
  name: 'bill-total',
  props: {
    billTotal: String,
    displayHint: Boolean
  },
  directives: {
    tap: {
      bind: (element, binding, node) => {
        let hammertime = new Hammer(element)
        hammertime.on('tap', (event) => {
          node.context.$emit('selected')
        })
      }
    }
  }
}
</script>

<style lang="scss">
.bill-total-wrapper {
  position: relative;
  background-color: #FAFAFA;
  text-align: center;
  color: #A4A0C1;
  padding: 20px 0;
  box-shadow: inset 0px 10px 25px -15px black;
  font-weight: bold;
  cursor: pointer;

  .title, .value {
    display: inline-block;
    vertical-align: middle;
  }

  .title {
    text-transform: uppercase;
    font-size: 22px;
  }

  .value {
    font-size: 34px;
    margin-left: 10px;
  }

  .hint {
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: #A4A0C1;

    .fa {
      margin-left: 5px;
    }
  }
}
</style>
