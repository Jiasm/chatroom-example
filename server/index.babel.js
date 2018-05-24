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
  context.body = `
    <html>
      <body>
        Hello
      </body>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.min.js"></script>
      <script>
        window.addEventListener('load', () => {
          let socket = io.connect('http://127.0.0.1:12306')

          socket.on('message', _ => {
            console.log(_)
          })
        })
      </script>
    </html>
  `
})

io.on('connection', socket => {
  console.log('new collection')
  socket.emit('message', { hello: 'world' })
  socket.on('my other event', data => {
    console.log(data)
  })
})

server.listen(12306, _ => console.log('server run as http://127.0.0.1:12306'))
