import UsersList from './users-list'

const usersList = new UsersList()

export default socket => {
  console.log('new collection')

  socket.on('login', (data: { uid: string }) => {
    if (data.uid) {
      usersList.login(data.uid, socket)
    }
  })

  // 收到来来自客户端的消息
  socket.on('message', data => {
    console.log(typeof data)
  })

  socket.on('disconnect', _ => {
    // logout
  })
}
