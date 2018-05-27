// @flow

import Koa from 'koa'
import Router from 'koa-router'
import serve from 'koa-static'
import views from 'koa-views'
import socket from 'socket.io'
import http from 'http'
import path from 'path'
import ioHandler from './io-handler'

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

app.use(
  // #FlowIgnoreAsset
  views(path.resolve(__dirname, '../views'), {
    map: {
      ejs: 'ejs'
    },
    extension: 'ejs'
  })
)

router.get('/react', async (context, next) => {
  await context.render('react', {
    title: 'react-chatroom'
  })
})

router.get('/vue', async (context, next) => {
  await context.render('vue', {
    title: 'vue-chatroom'
  })
})

app.use(router.routes()).use(router.allowedMethods())

io.on('connection', ioHandler)

server.listen(12306, _ => console.log('server run as http://127.0.0.1:12306'))
