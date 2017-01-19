define('pages/input.vue', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _pzvueInput = require('node_modules/pzvue-input/dist/pz-input');
  
  var _pzvueInput2 = _interopRequireDefault(_pzvueInput);
  
  exports["default"] = {
    data: function data() {
      return {};
    },
    components: {
      pzinput: _pzvueInput2["default"]
    },
    methods: {}
  };
  
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports["default"] && (exports["default"].template = template);
  })("<div>\n  <h2>普通</h2>\n  <pzinput placeholder=\"normal\"></pzinput>\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzinput</span> <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"normal\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzinput</span>&gt;</span>\n</code></pre>\n\n  </div>\n  <h2>前置</h2>\n  <pzinput placeholder=\"@163.com\" type=\"email\" id=\"input4\" value=\"\">\n    <template slot=\"prepend\">email</template>\n  </pzinput>\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzinput</span> <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"@163.com\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"email\"</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"input4\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"prepend\"</span>&gt;</span>email<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzinput</span>&gt;</span>\n</code></pre>\n\n  </div>\n  <h2>前后置</h2>\n  <pzinput placeholder=\"请输入网址\" type=\"email\" id=\"input5\" value=\"\">\n    <template slot=\"prepend\">http://</template>\n    <template slot=\"append\">.com</template>\n  </pzinput>\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzinput</span> <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"请输入网址\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"email\"</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"input5\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"prepend\"</span>&gt;</span>http://<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">template</span> <span class=\"hljs-attribute\">slot</span>=<span class=\"hljs-value\">\"append\"</span>&gt;</span>.com<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzinput</span>&gt;</span>\n</code></pre>\n\n  </div>\n  <h2>后置</h2>\n  <pzinput placeholder=\"请输入网址\" type=\"email\" id=\"input5\" value=\"\" icon=\"user-md\"></pzinput>\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzinput</span> <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"请输入网址\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"email\"</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"input5\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"\"</span> <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"user-md\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzinput</span>&gt;</span>\n</code></pre>\n\n  </div>\n  <h2>不可用</h2>\n  <pzinput placeholder=\"请输入网址\" type=\"email\" id=\"input5\" value=\"不可用\" icon=\"user-md\" :disabled=\"true\"></pzinput>\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzinput</span> <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"请输入网址\"</span> <span class=\"hljs-attribute\">type</span>=<span class=\"hljs-value\">\"email\"</span> <span class=\"hljs-attribute\">id</span>=<span class=\"hljs-value\">\"input5\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"不可用\"</span> <span class=\"hljs-attribute\">icon</span>=<span class=\"hljs-value\">\"user-md\"</span> <span class=\"hljs-attribute\">:disabled</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzinput</span>&gt;</span>\n</code></pre>\n\n  </div>\n  <div class=\"markdown\">\n    <h2 id=\"install\">install</h2>\n<pre><code class=\"hljs javascript\">npm install pzvue-input\n</code></pre>\n<h2 id=\"attribute\">Attribute</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>input原生的id</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>占位字符</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td>input的value值</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>input的类型</td>\n<td>string</td>\n<td>text,email,number</td>\n<td>text</td>\n</tr>\n<tr>\n<td>size</td>\n<td>input的大小</td>\n<td>string</td>\n<td>larget</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否可用</td>\n<td>bool</td>\n<td>true, false</td>\n<td>false</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标的class</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n\n  </div>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/pages/input.js.map
  

});
