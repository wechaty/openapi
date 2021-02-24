/// <reference path="./typings.d.ts" />

import { Brolog } from 'brolog'

function getLog () {
  const log = Brolog.instance()

  const logLevel = process.env.WECHATY_LOG
  if (logLevel) {
    log.level(logLevel.toLowerCase() as any)
    log.silly('WechatyOpenAPI', 'Config: WECHATY_LOG set level to %s', logLevel)
  }

  return log
}

const log = getLog()

export { log }
export { VERSION } from './version'
