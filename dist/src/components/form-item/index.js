const PZFormItem = require('./src/form-item');

PZFormItem.install = function(Vue) {
  Vue.component('pz-formitem', PZFormItem);
};

module.exports = PZFormItem;
