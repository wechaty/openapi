/**
 * Typings for un-typed modle
 */
declare module 'grpc-dynamic-gateway' {
  import express from 'express'
  import grpc from 'grpc'

  function grpcGateway (
    protoFileList : string[],
    grpcEndpoint  : string,
    credentials   : grpc.ChannelCredentials,
    debug         : boolean,
    include       : string | string[],
  ): express.Router

  export default grpcGateway
}
