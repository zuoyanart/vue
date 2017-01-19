const PZRadio = require('./src/radio');

PZRadio.install = function(Vue) {
  Vue.component('pz-radio', PZRadio);
};

module.exports = PZRadio;
