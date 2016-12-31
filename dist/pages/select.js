define('pages/select.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pzvueSelect = require('node_modules/pzvue-select/dist/pz-select');
  
  var _pzvueSelect2 = _interopRequireDefault(_pzvueSelect);
  
  var _pzvueButton = require('node_modules/pzvue-button/dist/pz-button');
  
  var _pzvueButton2 = _interopRequireDefault(_pzvueButton);
  
  exports['default'] = {
      data: function data() {
          return {
              defvalue: 3,
              form: {
                  name: '',
                  select1: ''
              },
              options: [{
                  text: "不限",
                  value: -1
              }, {
                  text: "高中",
                  value: 0
              }, {
                  text: "中专",
                  value: 1
              }, {
                  text: "大专",
                  value: 2
              }, {
                  text: "学士",
                  value: 3,
                  'default': true
              }, {
                  text: "硕士",
                  value: 4
              }],
              options1: [{
                  text: '<i class="icon-star"></i>',
                  value: 0
              }, {
                  text: '<i class="icon-star"></i><i class="icon-star"></i>',
                  value: 1
              }, {
                  text: '<i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i>',
                  value: 2
              }, {
                  text: '<i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i>',
                  value: 3
              }, {
                  text: '<i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i><i class="icon-star"></i>',
                  value: 4,
                  'default': true
              }]
          };
      },
      components: {
          "pz-select": _pzvueSelect2['default'],
          "pz-button": _pzvueButton2['default']
      },
      methods: {
          change: function change(val) {
              document.getElementById("change").innerHTML = '您选中的值为：' + val;
              console.log("已执行");
          },
          change1: function change1(val) {
              document.getElementById("change1").innerHTML = '您选中的值为：' + val;
              console.log("已执行");
          },
          changeValue: function changeValue() {
              console.log("456sd");
              this.defvalue = Date.parse(new Date()) / 1000 % 5;
          }
      }
  };
  
  (function (template) {
  
      module && module.exports && (module.exports.template = template);
  
      exports && exports['default'] && (exports['default'].template = template);
  })("<div>\n    <h2>普通样式</h2>\n    <pz-select :options=\"options\" v-model=\"form.name\" placeholder=\"不限\">默认</pz-select>\n    <br> value={{form.name}}\n    <div class=\"markdown\">\n      <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pz-select</span> <span class=\"hljs-attribute\">:options</span>=<span class=\"hljs-value\">\"options\"</span> <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"form.name\"</span> <span class=\"hljs-attribute\">placeholder</span>=<span class=\"hljs-value\">\"不限\"</span>&gt;</span>默认<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pz-select</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> value={{form.name}}\n</code></pre>\n<pre><code class=\"hljs js\">options: [{\n    text: <span class=\"hljs-string\">\"不限\"</span>,\n    value: -<span class=\"hljs-number\">1</span>\n}, {\n    text: <span class=\"hljs-string\">\"高中\"</span>,\n    value: <span class=\"hljs-number\">0</span>\n}, {\n    text: <span class=\"hljs-string\">\"中专\"</span>,\n    value: <span class=\"hljs-number\">1</span>\n}, {\n    text: <span class=\"hljs-string\">\"大专\"</span>,\n    value: <span class=\"hljs-number\">2</span>\n}, {\n    text: <span class=\"hljs-string\">\"学士\"</span>,\n    value: <span class=\"hljs-number\">3</span>,\n    <span class=\"hljs-keyword\">default</span>: <span class=\"hljs-literal\">true</span>\n}, {\n    text: <span class=\"hljs-string\">\"硕士\"</span>,\n    value: <span class=\"hljs-number\">4</span>\n}],\n</code></pre>\n\n    </div>\n    <h2>自定义样式</h2>\n    <pz-select :options=\"options1\" v-model=\"form.select1\">默认</pz-select>\n    <br>\n    <br> value={{form.select1}}\n    <div class=\"markdown\">\n      <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pz-select</span> <span class=\"hljs-attribute\">:options</span>=<span class=\"hljs-value\">\"options1\"</span> <span class=\"hljs-attribute\">v-model</span>=<span class=\"hljs-value\">\"form.select1\"</span>&gt;</span>默认<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pz-select</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">br</span>&gt;</span> value={{form.select1}}\n</code></pre>\n<pre><code class=\"hljs js\">options1: [{\n    text: <span class=\"hljs-string\">'&lt;i class=\"icon-star\"&gt;&lt;/i&gt;'</span>,\n    value: <span class=\"hljs-number\">0</span>\n}, {\n    text: <span class=\"hljs-string\">'&lt;i class=\"icon-star\"&gt;&lt;/i&gt;&lt;i class=\"icon-star\"&gt;&lt;/i&gt;'</span>,\n    value: <span class=\"hljs-number\">1</span>\n}, {\n    text: <span class=\"hljs-string\">'&lt;i class=\"icon-star\"&gt;&lt;/i&gt;&lt;i class=\"icon-star\"&gt;&lt;/i&gt;&lt;i class=\"icon-star\"&gt;&lt;/i&gt;'</span>,\n    value: <span class=\"hljs-number\">2</span>\n}, {\n    text: <span class=\"hljs-string\">'&lt;i class=\"icon-star\"&gt;&lt;/i&gt;&lt;i class=\"icon-star\"&gt;&lt;/i&gt;&lt;i class=\"icon-star\"&gt;&lt;/i&gt;&lt;i class=\"icon-star\"&gt;&lt;/i&gt;'</span>,\n    value: <span class=\"hljs-number\">3</span>\n}, {\n    text: <span class=\"hljs-string\">'&lt;i class=\"icon-star\"&gt;&lt;/i&gt;&lt;i class=\"icon-star\"&gt;&lt;/i&gt;&lt;i class=\"icon-star\"&gt;&lt;/i&gt;&lt;i class=\"icon-star\"&gt;&lt;/i&gt;&lt;i class=\"icon-star\"&gt;&lt;/i&gt;'</span>,\n    value: <span class=\"hljs-number\">4</span>,\n    <span class=\"hljs-keyword\">default</span>: <span class=\"hljs-literal\">true</span>\n}]\n</code></pre>\n\n    </div>\n    <h2>带change事件</h2>\n    <pz-select :options=\"options1\" :change=\"change\" :default=\"3\">默认</pz-select>\n    <br><br>\n    <p id=\"change\"></p>\n    <div class=\"markdown\">\n      <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pz-select</span> <span class=\"hljs-attribute\">:options</span>=<span class=\"hljs-value\">\"options1\"</span> <span class=\"hljs-attribute\">:change</span>=<span class=\"hljs-value\">\"change\"</span> <span class=\"hljs-attribute\">:default</span>=<span class=\"hljs-value\">\"3\"</span>&gt;</span>默认<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pz-select</span>&gt;</span>\n</code></pre>\n<pre><code class=\"hljs js\">methods: {\n  change: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">val</span>) </span>{\n    <span class=\"hljs-built_in\">document</span>.getElementById(<span class=\"hljs-string\">\"change\"</span>).innerHTML = <span class=\"hljs-string\">'您选中的值为：'</span> + val;\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">\"已执行\"</span>);\n  },\n}\n</code></pre>\n\n    </div>\n    <h2>带change事件并动态改变选中的值</h2>\n    <pz-select :options=\"options1\" :change=\"change1\" :default=\"defvalue\">默认</pz-select>\n    <br><br>\n    <pz-button @click.native=\"changeValue\">改变value(每秒点一次)</pz-button>\n    <p id=\"change1\"></p>\n    <div class=\"markdown\">\n      <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pz-select</span> <span class=\"hljs-attribute\">:options</span>=<span class=\"hljs-value\">\"options1\"</span> <span class=\"hljs-attribute\">:change</span>=<span class=\"hljs-value\">\"change\"</span> <span class=\"hljs-attribute\">:default</span>=<span class=\"hljs-value\">\"3\"</span>&gt;</span>默认<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pz-select</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pz-button</span> @<span class=\"hljs-attribute\">click.native</span>=<span class=\"hljs-value\">\"changeValue\"</span>&gt;</span>改变value(每秒点一次)<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pz-button</span>&gt;</span>\n</code></pre>\n<pre><code class=\"hljs js\">methods: {\n  change: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">val</span>) </span>{\n    <span class=\"hljs-built_in\">document</span>.getElementById(<span class=\"hljs-string\">\"change\"</span>).innerHTML = <span class=\"hljs-string\">'您选中的值为：'</span> + val;\n    <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">\"已执行\"</span>);\n  },\n  changeValue: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    <span class=\"hljs-keyword\">this</span>.defvalue = (<span class=\"hljs-built_in\">Date</span>.parse(<span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>()) / <span class=\"hljs-number\">1000</span>) % <span class=\"hljs-number\">5</span>;\n  }\n}\n</code></pre>\n\n    </div>\n    <div class=\"markdown\">\n      <h2 id=\"install\">install</h2>\n<pre><code class=\"hljs javascript\">npm install pzvue-select\n</code></pre>\n<h2 id=\"attribute\">Attribute</h2>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>placeholder</td>\n<td>占位符</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>options</td>\n<td>选项</td>\n<td>Array</td>\n<td></td>\n<td>[{text: &quot;不限&quot;,value: 0,default: true}]</td>\n</tr>\n<tr>\n<td>default</td>\n<td>默认值</td>\n<td>all</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>禁用</td>\n<td>boolean</td>\n<td>true, false</td>\n<td>false</td>\n</tr>\n<tr>\n<td>change</td>\n<td>change事件</td>\n<td>function</td>\n<td></td>\n<td>function(value){}</td>\n</tr>\n</tbody>\n</table>\n\n    </div>\n</div>");
  module.exports = exports['default'];
  //# sourceMappingURL=/pages/select.js.map
  

});
