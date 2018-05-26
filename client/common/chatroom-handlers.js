let socket = io.connect('http://127.0.0.1:12306')
socket.on('message', _ => {
  console.log(_)
})
