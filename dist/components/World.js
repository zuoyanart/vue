define('components/World.vue', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = {
    data: function data() {
      return {
        msg: 'Hello Vue!'
      };
    }
  };
  
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports["default"] && (exports["default"].template = template);
  })("<div class=\"hello\">\n  <h1>{{ msg }}</h1>\n</div>");
  module.exports = exports["default"];
  //# sourceMappingURL=/components/World.js.map
  

});
