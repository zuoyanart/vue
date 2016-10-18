import superagent from 'superagent';

let tools = (function() {
    let self = {};
    /**
     * http请求
     * @method httpAgent
     * @param  {[type]}  url    [description]
     * @param  {[type]}  method [description]
     * @param  {[type]}  data   [description]
     * @return {[type]}         [description]
     */
    self.httpAgent = (url, method = 'get', data = '') => {
        method = method.toLowerCase();
        if (method == "get" || method == "del") {
            return new Promise(function(resolve, reject) {
                superagent[method].call(this, url).query(data).end(function(err, res) {
                    if (err || !res.ok) {
                        reject(err || res.ok);
                    }
                    resolve(res.body);
                });
            });
        } else {
            return new Promise(function(resolve, reject) {
                superagent[method].call(this, url).send(data).end(function(err, res) {
                    if (err || !res.ok) {
                        reject(err || res.ok);
                    }
                    resolve(res.body);
                });
            });
        }
    }
    /**
     * 获取字符串长度，区分中英文
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    self.getCharLen = function(str) { //获取字符串长度，区分中英文
      return str.replace(/[^\x00-\xff]/g, "rr").length;
    }


    return self;
}());

module.exports = tools;
