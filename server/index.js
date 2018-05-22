const http = require('http')

http
  .createServer((req, res) => {
    res.end('1234')
  })
  .listen(12306, _ => console.log('server run as http://127.0.0.1:12306'))
