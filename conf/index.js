// @flow

import path from 'path'

const dirname = path.dirname(process.mainModule.filename)

export default {
  port: 12306,
  logRoot: path.resolve(dirname, './logs')
}
