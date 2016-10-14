const PZInputNumber = require('./src/input-number');

PZInputNumber.install = function(Vue) {
  Vue.component(PZInputNumber.name, PZInputNumber);
};

module.exports = PZInputNumber;
