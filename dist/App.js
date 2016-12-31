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
  })("<div id=\"app\">\n  <div class=\"head\">\n    <div class=\"head-c\">\n      <h1><router-link to=\"/\">Pizza Vue<em>1.0.0</em></router-link></h1>\n      <span>\n        <router-link to=\"/guid\">指南</router-link>\n        <router-link to=\"/component\">组件</router-link>\n        <router-link to=\"/change\">更新日志</router-link>\n        <router-link to=\"/about\">关于作者</router-link>\n      </span>\n    </div>\n  </div>\n  <router-view></router-view>\n  <div class=\"footer\">\n      <div class=\"footer-c\">\n         <span>Pizza Vue Ui</span>\n         <em>\n           <a href=\"https://github.com/zuoyanart/vue\" target=\"_blank\" alt=\"github\"><i class=\" icon-github\"></i></a>&nbsp;&nbsp;\n           <a href=\"mailto:huabinglan@163.com\" alt=\"email:huabinglan@163.com\"><i class=\" icon-envelope-alt\"></i></a>\n         </em>\n      </div>\n  </div>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/App.js.map
  

});
