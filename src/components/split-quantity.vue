<template>
  <div v-tap class="split-quantity-wrapper">
    <h2 class="title">Split</h2>
    <div class="value">{{ numberOfPeople }}</div>
  </div>
</template>

<script>
const Hammer = require('hammerjs')

export default {
  name: 'split-quantity',
  props: {
    numberOfPeople: String
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
.split-quantity-wrapper {
  cursor: pointer;
  background-color: #E94546;
  height: 100%;
  font-weight: bold;
  border-right: 2px solid #E85153;
  padding-left: 20%;
  box-shadow: inset 0px 10px 25px -15px black;

  .title {
    font-size: 24px;
    text-transform: uppercase;
    color: #F4A091;
    padding-top: 20px;
  }

  .value {
    color: #FFFFFF;
    font-size: 40px;
  }
}
</style>
