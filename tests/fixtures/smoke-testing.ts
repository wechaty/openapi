import {
  WechatyOpenApi,
  VERSION,
}                   from 'wechaty-openapi'

if (VERSION as any === '0.0.0') {
  throw new Error('version not set right before publish!')
}

const openApi = new WechatyOpenApi({
  grpcCredentials: {} as any,
  grpcHost: '',
  grpcPort: 0,
  protoFileList: [],
  protoPathList: [],
})
console.info(`WechatyOpenApi v${openApi.version()} package smoke testing passed!`)
