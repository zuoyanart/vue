const PZinputnumber = require('./src/inputnumber');

PZinputnumber.install = function(Vue) {
  Vue.component('pz-inputnumber', PZinputnumber);
};

module.exports = PZinputnumber;
