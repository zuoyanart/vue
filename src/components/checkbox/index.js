const PZCheckbox = require('./src/checkbox');

PZCheckbox.install = function(Vue) {
  Vue.component('pz-checkbox', PZCheckbox);
};

module.exports = PZCheckbox;
