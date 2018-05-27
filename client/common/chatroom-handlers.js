export default {
  init
}

export function init() {
  let socket = io.connect('http://127.0.0.1:12306')
  socket.on('message', _ => {
    console.log(_)
  })

  socket.emit('message', { a: 123 })
}
