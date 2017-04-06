var ApisProxy = require('../lib');
var apis = require('./apis');

ApisProxy.init(apis);//初始化对象 必须是string类型 有http

var proxy = ApisProxy.proxy;
ApisProxy.proxy.crypto.getData({name: 'admin', pwd: '1234123'}, function (err, data) {
    console.log(data)
})
