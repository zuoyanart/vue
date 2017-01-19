const PZInput = require('./src/input');
// const ElButtonGroup = require('./src/button-group');

PZInput.install = function(Vue) {
  Vue.component(PZInput.name, PZInput);
  // Vue.component(ElInputGroup.name, ElInputGroup);
};

module.exports = PZInput;
