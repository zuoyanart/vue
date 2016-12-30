define('pages/radio.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _pzvueButton = require('node_modules/pzvue-button/dist/pz-button');
  
  var _pzvueButton2 = _interopRequireDefault(_pzvueButton);
  
  var _componentsCheckboxIndex = require('../components/checkbox/index');
  
  var _componentsCheckboxIndex2 = _interopRequireDefault(_componentsCheckboxIndex);
  
  var _componentsInputIndex = require('../components/input/index');
  
  var _componentsInputIndex2 = _interopRequireDefault(_componentsInputIndex);
  
  var _componentsInputNumberIndex = require('../components/input-number/index');
  
  var _componentsInputNumberIndex2 = _interopRequireDefault(_componentsInputNumberIndex);
  
  var _componentsRadioIndex = require('../components/radio/index');
  
  var _componentsRadioIndex2 = _interopRequireDefault(_componentsRadioIndex);
  
  var _componentsFormIndex = require('../components/form/index');
  
  var _componentsFormIndex2 = _interopRequireDefault(_componentsFormIndex);
  
  var _componentsFormItemIndex = require('../components/form-item/index');
  
  var _componentsFormItemIndex2 = _interopRequireDefault(_componentsFormItemIndex);
  
  var _componentsCheckboxGroupIndex = require('../components/checkbox-group/index');
  
  var _componentsCheckboxGroupIndex2 = _interopRequireDefault(_componentsCheckboxGroupIndex);
  
  var _componentsRadioGroupIndex = require('../components/radio-group/index');
  
  var _componentsRadioGroupIndex2 = _interopRequireDefault(_componentsRadioGroupIndex);
  
  exports['default'] = {
    data: function data() {
      return {
        form: {
          name: '',
          area: "",
          time: "",
          xz: [],
          zy: "",
          ps: "",
          xs: ""
        },
        rules: {
          name: { min: 1, max: 20, message: "请填写1-20位的名称" },
          area: { min: 1, max: 30, message: "请填写1-20位的名称" },
          time: { required: false, reg: 'time', message: "请填写1-20位的名称,非必填" },
          xz: { type: 'array', min: 3, max: 4, message: "请至少选择一项" },
          ps: { min: 1, max: 20, message: "请填写1-20位的名称" },
          xs: { min: 1, max: 20, message: "请填写1-20位的名称" }
        }
      };
    },
    components: {
      pzbutton: _pzvueButton2['default'],
      pzcheckbox: _componentsCheckboxIndex2['default'],
      pzinput: _componentsInputIndex2['default'],
      pzinputnumber: _componentsInputNumberIndex2['default'],
      pzradio: _componentsRadioIndex2['default'],
      "pz-form": _componentsFormIndex2['default'],
      "pz-formitem": _componentsFormItemIndex2['default'],
      "pz-checkboxgroup": _componentsCheckboxGroupIndex2['default'],
      "pz-radiogroup": _componentsRadioGroupIndex2['default']
    },
    methods: {
      submitHandle: function submitHandle() {
        var ischeck;
        return regeneratorRuntime.async(function submitHandle$(context$1$0) {
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$refs.form.validate());
  
            case 2:
              ischeck = context$1$0.sent;
  
              if (ischeck) {//通过验证
                //TODO: submit or ajax
              } else {
                  console.log("数据验证失败");
                }
  
            case 4:
            case 'end':
              return context$1$0.stop();
          }
        }, null, this);
      }
    }
  };
  
  (function (template) {
  
    module && module.exports && (module.exports.template = template);
  
    exports && exports['default'] && (exports['default'].template = template);
  })("<div>\n  <h2>单选</h2>\n  <pzradio name=\"t1\" value=\"0\" checked=\"true\">选项1</pzradio>\n  <pzradio name=\"t1\" value=\"1\">选项2</pzradio>\n  <pzradio name=\"t1\" value=\"2\">选项3</pzradio>\n  <pzradio name=\"t1\" value=\"3\" :disabled=\"true\">禁用</pzradio>\n</div>");
  module.exports = exports['default'];
  //# sourceMappingURL=/pages/radio.js.map
  

});
