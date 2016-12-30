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
  })("<div>\n  <h2>normal</h2>\n  <pzinput placeholder=\"normal\"></pzinput>\n  <br>\n  <pzinput placeholder=\"@163.com\" type=\"email\" id=\"input4\" value=\"\">\n    <template slot=\"prepend\">email</template>\n  </pzinput>\n  <br>\n  <pzinput placeholder=\"请输入网址\" type=\"email\" id=\"input5\" value=\"\" size=\"larger\">\n    <template slot=\"prepend\">http://</template>\n    <template slot=\"append\">.com</template>\n  </pzinput>\n  <br>\n  <pzinput placeholder=\"请输入网址\" type=\"email\" id=\"input5\" value=\"\" icon=\"user-md\"></pzinput>\n  <br>\n  <pzinput placeholder=\"请输入网址\" type=\"email\" id=\"input5\" value=\"不可用\" icon=\"user-md\" :disabled=\"true\"></pzinput>\n  <!-- <h2>数字按钮</h2> -->\n  <!-- <pzinputnumber></pzinputnumber> -->\n  <!-- <br><br> -->\n  <!-- <pzinputnumber :disabled=\"true\"></pzinputnumber> -->\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/pages/input.js.map
  

});
