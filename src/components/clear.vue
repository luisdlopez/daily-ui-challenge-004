<template>
  <div class="clear-wrapper" v-tap>
    C
  </div>
</template>

<script>
const Hammer = require('hammerjs')

export default {
  name: 'clear',
  methods: {
    clear: function () {
      this.$emit('clear')
    }
  },
  directives: {
    tap: {
      bind: (element, binding, node) => {
        let hammertime = new Hammer(element)
        hammertime.on('tap', (event) => {
          node.context.$emit('clear')
        })
      }
    }
  }
}
</script>

<style lang="scss">
.clear-wrapper {
  background-color: #8E394A;
  text-align: center;
  height: 100%;
  font-size: 60px;
  font-weight: bold;
  box-shadow: inset 0px 10px 25px -15px black;
  cursor: pointer;
  color: #E69FAE;
  line-height: 105px;

  &:active {
    background-color: #c56d7f;
  }
}
</style>
