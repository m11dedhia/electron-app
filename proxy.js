const proxy = require('http-mitm-proxy');
const myProxy = proxy();

myProxy.onRequest((ctx, callback) => {
  console.log(ctx.clientToProxyRequest);
  return callback();
});

myProxy.listen({ port: 8080 });
