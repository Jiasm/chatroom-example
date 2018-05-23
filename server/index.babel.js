// @flow

const Koa = require('koa')
const socket = require('socket.io')
const http = require('http')
const app = new Koa()
const server = (http.Server: Function)(app.callback())

const io = socket(server)

const str: string = '向Markdown工程师致敬.'

function upperCase(str: string): string {
  return str.toUpperCase()
}

app.use(async (context, next) => {
  context.body = upperCase(str)
})

io.on('connection', socket => {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', data => {
    console.log(data)
  })
})

server.listen(12306, _ => console.log('server run as http://127.0.0.1:12306'))
