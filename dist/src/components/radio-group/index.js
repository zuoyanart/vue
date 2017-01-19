const PZRadioGroup = require('./src/radio-group');

PZRadioGroup.install = function(Vue) {
  Vue.component('pz-radiogroup', PZRadioGroup);
};

module.exports = PZRadioGroup;
