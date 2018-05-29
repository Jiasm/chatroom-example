'use strict'

const path = require('path')
const compose = require('koa-compose')
const fs = require('fs')
const conf = require('../conf/global.js')
const Router = require('koa-router')
const winston = require('winston')
const mkdirp = require('mkdirp')
require('winston-daily-rotate-file')
const dirname = path.dirname(process.mainModule.filename)

// fix: auto generate log folder
const logRoot = path.resolve(dirname, './logs')
if (!fs.existsSync(logRoot)) {
  mkdirp.sync(logRoot)
}
let routers = []

function files() {
  let name = 'routes'
  let dirname = path.dirname(process.mainModule.filename)
  let appPath = path.join(dirname, name)
  if (fs.existsSync(appPath)) {
    let dirs = fs.readdirSync(appPath)
    let apps = {}
    dirs.map(function(value) {
      value = value.replace(/(\.js|\.json)$/, '')

      let logger = {
        access() {},
        error() {}
      }

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

      logger.access = (self, data) => {
        // console.log('=>>', self)
        let obj = {
          href: self.request.href,
          header: JSON.stringify(self.request.header),
          ip: self.request.ip
        }

        accessLog.info(Object.assign({}, obj, data))
      }

      logger.error = (self, error, data) => {
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
        apps[value] = path.join(dirname, name, value)
        let route = require(apps[value])
        if (typeof route === 'function') {
          route(router, conf, logger)
        }
      }
      routers.push(router.routes())
    })

    return compose(routers)
  } else {
    return []
  }
}

module.exports = files
