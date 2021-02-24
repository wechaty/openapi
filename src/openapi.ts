import express      from 'express'
import grpc         from 'grpc'
import grpcGateway  from 'grpc-dynamic-gateway'

import { log } from './config'

interface WechatyOpenApiOptions {
  grpcCredentials  : grpc.ChannelCredentials,
  grpcHost         : string,
  grpcPort         : number,
  protoFileList    : string[],
  protoPathList    : string[],
}

/**
 * Express Routing: https://expressjs.com/en/guide/routing.html
 */
class WechatyOpenApi {

  static VERSION = '0.0.0'

  constructor (
    private options: WechatyOpenApiOptions,
  ) {
    log.verbose('WechatyOpenApi', 'constructor(%s)', JSON.stringify(options))
  }

  version (): string {
    return '0.0.0'
  }

  router (): express.Router {
    log.verbose('WechatyOpenApi', 'router()')

    const debug = ['verbose', 'silly', 'info'].includes(log.level())
    const options = this.options

    const middleware = grpcGateway(
      options.protoFileList,
      `${options.grpcHost}:${options.grpcPort}`,
      options.grpcCredentials,
      debug,
      options.protoPathList,
    )

    return middleware
  }

}

export { WechatyOpenApi }
