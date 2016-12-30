define('pages/form.vue', function(require, exports, module) {

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
  
  var _pzvueRadio = require('node_modules/pzvue-radio/dist/pz-radio');
  
  var _pzvueRadio2 = _interopRequireDefault(_pzvueRadio);
  
  var _pzvueForm = require('node_modules/pzvue-form/dist/pz-form');
  
  var _pzvueForm2 = _interopRequireDefault(_pzvueForm);
  
  var _pzvueFormitem = require('node_modules/pzvue-formitem/dist/pz-formitem');
  
  var _pzvueFormitem2 = _interopRequireDefault(_pzvueFormitem);
  
  // import pzcheckboxgroup from 'pzvue-checkbox-group';
  
  var _pzvueRadioGroup = require('node_modules/pzvue-radio-group/dist/pz-radio-group');
  
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
      // pzinputnumber,
      pzradio: _pzvueRadio2['default'],
      "pz-form": _pzvueForm2['default'],
      "pz-formitem": _pzvueFormitem2['default'],
      // "pz-checkboxgroup":pzcheckboxgroup,
      "pz-radiogroup": _pzvueRadioGroup2['default']
    },
    methods: {
      submitHandle: function submitHandle() {
        var ischeck;
        return regeneratorRuntime.async(function submitHandle$(context$1$0) {
          var _this = this;
  
          while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
              context$1$0.next = 2;
              return regeneratorRuntime.awrap(this.$refs.form.validate());
  
            case 2:
              ischeck = context$1$0.sent;
  
              if (ischeck) {//通过验证
                //TODO: submit or ajax
              } else {
                  (function () {
                    console.log("数据验证失败");
                    var id = _this.$layer.alert("this is demo", {
                      title: "警告"
                    }, function () {
                      this.$layer.close(id);
                    });
                  })();
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
  })("<div>\n  <h2>表单</h2>\n  <pz-form ref=\"form\">\n    <pz-formitem label=\"活动名称\" :validate=\"rules.name\">\n      <pzinput v-model=\"form.name\" placeholder=\"请输入活动名称\"></pzinput>\n    </pz-formitem>\n    <pz-formitem label=\"活动区域\" :validate=\"rules.area\">\n      <pzinput v-model=\"form.area\" placeholder=\"请输入活动区域\"></pzinput>\n    </pz-formitem>\n    <pz-formitem label=\"活动时间\" :validate=\"rules.time\">\n      <pzinput v-model=\"form.time\"></pzinput>\n    </pz-formitem>\n    <pz-formitem label=\"及时配送\" :validate=\"rules.ps\">\n      <pzinput v-model=\"form.ps\"></pzinput>\n    </pz-formitem>\n    <pz-formitem label=\"活动性质\" :validate=\"rules.xz\">\n      <pz-checkboxgroup v-model=\"form.xz\">\n        <pzcheckbox name=\"form1\" value=\"1\" checked=\"true\">美食</pzcheckbox>\n        <pzcheckbox name=\"form1\" value=\"2\" checked=\"true\">地推活动</pzcheckbox>\n        <pzcheckbox name=\"form1\" value=\"3\" checked=\"true\">线下活动</pzcheckbox>\n        <pzcheckbox name=\"form1\" value=\"4\" checked=\"true\">品牌活动</pzcheckbox>\n      </pz-checkboxgroup>\n    </pz-formitem>\n    <pz-formitem label=\"特殊资源\">\n      <pz-radiogroup v-model=\"form.zy\">\n        <pzradio name=\"formradio\" value=\"1\" checked=\"true\" v-model=\"form.time\">线上品牌商赞助</pzradio>\n        <pzradio name=\"formradio\" value=\"2\">线上品牌商赞助</pzradio>\n      </pz-radiogroup>\n    </pz-formitem>\n    <pz-formitem label=\"活动形式\" :validate=\"rules.xs\">\n      <pzinput v-model=\"form.xs\"></pzinput>\n    </pz-formitem>\n    <pz-formitem><pzbutton @click.native=\"submitHandle\">提交</pzbutton></pz-formitem>\n  </pz-form>\n  <br><br>\n  result11d:  {{form}}\n</div>");
  module.exports = exports['default'];
  //# sourceMappingURL=/pages/form.js.map
  

});
