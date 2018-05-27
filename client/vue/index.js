import Vue from 'vue'
import Test from './test.vue'

new Vue({
  el: '#app',
  render: function(h) {
    let str: string = 'hello'
    console.log(str)
    return <Test />
  }
})
