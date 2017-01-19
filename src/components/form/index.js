const PZForm = require('./src/form');

PZForm.install = function(Vue) {
  Vue.component('pz-form', PZForm);
};

module.exports = PZForm;
