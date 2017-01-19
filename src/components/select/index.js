const PZSelect = require('./src/select.vue');

PZSelect.install = function(Vue) {
  Vue.component("pz-select", PZSelect);
};

module.exports = PZSelect;
