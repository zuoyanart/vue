define('pages/radio.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pzvueRadio = require('node_modules/pzvue-radio/dist/pz-radio');
  
  var _pzvueRadio2 = _interopRequireDefault(_pzvueRadio);
  
  var _pzvueRadioGroup = require('node_modules/pzvue-radio-group/dist/pz-radio-group');
  
  var _pzvueRadioGroup2 = _interopRequireDefault(_pzvueRadioGroup);
  
  exports['default'] = {
    data: function data() {
      return {};
    },
    components: {
      pzradio: _pzvueRadio2['default'],
      pzradiogroup: _pzvueRadioGroup2['default']
    },
    methods: {}
  };
  
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports['default'] && (exports['default'].template = template);
  })("<div>\n  <h2>单选</h2>\n  <pzradio name=\"t1\" value=\"0\" checked=\"true\">选项1</pzradio>\n  <pzradio name=\"t1\" value=\"1\">选项2</pzradio>\n  <pzradio name=\"t1\" value=\"2\">选项3</pzradio>\n  <pzradio name=\"t1\" value=\"3\" :disabled=\"true\">禁用</pzradio>\n  <div class=\"markdown\">\n    <pre><code class=\"hljs html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzradio</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"t1\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"0\"</span> <span class=\"hljs-attribute\">checked</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>选项1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzradio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzradio</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"t1\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"1\"</span>&gt;</span>选项2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzradio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzradio</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"t1\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"2\"</span>&gt;</span>选项3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzradio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">pzradio</span> <span class=\"hljs-attribute\">name</span>=<span class=\"hljs-value\">\"t1\"</span> <span class=\"hljs-attribute\">value</span>=<span class=\"hljs-value\">\"3\"</span> <span class=\"hljs-attribute\">:disabled</span>=<span class=\"hljs-value\">\"true\"</span>&gt;</span>禁用<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">pzradio</span>&gt;</span>\n</code></pre>\n\n  </div>\n</div>");
  module.exports = exports['default'];
  //# sourceMappingURL=/pages/radio.js.map
  

});
