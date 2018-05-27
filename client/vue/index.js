import Vue from 'vue'
import Test from './test.vue'

console.log('render')

new Vue({
  el: '#app',
  render: function(h) {
    return <Test />
  }
})
