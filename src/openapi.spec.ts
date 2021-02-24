#!/usr/bin/env ts-node

import { test }  from 'tstest'

import { WechatyOpenApi } from './openapi'

test('WechatyOpenApi smoke testing', async (t) => {
  const openApi = new WechatyOpenApi({
    grpcCredentials: {} as any,
    grpcHost: '',
    grpcPort: 0,
    protoFileList: [],
    protoPathList: [],
  })
  t.ok(openApi, 'should instanciate successfully')
})
