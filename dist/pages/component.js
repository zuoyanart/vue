define('pages/component.vue', function(require, exports, module) {

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
  })("<div class=\"main\">\n  <div class=\"left\">\n    <router-link to=\"button\">button</router-link>\n    <router-link to=\"input\">input</router-link>\n    <router-link to=\"checkbox\">checkbox</router-link>\n    <router-link to=\"radio\">radio</router-link>\n    <router-link to=\"select\">select</router-link>\n    <router-link to=\"form\">表单</router-link>\n    <router-link to=\"layer\">layer</router-link>\n  </div>\n  <div class=\"right\">\n      <router-view></router-view>\n  </div>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/pages/component.js.map
  

});
