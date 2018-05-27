// @flow

import chatroom from '../common/chatroom-handlers'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

window.addEventListener('load', () => {
  chatroom.init()
})

// #FlowIgnoreAsset
class Test extends Component {
  render() {
    let str: string = 'hello'
    console.log(str)
    return <div>Hello React</div>
  }
}

let $app = document.querySelector('#app')
if ($app) {
  ReactDOM.render(<Test />, $app)
}
