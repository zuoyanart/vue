define('pages/button.vue', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _pzvueButton = require('node_modules/pzvue-button/dist/pz-button');
  
  var _pzvueButton2 = _interopRequireDefault(_pzvueButton);
  
  exports["default"] = {
      data: function data() {
          return {};
      },
      components: {
          pzbutton: _pzvueButton2["default"]
      },
      methods: {}
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports["default"] && (exports["default"].template = template);
  })("<div>\n  <h2>普通样式</h2>\n  <pzbutton>默认</pzbutton>\n  <pzbutton btn=\"success\">成功</pzbutton>\n  <pzbutton btn=\"info\">一般信息</pzbutton>\n  <pzbutton btn=\"warning\">警告</pzbutton>\n  <pzbutton btn=\"danger\">危险</pzbutton>\n  <pzbutton btn=\"danger\" :disabled=\"true\">禁用</pzbutton>\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">btn</span>=<span class=\"hljs-value\">\"success\"</span>&gt;</span>成功<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">btn</span>=<span class=\"hljs-value\">\"info\"</span>&gt;</span>一般信息<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">btn</span>=<span class=\"hljs-value\">\"warning\"</span>&gt;</span>警告<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">btn</span>=<span class=\"hljs-value\">\"danger\"</span>&gt;</span>危险<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">btn</span>=<span class=\"hljs-value\">\"danger\"</span> <span class=\"hljs-attribute\">:disabled</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>禁用<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n</code></pre>\n\n  </div>\n  <h2>图标样式</h2>\n  <pzbutton icon=\"user-md\">默认</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"success\">成功</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"info\">一般信息</pzbutton>\n  <pzbutton btn=\"danger\" :loading=\"true\">危险</pzbutton>\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"user-md\"</span>&gt;</span>默认<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"user-md\"</span> <span class=\"hljs-attribute\">btn</span>=<span class=\"hljs-value\">\"success\"</span>&gt;</span>成功<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"user-md\"</span> <span class=\"hljs-attribute\">btn</span>=<span class=\"hljs-value\">\"info\"</span>&gt;</span>一般信息<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">btn</span>=<span class=\"hljs-value\">\"danger\"</span> <span class=\"hljs-attribute\">:loading</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>危险<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n</code></pre>\n\n  </div>\n  <h2>块级样式</h2>\n  <pzbutton icon=\"user-md\" size=\"block\">默认</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"success\" size=\"block\">成功</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"info\" size=\"block\">一般信息</pzbutton>\n  <pzbutton btn=\"danger\" :loading=\"true\" size=\"block\">危险</pzbutton>\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"user-md\"</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"block\"</span>&gt;</span>默认<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"user-md\"</span> <span class=\"hljs-attribute\">btn</span>=<span class=\"hljs-value\">\"success\"</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"block\"</span>&gt;</span>成功<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"user-md\"</span> <span class=\"hljs-attribute\">btn</span>=<span class=\"hljs-value\">\"info\"</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"block\"</span>&gt;</span>一般信息<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> <span class=\"hljs-attribute\">btn</span>=<span class=\"hljs-value\">\"danger\"</span> <span class=\"hljs-attribute\">:loading</span>=<span class=\"hljs-value\">\"true\"</span> <span class=\"hljs-attribute\">size</span>=<span class=\"hljs-value\">\"block\"</span>&gt;</span>危险<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n</code></pre>\n\n  </div>\n  <h2>属性</h2>\n  <div class=\"markdown\">\n    <h2 id=\"install\">install</h2>\n<pre><code class=\"hljs javascript\">npm install pzvue-checkbox\n</code></pre>\n<h2 id=\"attribute\">Attribute</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>btn</td>\n<td>按钮的class</td>\n<td>string</td>\n<td>primary,success,info,warning,danger</td>\n<td>primary</td>\n</tr>\n<tr>\n<td>size</td>\n<td>按钮的尺寸</td>\n<td>string</td>\n<td>block</td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>按钮的类型</td>\n<td>string</td>\n<td>button，reset,submit</td>\n<td>button</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>是否显示loading</td>\n<td>bool</td>\n<td>true, false</td>\n<td>false</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否可用</td>\n<td>bool</td>\n<td>true, false</td>\n<td>false</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标的class</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n\n  </div>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/pages/button.js.map
  

});