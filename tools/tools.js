define('tools/tools', function(require, exports, module) {

  'use strict';
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _superagent = require('node_modules/superagent/lib/client');
  
  var _superagent2 = _interopRequireDefault(_superagent);
  
  var tools = (function () {
      var self = {};
      /**
       * http请求
       * @method httpAgent
       * @param  {[type]}  url    [description]
       * @param  {[type]}  method [description]
       * @param  {[type]}  data   [description]
       * @return {[type]}         [description]
       */
      self.httpAgent = function (url) {
          var method = arguments.length <= 1 || arguments[1] === undefined ? 'get' : arguments[1];
          var data = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
  
          method = method.toLowerCase();
          if (method == "get" || method == "del") {
              return new Promise(function (resolve, reject) {
                  _superagent2['default'][method].call(this, url).query(data).end(function (err, res) {
                      if (err || !res.ok) {
                          reject(err || res.ok);
                      }
                      resolve(res.body);
                  });
              });
          } else {
              return new Promise(function (resolve, reject) {
                  _superagent2['default'][method].call(this, url).send(data).end(function (err, res) {
                      if (err || !res.ok) {
                          reject(err || res.ok);
                      }
                      resolve(res.body);
                  });
              });
          }
      };
      /**
       * 获取字符串长度，区分中英文
       * @param  {[type]} str [description]
       * @return {[type]}     [description]
       */
      self.getCharLen = function (str) {
          //获取字符串长度，区分中英文
          return str.replace(/[^\x00-\xff]/g, "rr").length;
      };
  
      return self;
  })();
  
  module.exports = tools;
  //# sourceMappingURL=/tools/tools.js.map
  

});
