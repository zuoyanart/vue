const PZSelectOption = require('./src/select-option.vue');

PZSelectOption.install = function(Vue) {
  Vue.component("pz-selectoption", PZSelectOption);
};

module.exports = PZSelectOption;
