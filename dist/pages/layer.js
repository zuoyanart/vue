define('pages/layer.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pzvueButton = require('node_modules/pzvue-button/dist/pz-button');
  
  var _pzvueButton2 = _interopRequireDefault(_pzvueButton);
  
  var _toolsToolsJs = require('tools/tools');
  
  var _toolsToolsJs2 = _interopRequireDefault(_toolsToolsJs);
  
  exports['default'] = {
      data: function data() {
          return {};
      },
      components: {
          pzbutton: _pzvueButton2['default']
      },
      methods: {
          submitHandle: function submitHandle() {
              var id = this.$layer.alert("this is demo!!!");
          },
          confirmHandle: function confirmHandle() {
              var self = this;
              var id = this.$layer.confirm("确定要删除吗？", {
                  title: "警告"
              }, function callee$1$0() {
                  var result;
                  return regeneratorRuntime.async(function callee$1$0$(context$2$0) {
                      while (1) switch (context$2$0.prev = context$2$0.next) {
                          case 0:
                              context$2$0.next = 2;
                              return regeneratorRuntime.awrap(_toolsToolsJs2['default'].httpAgent('http://192.168.1.134:3004/v1/article/1', 'get'));
  
                          case 2:
                              result = context$2$0.sent;
  
                              delete result.msg.content;
                              document.getElementById("confirm").innerText = "ajax获取到的结果：" + JSON.stringify(result);
                              self.$layer.close(id);
  
                          case 6:
                          case 'end':
                              return context$2$0.stop();
                      }
                  }, null, this);
              });
          },
          msgHandle: function msgHandle() {
              var id = this.$layer.msg("弱弱的提示");
          },
          msg1Handle: function msg1Handle() {
              var id = this.$layer.msg("2s后刷新页面", function () {
                  document.location.reload();
              });
          },
          loadingHandle: function loadingHandle() {
              var id = this.$layer.loading({
                  time: 2
              });
          },
          loading1Handle: function loading1Handle() {
              var id = this.$layer.loading(1, {
                  time: 2
              });
          },
          loading2Handle: function loading2Handle() {
              var id = this.$layer.loading(2, {
                  time: 2
              });
          },
          tipsHandle: function tipsHandle() {
              var id = this.$layer.tips("在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，", '#tips');
          },
          tips1Handle: function tips1Handle() {
              var id = this.$layer.tips("在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，", '#tips1', {
                  tips: 1
              });
          },
          tips2Handle: function tips2Handle() {
              var id = this.$layer.tips("在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，", '#tips2', {
                  tips: 2
              });
          },
          tips3Handle: function tips3Handle() {
              var id = this.$layer.tips("在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，", '#tips3', {
                  tips: [3, { "selfa": true }]
              });
          },
          pageHandle: function pageHandle() {
              var id = this.$layer.open({
                  type: 2,
                  content: 'http://www.baidu.com',
                  area: ['800px', '400px']
              });
          }
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports['default'] && (exports['default'].template = template);
  })("<div>\n    <h2>alert</h2>\n    <pzbutton @click.native=\"submitHandle\">提交</pzbutton>\n    <h2>confirm</h2>\n    <pzbutton @click.native=\"confirmHandle\">删除</pzbutton>\n    <h2>msg</h2>\n    <pzbutton @click.native=\"msgHandle\">msg</pzbutton>\n    <pzbutton @click.native=\"msg1Handle\">带回调</pzbutton>\n    <h2>loading</h2>\n    <pzbutton @click.native=\"loadingHandle\">默认样式</pzbutton>\n    <pzbutton @click.native=\"loading1Handle\">第一种样式</pzbutton>\n    <pzbutton @click.native=\"loading2Handle\">第二种样式</pzbutton>\n    <h2>tips</h2>\n    <pzbutton id=\"tips\" @click.native=\"tipsHandle\">上</pzbutton>\n    <pzbutton id=\"tips1\" @click.native=\"tips1Handle\">右</pzbutton>\n    <pzbutton id=\"tips2\" @click.native=\"tips2Handle\">下</pzbutton>\n    <pzbutton id=\"tips3\" @click.native=\"tips3Handle\">左-自定义样式</pzbutton>\n    <h2>page</h2>\n    <pzbutton id=\"tips\" @click.native=\"pageHandle\">自定义</pzbutton>\n    <pzbutton id=\"tips1\" @click.native=\"tips1Handle\">右</pzbutton>\n    <pzbutton id=\"tips2\" @click.native=\"tips2Handle\">下</pzbutton>\n    <pzbutton id=\"tips3\" @click.native=\"tips3Handle\">左-自定义样式</pzbutton>\n</div>");
  module.exports = exports['default'];
  //# sourceMappingURL=/pages/layer.js.map
  

});
