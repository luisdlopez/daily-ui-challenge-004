<template>
  <div v-tap class="tip-percentage-wrapper">
    <h2 class="title">Tip<i class="fa fa-percent" aria-hidden="true"></i></h2>
    <div class="value">{{ tipPercentage }}</div>

    <div class="hint" v-if="displayHint">
      <i class="fa fa-hand-o-left fa-1" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
const Hammer = require('hammerjs')

export default {
  name: 'tip-percentage',
  props: {
    tipPercentage: String,
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
.tip-percentage-wrapper {
  overflow: hidden;
  cursor: pointer;
  background-color: #E94546;
  height: 100%;
  font-weight: bold;
  border-right: 2px solid #E85153;
  padding-left: 15%;
  box-shadow: inset 0px 10px 25px -15px black;
  position: relative;

  .title {
    font-size: 24px;
    text-transform: uppercase;
    color: #F4A091;
    padding-top: 20px;

    .fa {
      margin-left: 5px;
      font-size: 14px;
      font-weight: normal;
    }
  }

  .value {
    color: #FFFFFF;
    font-size: 40px;
  }

  .hint {
    position: absolute;
    right: 15px;
    bottom: 70px;
    color: #F4A091;

    .fa {
      margin-left: 5px;
    }
  }
}
</style>
