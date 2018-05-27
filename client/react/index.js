import chatroom from '../common/chatroom-handlers'
import React from 'react'
import ReactDOM from 'react-dom'

window.addEventListener('load', () => {
  chatroom.init()
})

class Test extends React.Component {
  render() {
    return <div>Hello React</div>
  }
}

ReactDOM.render(<Test />, document.querySelector('#app'))
