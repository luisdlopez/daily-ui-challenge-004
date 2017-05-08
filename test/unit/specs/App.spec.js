import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  describe('on mount', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()

    it('should check all default values on load', done => {
      expect(vm.billTotal).to.equal('0')
      expect(vm.tipPercentage).to.equal('0')
      expect(vm.numberOfPeople).to.equal('0')
      expect(vm.selectedInput).to.equal('')

      done()
    })

    it('should display default values on load', done => {
      let perPersonTotal = vm.$el.querySelector('.per-person-total-wrapper .value').textContent
      let billTotal = vm.$el.querySelector('.bill-total-wrapper .value').textContent
      let tipPercentage = vm.$el.querySelector('.tip-percentage-wrapper .value').textContent
      let splitQuantity = vm.$el.querySelector('.split-quantity-wrapper .value').textContent

      expect(perPersonTotal).to.equal('0.00')
      expect(billTotal).to.equal('0')
      expect(tipPercentage).to.equal('0')
      expect(splitQuantity).to.equal('0')

      done()
    })
  })

  describe('clear', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()

    it('should reset all values when clear() is called', done => {
      vm.billTotal = '100'
      vm.tipPercentage = '10'
      vm.numberOfPeople = '2'
      vm.selectedInput = 'tipPercentage'

      vm.clear()

      expect(vm.billTotal).to.equal('0')
      expect(vm.tipPercentage).to.equal('0')
      expect(vm.numberOfPeople).to.equal('0')
      expect(vm.selectedInput).to.equal('billTotal')

      done()
    })
  })
})
