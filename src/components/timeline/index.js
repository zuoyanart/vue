const PZtimeline = require('./src/timeline');

PZtimeline.install = function(Vue) {
  Vue.component('pz-timeline', PZtimeline);
};

module.exports = PZtimeline;
