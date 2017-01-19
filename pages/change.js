define('pages/change.vue', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  var _pzvueTimeline = require('node_modules/pzvue-timeline/dist/pz-timeline');
  
  var _pzvueTimeline2 = _interopRequireDefault(_pzvueTimeline);
  
  exports["default"] = {
    data: function data() {
      return {};
    },
    components: {
      "timeline": _pzvueTimeline2["default"],
      "timeline-item": _pzvueTimeline2["default"].item
    },
    methods: {}
  };
  
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports["default"] && (exports["default"].template = template);
  })("<div style=\"width:800px;margin:100px auto;\">\n    <timeline>\n      <timeline-item color=\"green\">\n        <h2 class=\"tl-time\">2017/1/19</h2>\n        <div class=\"tl-content\">\n          增加switch组件<br>\n          增加input-number组件<br>\n          增加timeline组件<br>\n          修复layer的loading自动关闭时间为默认100s<br>\n          去除layer组件的打包vue依赖<br>\n        </div>\n      </timeline-item>\n      <timeline-item color=\"green\">\n        <h2 class=\"tl-time\">2016/12/8</h2>\n        <div class=\"tl-content\">\n          增加vue-layer组件,包含aliert,msg,loading,confirm,tip等\n        </div>\n      </timeline-item>\n      <timeline-item color=\"green\">\n        <h2 class=\"tl-time\">2016/11/4</h2>\n        <div class=\"tl-content\">\n          增加checkbox组件<br>\n          增加select组件<br>\n          添加表单验证对checkbox和select的支持<br>\n        </div>\n      </timeline-item>\n\n      <timeline-item color=\"green\">\n        <h2 class=\"tl-time\">2016/10/17</h2>\n        <div class=\"tl-content\">\n          增加表单组件<br>\n          表单组件自带表单验证<br>\n        </div>\n      </timeline-item>\n\n      <timeline-item color=\"green\">\n        <h2 class=\"tl-time\">2016/10/14</h2>\n        <div class=\"tl-content\">\n          增加button组件<br>\n          增加input组件<br>\n        </div>\n      </timeline-item>\n      <timeline-item color=\"green\">\n        <h2 class=\"tl-time\">2016/10/13</h2>\n        <div class=\"tl-content\">\n          项目立项\n        </div>\n      </timeline-item>\n    </timeline>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/pages/change.js.map
  

});
