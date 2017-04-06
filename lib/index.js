var LocalHttpUtil = require('./HttpUtil');
var _ = require("underscore")._;
var ApisProxy = {};

class ProxyClass {
    constructor(client) {
        this.client = client || {};//命名空间
    }

    getData(param, cb) {
        var client = this.client;
        if (_.isEmpty(client.url) || _.isEmpty(client.method)) {
            cb('没有该方法！');
        } else {
            LocalHttpUtil[client.method](client.url, param, function (err, res, data) {
                cb(err, data);
            })
        }
    }
}

ApisProxy.init = function (apis) {
    ApisProxy.apis = apis;
    var proxy = {};
    for (k in apis) {
        proxy[k] = new ProxyClass(apis[k]);
    }
    ApisProxy.proxy = proxy
};


module.exports = ApisProxy;