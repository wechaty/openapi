import {
  OpenApi,
  VERSION,
}             from 'wechaty-openapi'

if (VERSION as any === '0.0.0') {
  throw new Error('version not set right before publish!')
}

const openApi = new OpenApi()
console.log(`OpenApi v${openApi.version()} smoke testing passed!`)
