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
  })("<div>\n  <h2>普通样式</h2>\n  <pzbutton>默认</pzbutton>\n  <pzbutton btn=\"success\">成功</pzbutton>\n  <pzbutton btn=\"info\">一般信息</pzbutton>\n  <pzbutton btn=\"warning\">警告</pzbutton>\n  <pzbutton btn=\"danger\">危险</pzbutton>\n  <pzbutton btn=\"danger\" :disabled=\"true\">禁用</pzbutton>\n  <h2>图标样式</h2>\n  <pzbutton icon=\"user-md\">默认</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"success\">成功</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"info\">一般信息</pzbutton>\n  <pzbutton btn=\"danger\" :loading=\"true\">危险</pzbutton>\n  <h2>块级样式</h2>\n  <pzbutton icon=\"user-md\" size=\"block\">默认</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"success\" size=\"block\">成功</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"info\" size=\"block\">一般信息</pzbutton>\n  <pzbutton btn=\"danger\" :loading=\"true\" size=\"block\">危险</pzbutton>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/pages/button.js.map
  

});
