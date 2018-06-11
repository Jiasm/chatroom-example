// @flow

import path from 'path'

const dirname = path.dirname(process.mainModule.filename)

export default {
  port: 12306,
  mysql: {
    host: '127.0.0.1',
    user: 'root',
    password: 'jarvis',
    database: 'chatroom_example'
  },
  logRoot: path.resolve(dirname, './logs')
}
