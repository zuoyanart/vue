const PZButton = require('./src/Button');
// const ElButtonGroup = require('./src/button-group');

PZButton.install = function(Vue) {
  Vue.component(PZButton.name, PZButton);
  // Vue.component(ElButtonGroup.name, ElButtonGroup);
};

module.exports = PZButton;
