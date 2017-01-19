define('pages/checkbox.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pzvueButton = require('node_modules/pzvue-button/dist/pz-button');
  
  var _pzvueButton2 = _interopRequireDefault(_pzvueButton);
  
  var _pzvueCheckbox = require('node_modules/pzvue-checkbox/dist/pz-checkbox');
  
  var _pzvueCheckbox2 = _interopRequireDefault(_pzvueCheckbox);
  
  var _pzvueCheckboxGroup = require('node_modules/pzvue-checkbox-group/dist/pz-checkbox-group');
  
  var _pzvueCheckboxGroup2 = _interopRequireDefault(_pzvueCheckboxGroup);
  
  exports['default'] = {
    data: function data() {
      return {
        checked: true,
        checks: []
      };
    },
    components: {
      pzbutton: _pzvueButton2['default'],
      pzcheckbox: _pzvueCheckbox2['default'],
      pzcheckboxgroup: _pzvueCheckboxGroup2['default']
    },
    methods: {
      change: function change(value, ischecked) {
        console.log("值=" + value);
        console.log("是否选中=" + ischecked);
      },
      change1: function change1(value, ischecked) {
        console.log("值=" + value);
        console.log("是否选中=" + ischecked);
      },
      changeChecked: function changeChecked() {
        this.checked = !this.checked;
      }
    }
  };
  
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports['default'] && (exports['default'].template = template);
  })("<div>\n  <h2>复选</h2>\n  <pzcheckbox value=\"1\" :checked=\"true\">香蕉</pzcheckbox>\n  <pzcheckbox value=\"2\">苹果</pzcheckbox>\n  <pzcheckbox value=\"3\">橙子</pzcheckbox>\n  <pzcheckbox value=\"4\" :disabled=\"true\">柚子</pzcheckbox>\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzcheckbox</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"1\"</span> <span class=\"hljs-attribute\">:checked</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>香蕉<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzcheckbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzcheckbox</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>苹果<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzcheckbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzcheckbox</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"3\"</span>&gt;</span>橙子<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzcheckbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzcheckbox</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"4\"</span> <span class=\"hljs-attribute\">:disabled</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>柚子<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzcheckbox</span>&gt;</span>\n</code></pre>\n\n  </div>\n  <h2>change事件</h2>\n  <pzcheckbox value=\"字符串值\" :change=\"change\">change事件</pzcheckbox>，打开控制台看输出\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\">  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzcheckbox</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"c1\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"字符串值\"</span> <span class=\"hljs-attribute\">:change</span>=<span class=\"hljs-value\">\"change\"</span>&gt;</span>change事件<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzcheckbox</span>&gt;</span>，打开控制台看输出\n</code></pre>\n<pre><code class=\"hljs js\">methods:{\n  change: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">value, ischecked</span>) </span>{\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">\"值=\"</span> +value);\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">\"是否选中=\"</span> + ischecked);\n  },\n}\n</code></pre>\n\n  </div>\n  <h2>切换状态</h2>\n  <pzcheckbox value=\"5\" :checked=\"checked\" :change=\"change1\">切换选中状态</pzcheckbox><pzbutton @click.native=\"changeChecked\">切换选中状态</pzbutton>\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzcheckbox</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"5\"</span> <span class=\"hljs-attribute\">:checked</span>=<span class=\"hljs-value\">\"checked\"</span> <span class=\"hljs-attribute\">:change</span>=<span class=\"hljs-value\">\"change1\"</span>&gt;</span>切换选中状态<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzcheckbox</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzbutton</span> @<span class=\"hljs-attribute\">click.native</span>=<span class=\"hljs-value\">\"changeChecked\"</span>&gt;</span>切换选中状态<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzbutton</span>&gt;</span>\n</code></pre>\n<pre><code class=\"hljs javascript\">methods:{\n  change1: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">value, ischecked</span>) </span>{\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">\"值=\"</span> +value);\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">\"是否选中=\"</span> + ischecked);\n  },\n  changeChecked: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-keyword\">this</span>.checked = !<span class=\"hljs-keyword\">this</span>.checked;\n  },\n}\n</code></pre>\n\n  </div>\n  <h2>复选框组</h2>\n  <pzcheckboxgroup v-model=\"checks\">\n    <pzcheckbox value=\"1\">香蕉</pzcheckbox>\n    <pzcheckbox value=\"2\">苹果</pzcheckbox>\n    <pzcheckbox value=\"3\">橙子</pzcheckbox>\n    <pzcheckbox value=\"4\">柚子</pzcheckbox>\n  </pzcheckboxgroup>\n  选择的值：{{checks}}\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzcheckboxgroup</span> <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"checks\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzcheckbox</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"1\"</span>&gt;</span>香蕉<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzcheckbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzcheckbox</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>苹果<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzcheckbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzcheckbox</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"3\"</span>&gt;</span>橙子<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzcheckbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzcheckbox</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"4\"</span>&gt;</span>柚子<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzcheckbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzcheckboxgroup</span>&gt;</span>\n</code></pre>\n\n  </div>\n  <div class=\"markdown\">\n    <h2 id=\"install\">install</h2>\n<pre><code class=\"hljs shell\">npm <span class=\"hljs-keyword\">install</span> pzvue-checkbox\n</code></pre>\n<h2 id=\"attribute\">Attribute</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>id</td>\n<td>checkbox的id</td>\n<td>string</td>\n<td></td>\n<td>uuid</td>\n</tr>\n<tr>\n<td>value</td>\n<td></td>\n<td>all</td>\n<td></td>\n<td>0</td>\n</tr>\n<tr>\n<td>name</td>\n<td></td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>禁用</td>\n<td>boolean</td>\n<td>true, false</td>\n<td>false</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>是否选中</td>\n<td>bool</td>\n<td>true, false</td>\n<td>false</td>\n</tr>\n<tr>\n<td>change</td>\n<td>change事件</td>\n<td>function</td>\n<td></td>\n<td>function(value, ischecked){}</td>\n</tr>\n</tbody>\n</table>\n\n  </div>\n</div>");
  module.exports = exports['default'];
  //# sourceMappingURL=/pages/checkbox.js.map
  

});
