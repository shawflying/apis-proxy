# apis-proxy

## 安装
```
npm install --save apis-proxy
```

## 使用

```
var ApisProxy = require('apis-proxy');
```

## 初始化
apis.js

```
var apis = {
    crypto: {
        method: 'get',
        url: 'http://m.sh.189.cn/service/node/crypto?data=oKXUCj1MOddnp-sCpGi1J1dg3TyM,abc&key=wechat-mobile-201604&type=0',
        params: {}
    }
};
module.exports = apis;
```



```
var apis = require('./apis');
ApisProxy.init(apis)

```

## 调用

```
ApisProxy.proxy.crypto.getData(params,function(err,data){
    
});
```