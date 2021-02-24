#!/usr/bin/env node

// import grpcGateway = require('grpc-dynamic-gateway')
// const express = require('express')
// const bodyParser = require('body-parser')

// const app = express()
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// // load the proxy on / URL
// app.use('/', grpcGateway(['api.proto'], '0.0.0.0:5051'))

// const port = process.env.PORT || 8080
// app.listen(port, () => {
//   console.log(`Listening on http://0.0.0.0:${port}`)
// })

import fs from 'fs'

import bodyParser from 'body-parser'
import express from 'express'
import grpc from 'grpc'
import yargs from 'yargs'

import { WechatyOpenApi } from '../src/mod'

const argv = yargs.usage('Usage: $0 [options] DEFINITION.proto [DEFINITION2.proto...]')
  .help('?')
  .alias('?', 'help')
  .alias('?', 'h')

  .default('port', process.env.PORT || 8080)
  .describe('port', 'The port to serve your JSON proxy on')
  .alias('port', 'p')

  .describe('grpchost', 'The hostto connect to, where your gprc-server is running')
  .alias('grpchost', 'H')

  .describe('grpcport', 'The port to connect to, where your gprc-server is running')
  .alias('grpcport', 'P')

  .describe('I', 'Path to resolve imports from')
  .alias('I', 'include')

  .default('ca', '')
  .describe('ca', 'SSL CA cert for gRPC')
  .default('key', '')
  .describe('key', 'SSL client key for gRPC')
  .default('cert', '')
  .describe('cert', 'SSL client certificate for gRPC')

  .default('mountpoint', '/')
  .describe('mountpoint', 'URL to mount server on')
  .alias('mountpoint', 'm')

  .boolean('quiet')
  .describe('quiet', 'Suppress logs')
  .alias('quiet', 'q')

  .argv

function main () {
  const protoFileList = argv._ as string[]

  if (!protoFileList.length) {
    yargs.showHelp()
    process.exit(1)
  }

  const protoPathList = argv.include as string[]

  const grpcHost = argv.grpchost as string ?? process.env.GRPC_HOST ?? 'localhost'
  const grpcPort = argv.grpcport
    ? parseInt(argv.grpcport as string)
    : process.env.GRPC_PORT
      ? parseInt(process.env.GRPC_PORT)
      : 50051

  let grpcCredentials
  if (argv.ca || argv.key || argv.cert) {
    if (!(argv.ca && argv.key && argv.cert)) {
      console.error('SSL requires --ca, --key, & --cert\n')
      yargs.showHelp()
      process.exit(1)
    }
    grpcCredentials = grpc.credentials.createSsl(
      fs.readFileSync(argv.ca),
      fs.readFileSync(argv.key),
      fs.readFileSync(argv.cert)
    )
  } else {
    grpcCredentials = grpc.credentials.createInsecure()
  }

  const openApi = new WechatyOpenApi({
    grpcCredentials,
    grpcHost,
    grpcPort,
    protoFileList,
    protoPathList,

  })

  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(argv.mountpoint, openApi.router())

  app.listen(argv.port, () => {
    if (!argv.quiet) {
      console.info(`Listening on http://localhost:${argv.port}${argv.mountpoint}, proxying to gRPC on ${grpcHost}:${grpcPort}`)
    }
  })
}

main()
