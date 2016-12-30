define('pages/component.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pzvueButton = require('node_modules/pzvue-button/dist/pz-button');
  
  var _pzvueButton2 = _interopRequireDefault(_pzvueButton);
  
  var _pzvueCheckbox = require('node_modules/pzvue-checkbox/dist/pz-checkbox');
  
  var _pzvueCheckbox2 = _interopRequireDefault(_pzvueCheckbox);
  
  var _pzvueInput = require('node_modules/pzvue-input/dist/pz-input');
  
  var _pzvueInput2 = _interopRequireDefault(_pzvueInput);
  
  var _pzvueForm = require('node_modules/pzvue-form/dist/pz-form');
  
  var _pzvueForm2 = _interopRequireDefault(_pzvueForm);
  
  var _pzvueFormitem = require('node_modules/pzvue-formitem/dist/pz-formitem');
  
  var _pzvueFormitem2 = _interopRequireDefault(_pzvueFormitem);
  
  var _pzvueSelect = require('node_modules/pzvue-select/dist/pz-select');
  
  var _pzvueSelect2 = _interopRequireDefault(_pzvueSelect);
  
  exports['default'] = {
    data: function data() {
      return {};
    },
    components: {},
    methods: {}
  };
  
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports['default'] && (exports['default'].template = template);
  })("<div class=\"main\">\n  <div class=\"left\">\n    <router-link to=\"button\">button</router-link>\n    <router-link to=\"input\">input</router-link>\n    <router-link to=\"checkbox\">checkbox</router-link>\n    <router-link to=\"radio\">radio</router-link>\n    <router-link to=\"select\">select</router-link>\n    <router-link to=\"form\">表单</router-link>\n    <router-link to=\"layer\">layer</router-link>\n  </div>\n  <div class=\"right\">\n      <router-view></router-view>\n  </div>\n</div>");
  module.exports = exports['default'];
  //# sourceMappingURL=/pages/component.js.map
  

});
