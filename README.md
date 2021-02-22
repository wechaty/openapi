# Wechaty Puppet OpenAPI Specification (OAS)

![Wechaty OpenAPI Specification with gRPC](docs/images/wechaty-openapi.png)

> Image credit: [Introducing gRPC HTTP API](http://james.newtonking.com/archive/2020/03/31/introducing-grpc-http-api)

## Motivation

We have [gRPC](https://github.com/wechaty/grpc) for [Wechaty Puppet](https://github.com/wechaty/wechaty-puppet), and we want a RESTful API as well, so we built [OpenAPI Specification](https://www.openapis.org/) (OAS, former [Swagger](https://swagger.io/)) on top of gRPC, with the power of [gRPC OAS Gateway](https://github.com/grpc-ecosystem/grpc-gateway).

## Known Issues

- [Upload file via auto-generated OpenAPI specification with gRPC backend #1](https://github.com/wechaty/openapi/issues/1)

## gRPC Transcoding

- [Google Cloud: Transcoding HTTP/JSON to gRPC](https://cloud.google.com/endpoints/docs/grpc/transcoding)
- [Envoy: gRPC-JSON transcoder](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/grpc_json_transcoder_filter)

## RESTful API Naming Convention

- [REST Resource Naming Guide](https://restfulapi.net/resource-naming/)
- [10+ Best Practices for Naming API Endpoints](https://nordicapis.com/10-best-practices-for-naming-api-endpoints/)
- [PUT vs. POST in REST](https://stackoverflow.com/a/2590281/1123955)
- [Google Cloud Common Design Patterns](https://cloud.google.com/apis/design/design_patterns)

## Tutorials

- Talk video: [Writing REST Services for the gRPC curious, Johan Brandhorst, 2019, GopherCon UK](https://youtu.be/Pq1paKC-fXk)
- [Take a REST with HTTP/2, Protobufs, and Swagger](https://coreos.com/blog/grpc-protobufs-swagger.html)
- [All the boilerplate you need to get started with writing grpc-gateway powered REST services in Go](https://github.com/johanbrandhorst/grpc-gateway-boilerplate)

## Resources

- [OpenAPI Specification v3.1](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.1.0.md)
- [gRPC with REST and Open APIs](https://grpc.io/blog/coreos/)

## History

### master

### v0.0.1 (Feb 22, 2021)

TODO

## Author

[Huan LI](https://github.com/huan) ([李卓桓](http://linkedin.com/in/zixia)),
Microsoft Regional Director, \<zixia@zixia.net\>

[![Profile of Huan LI (李卓桓) on StackOverflow](https://stackexchange.com/users/flair/265499.png)](https://stackexchange.com/users/265499)

## Copyright & License

- Code & Docs © 2021-now Huan LI \<zixia@zixia.net\>
- Code released under the Apache-2.0 License
- Docs released under Creative Commons
