const PZSwitch = require('./src/switch');

PZSwitch.install = function(Vue) {
  Vue.component('pz-switch', PZSwitch);
};

module.exports = PZSwitch;
