define('pages/about.vue', function(require, exports, module) {

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
  })("<div style=\"width:800px;margin:100px auto;\">\n    <timeline>\n      <timeline-item color=\"red\">\n        <h2 class=\"tl-time\">Top Now</h2>\n        <div class=\"tl-content\">\n          花名：左盐<br>\n          E-mail：<a href=\"mailto:huabinglan@163.com\">huabinglan@163.com</a><br>\n          QQ：490526801<br>\n          网站：<a href=\"http://www.zuoyan.space\" target=\"_blank\">zuoyan.space</a><br>\n          前端主技术流：jQuery，vue，nodejs等<br>\n          后端主技术流： golang，C#，mysql，mongodb，redis等\n        </div>\n      </timeline-item>\n      <timeline-item color=\"green\">\n        <h2 class=\"tl-time\">2016/12/8</h2>\n        <div class=\"tl-content\">\n          自主创业\n        </div>\n      </timeline-item>\n      <timeline-item color=\"green\"></timeline-item>\n      <timeline-item color=\"green\"></timeline-item>\n      <timeline-item color=\"green\"></timeline-item>\n      <timeline-item color=\"green\"></timeline-item>\n      <timeline-item color=\"green\"></timeline-item>\n      <timeline-item color=\"green\"></timeline-item>\n      <timeline-item color=\"green\">\n        <h2 class=\"tl-time\">2008/2</h2>\n        <div class=\"tl-content\">\n          打工一族\n        </div>\n      </timeline-item>\n    </timeline>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/pages/about.js.map
  

});
