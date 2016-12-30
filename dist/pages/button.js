define('pages/button.vue', function(require, exports, module) {

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
  
  var _pzvueRadio = require('pzvue-radio');
  
  var _pzvueRadio2 = _interopRequireDefault(_pzvueRadio);
  
  var _pzvueForm = require('node_modules/pzvue-form/dist/pz-form');
  
  var _pzvueForm2 = _interopRequireDefault(_pzvueForm);
  
  var _pzvueFormItem = require('pzvue-form-item');
  
  var _pzvueFormItem2 = _interopRequireDefault(_pzvueFormItem);
  
  var _pzvueCheckboxGroup = require('pzvue-checkbox-group');
  
  var _pzvueCheckboxGroup2 = _interopRequireDefault(_pzvueCheckboxGroup);
  
  var _pzvueRadioGroup = require('pzvue-radio-group');
  
  var _pzvueRadioGroup2 = _interopRequireDefault(_pzvueRadioGroup);
  
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
      pzcheckbox: _pzvueCheckbox2['default'],
      pzinput: _pzvueInput2['default'],
      pzinputnumber: pzinputnumber,
      pzradio: _pzvueRadio2['default'],
      "pz-form": _pzvueForm2['default'],
      "pz-formitem": _pzvueFormItem2['default'],
      "pz-checkboxgroup": _pzvueCheckboxGroup2['default'],
      "pz-radiogroup": _pzvueRadioGroup2['default']
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
  })("<div>\n  <h2>普通样式</h2>\n  <pzbutton>默认</pzbutton>\n  <pzbutton btn=\"success\">成功</pzbutton>\n  <pzbutton btn=\"info\">一般信息</pzbutton>\n  <pzbutton btn=\"warning\">警告</pzbutton>\n  <pzbutton btn=\"danger\">危险</pzbutton>\n  <pzbutton btn=\"danger\" :disabled=\"true\">禁用</pzbutton>\n  <h2>图标样式</h2>\n  <pzbutton icon=\"user-md\">默认</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"success\">成功</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"info\">一般信息</pzbutton>\n  <pzbutton btn=\"danger\" :loading=\"true\">危险</pzbutton>\n  <h2>块级样式</h2>\n  <pzbutton icon=\"user-md\" size=\"block\">默认</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"success\" size=\"block\">成功</pzbutton>\n  <pzbutton icon=\"user-md\" btn=\"info\" size=\"block\">一般信息</pzbutton>\n  <pzbutton btn=\"danger\" :loading=\"true\" size=\"block\">危险</pzbutton>\n</div>");
  module.exports = exports['default'];
  //# sourceMappingURL=/pages/button.js.map
  

});
