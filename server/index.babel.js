// @flow

const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const views = require('koa-views')
const socket = require('socket.io')
const http = require('http')
const path = require('path')
const app = new Koa()
const router = new Router()
const server = (http.Server: Function)(app.callback())

const io = socket(server)

const str: string = '向Markdown工程师致敬.'

function upperCase(str: string): string {
  return str.toUpperCase()
}

// #FlowIgnoreAsset
app.use(serve(path.resolve(__dirname, '../dist')))
console.log(path.resolve(__dirname, '../dist'))

app.use(
  // #FlowIgnoreAsset
  views(path.resolve(__dirname, '../views'), {
    map: {
      ejs: 'ejs'
    },
    extension: 'ejs'
  })
)

router.get('/', async (context, next) => {
  await context.render('index.react', {
    title: 'hello'
  })
})

app.use(router.routes()).use(router.allowedMethods())

io.on('connection', socket => {
  console.log('new collection')
  socket.emit('message', { hello: 'world' })
  socket.on('my other event', data => {
    console.log(data)
  })
})

server.listen(12306, _ => console.log('server run as http://127.0.0.1:12306'))

//
