const PZCheckBoxGroup = require('./src/checkbox-group');

PZCheckBoxGroup.install = function(Vue) {
  Vue.component('pz-checkboxgroup', PZCheckBoxGroup);
};

module.exports = PZCheckBoxGroup;
