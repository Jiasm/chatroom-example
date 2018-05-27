import UsersList from './users-list'

const usersList = new UsersList()

export default (socket: socket.Socket) => {
  console.log('new collection')
  usersList.login('1', socket)
  socket.emit('message', { hello: 'world' })

  socket.on('login', data => {
    console.log(typeof data)
  })

  // 收到来来自客户端的消息
  socket.on('message', data => {
    console.log(typeof data)
  })

  socket.on('disconnect', _ => {
    // logout
  })
}
