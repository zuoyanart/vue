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
  
  // import pzcheckbox from 'pzvue-checkbox';
  
  exports['default'] = {
    data: function data() {
      return {
        checked: true
      };
    },
    components: {
      pzbutton: _pzvueButton2['default'],
      pzcheckbox: _pzvueCheckbox2['default']
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
  })("<div>\n  <h2>复选</h2>\n  <pzcheckbox name=\"c1\" value=\"1\" :checked=\"true\">好吧</pzcheckbox>\n  <pzcheckbox name=\"c1\" value=\"2\">sdf</pzcheckbox>\n  <pzcheckbox name=\"c1\" value=\"3\">sdf</pzcheckbox>\n  <pzcheckbox name=\"c1\" value=\"4\" :disabled=\"true\">不可用</pzcheckbox>\n  <h2>change事件</h2>\n  <pzcheckbox name=\"c1\" value=\"字符串值\" :change=\"change\">change事件</pzcheckbox>，打开控制台看输出\n  <h2>切换状态</h2>\n  <pzcheckbox name=\"c1\" value=\"5\" :checked=\"checked\" :change=\"change1\">切换选中状态</pzcheckbox>\n  <br>\n  <br>\n  <pzbutton @click.native=\"changeChecked\">切换选中状态</pzbutton>\n\n</div>");
  module.exports = exports['default'];
  //# sourceMappingURL=/pages/checkbox.js.map
  

});
