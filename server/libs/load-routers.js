// @flow

'use strict'

import path from 'path'
import compose from 'koa-compose'
import fs from 'fs'
import conf from '../../conf'
import Router from 'koa-router'
import winston from 'winston'
import mkdirp from 'mkdirp'
import 'winston-daily-rotate-file'
import * as apps from '../conf/route-map'
const dirname = path.dirname(process.mainModule.filename)

// fix: auto generate log folder
const { logRoot } = conf
if (!fs.existsSync(logRoot)) {
  mkdirp.sync(logRoot)
}
let routers = []

export default (name: string = 'routes') => {
  let dirname = path.dirname(process.mainModule.filename)
  let appPath = path.join(dirname, name)
  if (fs.existsSync(appPath)) {
    let dirs = fs.readdirSync(appPath)
    dirs.map(function(value) {
      value = value.replace(/(\.js|\.json)$/, '')

      let logger = {}

      let accessLog = new winston.Logger({
        transports: [
          new winston.transports.DailyRotateFile({
            filename: path.resolve(logRoot, `./${value}.access.log`),
            datePattern: `yyyy-MM-dd.`,
            prepend: true,
            level: 'info'
          })
        ]
      })
      let errorLog = new winston.Logger({
        transports: [
          new winston.transports.DailyRotateFile({
            filename: path.resolve(logRoot, `./${value}.error.log`),
            datePattern: `yyyy-MM-dd.`,
            prepend: true,
            level: 'error'
          })
        ]
      })

      logger.access = (self: any, data): void => {
        // console.log('=>>', self)
        let obj = {
          href: self.request.href,
          header: JSON.stringify(self.request.header),
          ip: self.request.ip
        }

        accessLog.info(Object.assign({}, obj, data))
      }

      logger.error = (self: any, error: Error, data): void => {
        let obj = {
          href: self.request.href,
          header: JSON.stringify(self.request.header),
          ip: self.request.ip,
          err_msg: error.message,
          err_name: error.name,
          err_stack: error.stack
        }

        errorLog.error(Object.assign({}, obj, data))
      }

      let router = new Router({
        prefix: '/' + (value === 'index' ? '' : value)
      })

      if (value.indexOf('.') !== 0) {
        // apps[value] = path.resolve(dirname, name, value)

        // #FlowIgnoreAsset
        let route = apps[value]
        if (typeof route === 'function') {
          route(router, conf, logger)
        }
      }
      routers.push(router.routes())
    })

    return compose(routers)
  } else {
    return async (context: any, next: Function) => await next()
  }
}
