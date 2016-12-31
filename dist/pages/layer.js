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
  })("<div>\n    <h2>alert</h2>\n    <pzbutton @click.native=\"submitHandle\">提交</pzbutton>\n    <h2>confirm</h2>\n    <pzbutton @click.native=\"confirmHandle\">删除</pzbutton>\n    <h2>msg</h2>\n    <pzbutton @click.native=\"msgHandle\">msg</pzbutton>\n    <pzbutton @click.native=\"msg1Handle\">带回调</pzbutton>\n    <h2>loading</h2>\n    <pzbutton @click.native=\"loadingHandle\">默认样式</pzbutton>\n    <pzbutton @click.native=\"loading1Handle\">第一种样式</pzbutton>\n    <pzbutton @click.native=\"loading2Handle\">第二种样式</pzbutton>\n    <h2>tips</h2>\n    <pzbutton id=\"tips\" @click.native=\"tipsHandle\">上</pzbutton>\n    <pzbutton id=\"tips1\" @click.native=\"tips1Handle\">右</pzbutton>\n    <pzbutton id=\"tips2\" @click.native=\"tips2Handle\">下</pzbutton>\n    <pzbutton id=\"tips3\" @click.native=\"tips3Handle\">左-自定义样式</pzbutton>\n    <h2>page</h2>\n    <pzbutton id=\"tips\" @click.native=\"pageHandle\">自定义</pzbutton>\n    <pzbutton id=\"tips1\" @click.native=\"tips1Handle\">右</pzbutton>\n    <pzbutton id=\"tips2\" @click.native=\"tips2Handle\">下</pzbutton>\n    <pzbutton id=\"tips3\" @click.native=\"tips3Handle\">左-自定义样式</pzbutton>\n    <div class=\"markdown\">\n      <h2 id=\"install\">install</h2>\n<pre><code class=\"hljs shell\">npm <span class=\"hljs-keyword\">install</span> vue-layer\n</code></pre>\n<h2 id=\"quick%20start\">Quick Start</h2>\n<h2 id=\"with%20%3Ccode%3Emain.js%3C%2Fcode%3E%20or%20%3Ccode%3Eindex.js%3C%2Fcode%3E%20add%3A\">with <code>main.js</code> or <code>index.js</code> add:</h2>\n<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">import</span> layer <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'vue-layer'</span>\nVue.prototype.$layer = layer;\n</code></pre>\n<p>in component</p>\n<pre><code class=\"hljs js\"><span class=\"hljs-keyword\">this</span>.$layer.alert(<span class=\"hljs-string\">\"找不到对象！\"</span>);\n</code></pre>\n<h2 id=\"attribut\">Attribut</h2>\n<pre><code class=\"hljs js\">{\n  type: <span class=\"hljs-number\">0</span>, <span class=\"hljs-comment\">//0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）</span>\n  title: <span class=\"hljs-string\">'信息'</span>,\n  content: <span class=\"hljs-string\">''</span>,\n  area: <span class=\"hljs-string\">'auto'</span>,\n  offset: <span class=\"hljs-string\">'auto'</span>,\n  icon: -<span class=\"hljs-number\">1</span>,\n  btn: <span class=\"hljs-string\">'确定'</span>,\n  time: <span class=\"hljs-number\">0</span>,\n  shade: <span class=\"hljs-literal\">true</span>,\n  yes: <span class=\"hljs-string\">''</span>,\n  cancel: <span class=\"hljs-string\">''</span>,\n  tips: [<span class=\"hljs-number\">0</span>,{}],<span class=\"hljs-comment\">//支持上右下左四个方向，通过1-4进行方向设定,可以设定tips: [1, '#c00']</span>\n  tipsMore: <span class=\"hljs-literal\">false</span>,<span class=\"hljs-comment\">//是否允许多个tips</span>\n  shadeClose: <span class=\"hljs-literal\">false</span>,\n}\n</code></pre>\n<h2 id=\"method\">Method</h2>\n<pre><code class=\"hljs js\"> layer.alert(contetn, options, yes);\n</code></pre>\n<pre><code class=\"hljs js\"> layer.confirm(content, options, yes, cancel)\n</code></pre>\n<pre><code class=\"hljs js\"> layer.msg(contetn, options, end);\n</code></pre>\n<pre><code class=\"hljs js\">layer.tips(content, follow, options);\n</code></pre>\n<pre><code class=\"hljs js\">layer.open(options);\n</code></pre>\n<pre><code class=\"hljs js\">layer.close(id);\n</code></pre>\n<pre><code class=\"hljs js\">layer.closeAll(type);<span class=\"hljs-comment\">//alert, page,iframe,loading,tips,msg</span>\n</code></pre>\n\n    </div>\n</div>");
  module.exports = exports['default'];
  //# sourceMappingURL=/pages/layer.js.map
  

});
