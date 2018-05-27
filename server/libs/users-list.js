export default class UsersList {
  list: { [string]: any }
  constructor(): void {
    this.list = {}
  }
  login(uid: string, socket: any): void {
    let { list } = this
    if (uid in list) {
      // 通知之前的设备进行下线操作
      list[uid].emit('kicked')
    }

    list[uid] = socket
  }
}
