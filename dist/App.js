define('App.vue', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {
    data: function data() {
      return {};
    },
    components: {},
    methods: {}
  };
  
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports["default"] && (exports["default"].template = template);
  })("<div id=\"app\">\n  <div class=\"head\">\n    <div class=\"head-c\">\n      <h1><router-link to=\"/\">Pizza Vue<em>1.0.0</em></router-link></h1>\n      <span>\n        <router-link to=\"/guid\">指南</router-link>\n        <router-link to=\"/component\">组件</router-link>\n        <router-link to=\"/resource\">资源</router-link>\n      </span>\n    </div>\n  </div>\n  <router-view></router-view>\n  <div class=\"footer\">\n\n  </div>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/App.js.map
  

});
