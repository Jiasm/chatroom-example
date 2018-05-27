module.exports = socket => {
  console.log('new collection')
  socket.emit('message', { hello: 'world' })
  socket.on('my other event', data => {
    console.log(data)
  })
  socket.on('disconnect', _ => {
    // logout
  })
}
