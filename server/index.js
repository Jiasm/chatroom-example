// @flow

const http = require('http')

const str: string = 'hello world.'

function upperCase(str: string): string {
  return str.toUpperCase()
}

http
  .createServer((req, res) => {
    res.end(upperCase(str))
  })
  .listen(12306, _ => console.log('server run as http://127.0.0.1:12306'))
